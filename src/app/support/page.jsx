import MaxContainer from "../components/common/maxContainer";
import Hero from "../components/support/hero";
import Body from "../components/support/body";
import Banner from "../components/support/banner";
import dynamic from "next/dynamic";
const LazyContact = dynamic(() => import("../components/common/contact"), {
  ssr: false,
});

export const metadata = {
  title: "RabbitMQ Support Services | Troubleshooting & Maintenance",
  description:
    "Get expert RabbitMQ support with AceMQ. We offer troubleshooting, professional services, and ongoing maintenance to ensure your RabbitMQ systems run smoothly.",
  alternates: {
    canonical: "https://acemq.com/support",
  },
  openGraph: {
    title: "RabbitMQ Support Services | Troubleshooting & Maintenance",
    description:
      "Get expert RabbitMQ support with AceMQ. We offer troubleshooting, professional services, and ongoing maintenance to ensure your RabbitMQ systems run smoothly.",
    url: "https://acemq.com/support",
    siteName: "AceMQ Consulting",
    // Add image URL here if available
    locale: "en_US",
    type: "website",
  },
};

const Services = () => {
  return (
    <>
      <div className="bg-black">
        <MaxContainer>
          <Hero />
        </MaxContainer>
      </div>
      <MaxContainer>
        <Body />
        <Banner />
        <LazyContact route={"support"} />
      </MaxContainer>
    </>
  );
};

export default Services;
