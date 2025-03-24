const Maintenance = () => {

    const cols = [
        {
            title: "Continuous Updates & Enterprise Maintenance",
            items: [
                <span className="text-[1.6rem]"><span className="font-[600]"> Extended Support Beyond 3.13.7</span> – We provide patches, performance optimizations, and security updates beyond the final community release.</span>,
                <span className="text-[1.6rem]"><span className="font-[600]">Strategic Upgrade Planning</span> – Ensure a smooth transition as new RabbitMQ versions are released.</span>,
                <span className="text-[1.6rem]"><span className="font-[600]">Minimized Downtime & Business Disruptions</span>  – Critical update alerts and proactive fixes reduce operational risk.</span>,
            ]
        },
        {
            title: "Global 24x7 365 Enterprise-Level Support",
            items: [
                <span className="text-[1.6rem]"><span className="font-[600]">Always-On Assistance</span> – Round-the-clock expert support with SLAs as low as 15 minutes  to resolve RabbitMQ issues before they impact your business.</span>,
                <span className="text-[1.6rem]"><span className="font-[600]">Proactive System Monitoring</span> – Gain real-time visibility into health, bottlenecks, and security vulnerabilities.</span>,
                <span className="text-[1.6rem]"><span className="font-[600]">Dedicated Engineering Support</span> – Work with RabbitMQ specialists to optimize and secure your messaging infrastructure.</span>,
            ]
        },
        {
            title: "Risk Mitigation & Compliance Assurance",
            items: [
                <span className="text-[1.6rem]"><span className="font-[600]">Prevent Security Gaps</span>  – Continuous patching to eliminate vulnerabilities as they arise.</span>,
                <span className="text-[1.6rem]"><span className="font-[600]">Meet Compliance Requirements</span> – Ensure regulatory adherence for industries with strict data handling policies.</span>,
                <span className="text-[1.6rem]"><span className="font-[600]">Reduce Business & Operational Risk – </span> Proactively address RabbitMQ dependencies before they impact service delivery.</span>,
            ]
        },
    ]

    return (
        <section className="sm:px-[10rem] px-[2.5rem] sm:mt-[6rem]">
            <h2 className="text-center text-[2.5rem] sm:text-[3rem] font-[400]">Why <span className="font-[700] text-[#FF6600]">AceMQ</span> for <span className="font-[700] text-[#FF6600]">RabbitMQ</span> <span className="font-[600]">Support & Maintenance?</span></h2>
            <p className="sm:w-[70rem] mx-auto sm:mt-[2rem] text-center">With AceMQ, you don’t just get a license—you gain a strategic partner to ensure your RabbitMQ infrastructure remains up-to-date, secure, and optimized for performance.</p>

            <div className="max-w-[1900px] mx-auto grid sm:grid-cols-3 sm:gap-[1.2rem] mt-[4rem] gap-[2rem]">
                {
                    cols.map((item, i) =>
                        <Col
                            key={i}
                            {...item}
                        />
                    )
                }
            </div>
        </section>
    );
}

const Col = ({ title, items }) => {
    return (
        <div className="">
            <h2 className="font-[500] text-[2rem] w-[90%] text-[#8FD5CC]">{title}</h2>

            <ul className="mt-[1rem] ml-[1rem] flex flex-col gap-[1rem]">
                {
                    items.map((item, i) =>
                        <li className="before:absolute relative before:content-['•'] before:left-[-1rem] before:top-[.5rem]" key={i}>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default Maintenance;