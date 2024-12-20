import Link from "next/link";

const Index = () => {
  return (
    <section data-animation-id='slideIn' className="mt-[6rem] pt-[2rem] sm:pt-[0] pb-[3rem] sm:pb-[0] px-[3rem] sm:px-[10rem] relative">
      <img
        src="/service_support_bg.webp"
        className="w-[100%] h-[100%] absolute inset-0 z-[-2]  sm:hidden"
        alt="background"
      />
      <img
        src="/service_support_bg2.png"
        className="w-[100%] h-[100%] absolute inset-0 z-[-1]  sm:hidden"
        alt="background"
      />
      <img
        src="/ace_logo_white.svg"
        className="w-[15rem] sm:w-[22rem] absolute top-[-2rem] sm:top-[-3rem] sm:left-[15rem]"
        alt="Acemq Logo"
      />
      <div className="sm:pl-[5rem] sm:py-[3rem] relative">
        <img
          src="/service_support_bg_sm.webp"
          className="w-[100%] h-[100%] absolute inset-0 z-[-1]  sm:block hidden"
          alt="background"
        />
        <div className="sm:w-[65rem] mt-[3rem]">
          <h2 className="text-[3rem] leading-[4rem] sm:text-[5rem] sm:leading-[6rem] font-[700] sm:w-[55rem]">
            <span className="font-[400]">Experience</span> Unparalleled Support
            with AceMQ
          </h2>
          <p className="mt-[2rem] sm:text-[2rem]">
            Ready to experience unparalleled support for your RabbitMQ
            Enterprise deployment? Trust AceMQ's 24/7 comprehensive SLA-based
            support to ensure uninterrupted operations and maximize the
            performance and reliability of your messaging infrastructure.
          </p>
          <Link href="#contact">
            <button className="border sm:mt-[3rem] mt-[2rem]">
              Contact Us for Unparalleled Support
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Index;
