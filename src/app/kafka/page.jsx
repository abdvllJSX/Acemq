import Hero from "../components/kafka/hero";
import Expert from "../components/kafka/expert";
import Offerings from "../components/kafka/offering";
import Partner from "../components/kafka/partner";
import Services from "../components/kafka/services";
import Features from "../components/kafka/features";
import CTA from "../components/kafka/cta";
import MaxContainer from "../components/common/maxContainer/index";
import dynamic from "next/dynamic";
const LazyContact = dynamic(() => import("../components/common/contact"), {
  ssr: false,
});

export const metadata = {
  title: "Kafka Consulting & Support | Expert Kafka Solutions by AceMQ",
  description:
    "AceMQ provides expert Kafka consulting, support, and professional services. Optimize Kafka performance, architecture, and streaming solutions with our certified consultants. Available 24/7.",
  alternates: {
    canonical: "https://acemq.com/kafka/",
  },
  openGraph: {
    title: "Kafka Consulting & Support | Expert Kafka Solutions by AceMQ",
    description:
      "AceMQ provides expert Kafka consulting, support, and professional services. Optimize Kafka performance, architecture, and streaming solutions with our certified consultants. Available 24/7.",
    url: "https://acemq.com/kafka/",
    siteName: "AceMQ Consulting",
    images: [
      {
        width: 800,
        height: 600,
        alt: "AceMQ Consulting Kafka Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const Kafka = () => {
  return (
    <div className="pt-[6.5rem] sm:pt-[10rem]">
      <Hero />
      <Expert />
      <Offerings />
      <Partner />
      <Services />
      <Features />
      <CTA />
      <div className="sm:mt-[-20rem]">
        <MaxContainer>
          <LazyContact route={"kafka"} />
        </MaxContainer>
      </div>
    </div>
  );
};

export default Kafka;
