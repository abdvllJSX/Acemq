
const Differentiators = () => {

    const cards = [
        {
            title: <h2 className="font-[700] sm:text-[1.4rem] text-[1.6rem]">Organizations Running <span className="text-[#8FD5CC]">RabbitMQ 3.13.x</span> or Older</h2>,
            description: "Ensure compliance, security, and continuity beyond community-supported releases."
        },
        {
            title: <h2 className="font-[400] sm:text-[1.4rem] text-[1.6rem]">Enterprises Planning for Future <span className="font-[700] text-[#8FD5CC]">RabbitMQ Growth</span></h2>,
            description: "We help develop a long-term licensing and support strategy for your evolving messaging needs."
        },
        {
            title: <h2 className="font-[400] sm:text-[1.4rem] text-[1.6rem]">Businesses Seeking <span className="font-[700]">Licensing</span> Without <span className="font-[700] text-[#8FD5CC]">Broadcom's Minimums</span></h2>,
            description: "Ensure compliance, security, and continuity beyond community-supported releases."
        },
        {
            title: <h2 className="font-[400] sm:text-[1.4rem] text-[1.6rem]">Companies Concerned About <span className="font-[700]">Downtime & Security Risks</span></h2>,
            description: "AceMQ helps mitigate risks and keeps your RabbitMQ environment reliable and optimized."
        },
    ]

    return (
        <section className="sm:mt-[5rem] mt-[4rem] px-[2.5rem] sm:px-[10rem]">
            <h2 className="text-[3rem] text-center sm:mb-[1.5rem]">Our Customer Focus <span className="text-[#FF6600] font-[700]">Areas and Differentiators</span></h2>
            <p className="text-center sm:w-[70rem] mx-auto">At Ace8, we go beyond standard Greenplum consulting to provide comprehensive solutions that address the most critical aspects of your data analytics environment. Here's how we stand out</p>

            <div className="sm:mt-[2rem] mt-[4rem] max-w-[1900px]  mx-auto grid sm:gap-y-[3rem] gap-[3rem] sm:grid-cols-2">
                {
                    cards.map((card, index) => {
                        return (
                            <Card
                                key={index}
                                {...card}
                                id={index}
                            />
                        )
                    })
                }
            </div>
        </section>
    );
}


const Card = ({ title, description, id }) => {
    const displayNumber = [1, 3, 2, 4][(id) % 4];
    return (
        <div className="flex sm:gap-[.8rem] gap-[1rem] items-center sm:w-[55rem]">
            <h2 className="text-[6rem] tabular-nums font-[700] text-[#8FD5CC] opacity-[.4]">{ displayNumber }</h2>

            <div className="border border-[#8FD5CC40] sm:px-[3rem] px-[2rem] sm:py-[2rem] py-[1rem]">
                {title}
                <p className="mt-[.7rem] sm:mt-0">{description}</p>
            </div>
        </div>
    )
}

export default Differentiators;