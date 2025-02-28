import MaxContainer from "../components/common/maxContainer";
import Hero from "../components/contact/hero";
import dynamic from "next/dynamic";
const LazyBody = dynamic(() => import("../components/contact/body"), {
  ssr: false,
});

export const metadata = {
  title: "Contact AceMQ | Expert RabbitMQ Support & Consulting",
  description:
    "Reach out to AceMQ Consulting for expert support and consulting in RabbitMQ and other messaging and queuing solutions. Contact us today to learn how we can optimize your systems.",
  alternates: {
    canonical: "https://acemq.com/contact-us/",
  },
  openGraph: {
    title: "Contact AceMQ | Expert RabbitMQ Support & Consulting",
    description:
      "Reach out to AceMQ Consulting for expert support and consulting in RabbitMQ and other messaging and queuing solutions. Contact us today to learn how we can optimize your systems.",
    url: "https://acemq.com/contact-us/",
    siteName: "AceMQ Consulting",
    // Add image URL here if available
    locale: "en_US",
    type: "website",
  },
};

const Index = () => {
  return (
    <MaxContainer>
      <Hero />
      <LazyBody />
    </MaxContainer>
  );
};

export default Index;
