import MaxContainer from "../components/common/maxContainer";
import Hero from "../components/MQServices/hero";
import Body from "../components/MQServices/body";
import Banner from "../components/MQServices/banner";
import dynamic from "next/dynamic";
const LazyContact = dynamic(() => import("../components/common/contact"), {
  ssr: false,
});

export const metadata = {
  title: "RabbitMQ Services | Comprehensive Messaging & Queuing Support",
  description:
    "Explore AceMQ's RabbitMQ services, including consulting, support, and professional services. Our experts ensure reliable, scalable, and efficient RabbitMQ systems.",
  alternates: {
    canonical: "https://acemq.com/mq-services/",
  },
  openGraph: {
    title: "RabbitMQ Services | Comprehensive Messaging & Queuing Support",
    description:
      "Explore AceMQ's RabbitMQ services, including consulting, support, and professional services. Our experts ensure reliable, scalable, and efficient RabbitMQ systems.",
    url: "https://acemq.com/mq-services/",
    siteName: "AceMQ Consulting",
    // Add image URL here if available
    locale: "en_US",
    type: "website",
  },
};

const MQServices = () => {
  return (
    <>
      <section className="bg-black">
        <MaxContainer>
          <Hero />
        </MaxContainer>
      </section>
      <MaxContainer>
        <Body />
        <Banner />
        <LazyContact route={"mq-services"} />
      </MaxContainer>
    </>
  );
};

export default MQServices;
