import MaxContainer from "../components/common/maxContainer";
import Hero from "../components/rabbitMQ/hero";
import Brands from "../components/common/brand";
import Info from "../components/rabbitMQ/info";
import Achievement from "../components/rabbitMQ/achievement";
import Services from "../components/rabbitMQ/services";
import Impact from "../components/common/impact";
import Capabilities from "../components/rabbitMQ/capabilities";
import dynamic from "next/dynamic";
const LazyContact = dynamic(() => import("../components/common/contact"), {
  ssr: false,
});

export const metadata = {
  title: "RabbitMQ Consulting, Support & Professional Services",
  description:
    "AceMQ specializes in RabbitMQ consulting, support, and professional services. Enhance your RabbitMQ systems with expert guidance and reliable solutions tailored to your needs.",
  alternates: {
    canonical: "https://acemq.com/rabbitmq/",
  },
  openGraph: {
    title: "RabbitMQ Consulting, Support & Professional Services",
    description:
      "AceMQ specializes in RabbitMQ consulting, support, and professional services. Enhance your RabbitMQ systems with expert guidance and reliable solutions tailored to your needs.",
    url: "https://acemq.com/rabbitmq/",
    siteName: "AceMQ Consulting",
    // Add image URL here if available
    locale: "en_US",
    type: "website",
  },
};

const RabbitMQ = () => {
  return (
    <>
      <div className="bg-black">
        <MaxContainer>
          <Hero />
        </MaxContainer>
      </div>
      <MaxContainer>
        <Brands />
        <Info />
        <Achievement />
        <Services />
        <Impact />
        <Capabilities />
        <LazyContact route={"rabbitmq"} />
      </MaxContainer>
    </>
  );
};

export default RabbitMQ;
