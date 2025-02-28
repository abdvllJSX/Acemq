import Image from "next/image";
import Link from "next/link";
const GlobalServices = () => {
    return (
        <section className="bg-[#FFFFFF] sm:pb-[8rem] pb-[5rem] px-[2rem]  mt-[-.2rem]">
            <div className="border sm:overflow-hidden bg-white h-auto sm:flex sm:shadow-none sm:border-none shadow-sm shadow-[#8FD5CC80] relative rounded-[1.5rem]">
                <img src="/global_border.png" className="absolute sm:hidden top-[2rem] h-[34rem]  left-[-1.2rem]" alt="border" />
                <div className="relative z-[3] rounded-[1.5rem] inset-0 flex bg-white h-[100%] flex-col sm:flex-row sm:gap-[4rem] sm:mx-auto items-center">
                    <Image
                        src={"/redis_partner.png"}
                        width={358}
                        height={365}
                        className="w-[10rem] sm:w-[23rem]"
                    />
                    <p className="text-[#000000] sm:w-[70rem] py-[1rem] mt-[2rem] font-[500] text-[1.7rem] text-center sm:text-start w-[90%]"><span className="font-[700]">Redis Premier Global Services Partner.</span> Recognized by redis as a Go-To services partner, AceMQ maintains a global footprint, but with our headquarters in North America, we are widely recognized as the <Link className="p-[.4rem] rounded-[.4rem] underline bg-[#FF6600] cursor-pointer text-white" href={"https://redis.io/partners/"}>
                        Go-To North American Redis Partner</Link> </p>
                </div>
            </div>
        </section>
    );
}

export default GlobalServices;