import Hero from "@/app/components/licensing/hero";
import Brand from "@/app/components/licensing/brand";
import Compliant from "@/app/components/licensing/compliant";
import Maintenance from "@/app/components/licensing/maintenance";
import Differentiators from "@/app/components/licensing/differentiators";
import UseCase from "@/app/components/licensing/usecase";
import Banner from "@/app/components/licensing/banner";
import MaxContainer from "@/app/components/common/maxContainer";
import Contact  from "@/app/components/common/contact";

const Licensing = () => {
    return (
        <div className="sm:pt-[9rem] bg-[#0D1117] pt-[6rem] pb-[7rem] overflow-x-hidden w-[100vw]">
            <Hero />
            <Brand />
            <Compliant />
            <Maintenance />
            <Differentiators />
            <UseCase />
            <Banner />
            <MaxContainer>
                <Contact />
            </MaxContainer>
        </div>
    );
}

export default Licensing;