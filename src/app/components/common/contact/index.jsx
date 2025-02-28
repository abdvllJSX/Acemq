"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
const Index = ({ route }) => {
  const [loading, setLoading] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [honeypot, setHoneypot] = useState("");
  const [message, setMessage] = useState("");
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const pathName = usePathname();

  const router = useRouter();
  useEffect(() => {
    setEmailError(EMAIL_REGEX.test(email));
  }, [email]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (honeypot.trim() !== "") {
      console.log("Bot detected.");
      return;
    }
    setLoading(true);
    if (!emailError) {
      toast.error("Enter a valid Email Address");
      setLoading(false);
      return;
    }
    try {
      const json = await fetch("https://formspree.io/f/xqaejgbp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "This is a ContactUS email from ACEMQ",
          "Full Name": name,
          Email: email,
          Description: message,
          Page: pathName,
        }),
      });

      const response = await json.json();
      if (response) {
        setLoading(false);
        router.push(`/thank-you/?source=${route}`);
        setName("");
        setMessage("");
        setEmail("");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <section
      className="sm:px-[10rem] relative sm:mt-[20rem] pb-[5rem] scroll-mt-[5rem]"
      id="contact"
    >
      <ToastContainer />
      <div className="pt-[2rem] sm:pl-[7rem] px-[3rem] pb-[1rem] sm:pb-[5rem] mt-[5rem] sm:mt-[12rem] bg-black sm:flex sm:justify-between rounded-[3rem]">
        <div className="sm:flex-1 sm:relative sm:pt-[7rem]">
          <h4 className="text-center text-[3rem] sm:text-left sm:absolute sm:top-[-5rem] sm:bg-[#8FD5CC] sm:text-[#030303] sm:px-[2rem] sm:py-[.8rem] sm:rounded-[1rem]">
            Contact{" "}
            <span className="font-[700] sm:text-[#030303] text-[#8FD5CC]">
              Us
            </span>
          </h4>

          {pathName == "/" && (
            <Image
              src={"/headset.svg"}
              width={54}
              height={54}
              className="absolute hidden sm:block w-[4rem] aspect-square sm:top-[-4rem] left-[-7rem]"
              alt="head set"
            />
          )}

          <p className="text-center sm:text-left">
            Contact Us To Speak With One of Our Experts
          </p>
          <ul className="mt-[4rem] flex flex-col gap-y-[2rem]">
            <Link href="">
              <li className="flex gap-x-[2rem]">
                <img
                  src="/message_blue.svg"
                  className="w-[1.4rem]"
                  alt="mail"
                />{" "}
                <p className="w-[2px]">info@acemq.com</p>{" "}
              </li>
            </Link>

            <li className="flex gap-x-[2rem]">
              <img src="/phone_blue.svg" className="w-[1.4rem]" alt="phone" />{" "}
              <p className="">+1 305-204-2607</p>
            </li>
            <li className="flex gap-x-[2rem]">
              <img
                src="/location_blue.svg"
                className="w-[1.4rem]"
                alt="location"
              />{" "}
              <p className="">66 W. Flagler St. 9th Floor Miami, FL 33130</p>
            </li>
          </ul>
        </div>
        <div className="sm:flex-[.8]">
          <form
            action=""
            className="bg-white border border-[#8FD5CC] sm:mt-[-7rem] px-[2.3rem] py-[1.5rem] sm:py-[4rem] flex flex-col rounded-[1rem] mt-[3rem]"
          >
            {/* Honeypot Field - hidden from real users */}
            <div style={{ position: "absolute", left: "-9999px" }}>
              <label htmlFor="honeypot">Leave this field empty</label>
              <input
                type="text"
                id="honeypot"
                name="honeypot"
                tabIndex="-1"
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>
            <div className="sm:flex justify-between gap-[2rem]">
              <div className="flex py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem] sm:flex-1">
                <img src="/name.svg" alt="name" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-black focus:outline-none text-[1.2rem]"
                  placeholder="Name"
                />
              </div>
              <div className="flex py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem] sm:flex-1">
                <img src="/email.svg" alt="email" />
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-black focus:outline-none text-[1.2rem]"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="flex items-start  py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem]">
              <img
                src="/message.svg"
                required
                className="mt-[.4rem]"
                alt="message"
              />
              <textarea
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full text-black focus:outline-none text-[1.2rem] h-[8rem] sm:h-[14rem] resize-none"
                placeholder="Message"
              />
            </div>

            <button
              disabled={name == "" || email == "" || message == ""}
              className="text-black disabled:opacity-[.5] self-end bg-[#8FD5CC]"
              onClick={handleSubmit}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Index;
