'use client';
import Image from "next/image";
import Carousel from 'react-multi-carousel';
import milestone, { slideIn } from "@/app/Animations/common";
import 'react-multi-carousel/lib/styles.css';
import { useState, useEffect } from "react";
import MaxContainer from "@/app/components/common/maxContainer";
import Img from "../common/image";
import Link from "next/link";

const Index = () => {
    useEffect(() => {
        milestone()
        slideIn()
    }, [])
    const brands = ['/gojek.png', '/enbridge.png', '/ceaser.png', '/henry.png', '/square.png']

    const _brands = [
        {
            icon: '/square.png',
            style: 'sm:w-[6rem] w-[7rem] aspect-square hover:opacity-[.5]',
        },
        {
            icon: '/microsoft.png',
            style: 'sm:w-[18rem] hover:opacity-[.5]',
        },
        {
            icon: '/enbridge.png',
            hoveredIcon: '/enbridge_hov.png',
            style: 'sm:w-[18rem]',
        },
        {
            icon: '/gojek.png',
            hoveredIcon: '/gojek_hov.png',
            style: 'sm:w-[18rem]',
        },
        {
            icon: '/ceaser.png',
            hoveredIcon: '/ceaser_hov.png',
            style: 'sm:w-[18rem]',
        },
    ]

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: brands.length
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 2
        }
    }
    return (
        <section className="px-[3rem] sm:px-[10rem] sm:pt-[5rem] mt-[5rem] sm:mt-[1.5rem] relative pb-[5.2rem] sm:pb-[8.5rem] flex gap-x-[4rem] w-[100%]">
            <MaxContainer>
                <div className="w-[100%] sm:border-[.5px] rounded-[2rem] bg-[#11151A] sm:border-[#FF6600] sm:px-[5rem] sm:py-[4rem]" data-animation-id="slideIn">
                    <h2 className="text-[2.9rem] sm:text-[3.2rem] text-center sm:text-left font-[700] mb-[3rem]">Trusted by <span className="text-[#FF6600]">global brands</span> including:</h2>
                    <div className="hidden sm:flex items-center justify-between w-[100%]">
                        {_brands.map((item, i) => <Brand item={item} key={i} />)}
                    </div>
                    <div className="sm:hidden">
                        <Carousel showDots={true} autoPlay={true} autoPlaySpeed={1000} infinite={true} removeArrowOnDeviceType={["tablet", "mobile", 'desktop']} responsive={responsive}>
                            {_brands.map((item, i) => <Image src={item.icon} key={i} className={`${item.style}`} width={150} height={100} />)}
                        </Carousel>
                    </div>
                </div>

                <ServiceProvider />
            </MaxContainer>
        </section>
    );
}

export default Index;

const ServiceProvider = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-[3rem] sm:gap-[0] items-center justify-between sm:mt-[10rem] mt-[5rem]">
            <div className="">
                <Img
                    src="/licensing/broadcom.svg"
                    alt="broadcom"
                    width={150}
                    height={100}
                    className={`sm:w-[18rem] sm:mb-[1.2rem]`}
                />
                <h2 className="text-center sm:text-[3rem] text-[2rem] font-[700]">Broadcom</h2>
            </div>
                <p className="sm:w-[70rem] text-center">
                    With the acquisition of RabbitMQ by Broadcom, AceMQ has worked diligently to become the exclusive strategic <Link href={""}>
                        RabbitMQ Managed Service Provider (MSP)</Link>  partner for Broadcom, allowing us to offer unparalleled value in RabbitMQ licensing and services. Our unique position grants us direct access to Broadcom's resources, enabling us to provide enterprise-grade support, advanced features, and tailored solutions that no other partner can match. With our expertise and Broadcom's backing, we ensure optimal performance, scalability, and reliability for your mission-critical messaging systems, giving your business a competitive edge in application delivery and communication infrastructure
                </p>
            <div className="">
                <Img
                    src="/licensing/rabbit-mq.svg"
                    alt="rabbit-mq"
                    width={150}
                    height={100}
                    className={`sm:w-[18rem]  sm:mb-[1.2rem]`}
                />
                <h2 className="text-center sm:text-[3rem] text-[2rem] font-[700]">RabbitMQ</h2>
            </div>
        </div>
    )
}


const Brand = ({ item }) => {
    const [hovered, setHovered] = useState(false)
    return (
        <Image
            src={hovered && item.hoveredIcon ? item.hoveredIcon : item.icon}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`${item.style} cursor-pointer`}
            width={150}
            height={100} />
    )
}