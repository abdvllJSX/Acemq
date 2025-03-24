import ButtonLink from "../common/ButtonLink";
import Img from "../common/image";

const UseCase = () => {
    return (
        <section className="sm:px-[10rem] px-[2.5rem] mt-[6rem] sm:mt-[8rem]">
            <div className="flex flex-col sm:flex-row border max-w-[1900px]  mx-auto rounded-[2rem] border-[#8FD5CC] sm:px-[3.5rem] px-[1.5rem] py-[5rem] justify-between">
                <div className="flex flex-col">
                    <h2 className="sm:text-[3rem] text-center sm:text-start text-[2.5rem] sm:w-[90%] font-[400]"><span className="font-[700]">RabbitMQ</span> <span className="font-[300]">Licensing Ensures</span> <span className="font-[700]">Compliance</span> for <span className="text-[#8FD5CC] font-[500]">Global Financial Services</span> Firm</h2>

                    <p className="mt-[2rem] text-center sm:text-start sm:text-[1.4rem] sm:w-[90%]">AceMQ partnered with a leading global financial services firm to address their RabbitMQ licensing and compliance challenges. With the end of community support for RabbitMQ 3.13.x, the firm faced significant risks in maintaining their mission-critical messaging infrastructure. Our team implemented a tailored licensing solution that allowed the company to become compliant without being constrained by Broadcom's 50-core minimum Tanzu RabbitMQ restrictions. We provided continuous updates and security patches beyond RabbitMQ 3.13.7, ensuring the firm's messaging system remained secure and stable. By leveraging our 24/7 enterprise-level support with 15-minute SLAs, the financial services giant experienced zero downtime during the transition. This comprehensive solution enabled the firm to maintain regulatory compliance, mitigate security risks, and optimize their RabbitMQ infrastructure for future growth, ultimately safeguarding their operations and customer data integrity.</p>

                    <ButtonLink
                        text="Learn More"
                        link={""}
                        className={"rounded-[.5rem] mx-auto sm:mx-0 border-[.5px] border-[#8FD5CC] bg-[#232323]"}
                    />
                </div>

                <Img
                    src="/licensing/licensing-usecase.png"
                    alt="usecase Image"
                    className="sm:w-[50rem] hidden sm:block"
                />
            </div>
        </section>
    );
}

export default UseCase;