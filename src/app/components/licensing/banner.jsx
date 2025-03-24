import ButtonLink from "../common/buttonLink";
import Img from "../common/image";

const Banner = () => {
    return (
        <section className="sm:px-[10rem] px-[2.5rem] mt-[12rem]">
            <div className="flex max-w-[1800px] mx-auto flex-col border rounded-[1rem] border-[#929292] relative pb-[6rem] bg-[#000000] sm:pt-[8.5rem] items-center pt-[6rem] ">
                <Img
                    src={"/licensing/ace-mq.svg"}
                    className={"absolute sm:w-[18rem] w-[12rem] top-[-1.5rem] sm:top-[-3rem]"}
                />
                <h2 className="sm:text-[4rem] text-[2.5rem] sm:w-[70rem] text-center">Act Now – Secure Your RabbitMQ <span className="text-[#FF6600] font-[700]">Compliance & Support</span></h2>
                <p className="sm:w-[70rem] sm:text-[1.8rem] mt-[2rem] text-center">Don’t wait until compliance issues or security vulnerabilities disrupt your business. AceMQ makes it easy to get licensed, stay secure, and ensure your RabbitMQ deployment is supported for the long run.</p>
                <ButtonLink
                    text={"Schedule a Free Consultation"}
                    link={""}
                    className={"border-[.5px] rounded-[.5rem]"}
                />
            </div>
        </section>
    );
}

export default Banner;