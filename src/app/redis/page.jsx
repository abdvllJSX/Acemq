import Hero from "../components/redis/hero";
import Brands from "../components/redis/brand";
import GlobalServices from "../components/redis/globalService";
import RedisSolutions from "../components/redis/solution";
import Expertise from "../components/redis/expertise";
import Service from "../components/redis/service";
import CTA from "../components/redis/cta";
import dynamic from "next/dynamic";
const LazyContact = dynamic(() => import("../components/common/contact"), {
  ssr: false,
});
import MaxContainer from "../components/common/maxContainer/index";

export const metadata = {
  title: "Redis Consulting & Support | Expert Redis Solutions by AceMQ",
  description:
    "AceMQ offers expert Redis consulting, support, and professional services. Optimize Redis performance, architecture, and streaming solutions with our certified consultants. Available 24/7.",
  alternates: {
    canonical: "https://acemq.com/redis/",
  },
  openGraph: {
    title: "Redis Consulting & Support | Expert Redis Solutions by AceMQ",
    description:
      "AceMQ offers expert Redis consulting, support, and professional services. Optimize Redis performance, architecture, and streaming solutions with our certified consultants. Available 24/7.",
    url: "https://acemq.com/redis/",
    siteName: "AceMQ Consulting",
    images: [
      {
        width: 800,
        height: 600,
        alt: "AceMQ Consulting Redis Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const Redis = () => {
  return (
    <div className="pt-[6.5rem] sm:pt-[10rem]">
      <Hero />
      <Brands />
      <GlobalServices />
      <RedisSolutions />
      <Expertise />
      <Service />
      <CTA />
      <div className="sm:mt-[-20rem]">
        <MaxContainer>
          <LazyContact route={"redis"} />
        </MaxContainer>
      </div>
    </div>
  );
};

export default Redis;
