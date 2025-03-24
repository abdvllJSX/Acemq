import Img from "../common/image";
const Compliant = () => {
    const complaints = [
        {
            icon: '/licensing.svg',
            title: <h2 className="text-[2.5rem] mt-[2rem] sm:mt-[0] sm:text-[3rem] sm:mb-[1rem] mb-[2rem] text-[#8FD5CC] font-[700] w-[20rem]"><span className="font-[400] text-white">Entry-Level</span> Licensing</h2>,
            content: "Tailored solutions that allow businesses to become compliant without Broadcom’s 50-core minimum Tanzu RabbitMQ restrictions.",
        },
        {
            icon: '/strategy.svg',
            title: <h2 className="text-[2.5rem] mt-[2rem] sm:mt-[0] sm:text-[3rem] sm:mb-[1rem] mb-[2rem] font-[700] text-[#8FD5CC]"><span className="font-[400] text-white">Enterprise</span> <br></br> Licensing Strategy</h2>,
            content: "We work with you to implement a long-term plan to license and support all of your RabbitMQ environments.",
        },
        {
            icon: '/updates.svg',
            title: <h2 className="text-[2.5rem] mt-[2rem] sm:mt-[0] sm:text-[3rem] sm:mb-[1rem] mb-[2rem] text-[#8FD5CC] font-[700]"><span className="font-[400] text-white">Patches &</span> <br></br> Security Updates</h2>,
            content: "Get continuous updates beyond RabbitMQ 3.13.7, ensuring compliance and stability.",
        },
        {
            icon: '/compliance.svg',
            title: <h2 className="text-[2.5rem] mt-[2rem] sm:mt-[0] sm:text-[3rem] text-[#8FD5CC] sm:mb-[1rem] mb-[2rem] font-[700]"><span className="font-[400] text-white">Regulatory &</span> <br></br> Compliance Assurance</h2>,
            content: "Stay compliant with evolving security and regulatory requirements.",
        },
        {
            icon: '/transition.svg',
            title: <h2 className="text-[2.5rem] mt-[2rem] sm:mt-[0] sm:text-[3rem] sm:mb-[1rem] mb-[2rem] text-[#8FD5CC] font-[700]"><span className="font-[400] text-white">Seamless</span> <br></br>Licensing Transition</h2>,
            content: "We help migrate existing production environments without disruption or unexpected costs.",
        },
    ]


    return (
        <section className="sm:px-[10rem] px-[2.5rem] sm:mt-[4rem] mt-[2rem]">
            <h1 className="text-center font-[400] sm:text-[3rem] text-[2.5rem]">Licensing <span className="font-[700] text-[#FF6600]">RabbitMQ</span> with <span className="font-[700] text-[#FF6600]">AceMQ</span> – Stay <span className="font-[700]">Compliant & Secure</span></h1>
            <p className="text-center text-[2rem] sm:w-[87rem] mx-auto mt-[1.5rem]">As RabbitMQ moves under Broadcom’s commercial licensing model, securing a cost-effective and scalable licensing solution is critical. AceMQ provides</p>

            <div className="grid max-w-[1900px] mx-auto sm:grid-cols-3 gap-x-[2rem] gap-y-[2rem] mt-[5rem]">
                {
                    complaints.map((item, i) =>
                        <Card
                            item={item}
                            key={i}
                        />)
                }
            </div>
        </section>
    );
}


const Card = ({ item }) => {
    return (
        <div className="flex flex-col rounded-[1rem] bg-[#11151A] pl-[3rem] pt-[3rem] h-[35rem]">
            <Img
                src={`/licensing/${item.icon}`}
                alt="compliant"
                width={150}
                height={100}
                className={`size-[6rem] sm:mb-[1.2rem]`}
            />
            {item.title}
            <p className="sm:text-[1.5rem] w-[92%] font-[400]">{item.content}</p>
        </div>
    )
}

export default Compliant;