import Hero from "./components/home/hero";
import Brands from "./components/common/brand";
import Services from "./components/home/services";
import Impact from "./components/common/impact";
import Domians from "./components/home/domains";
import MaxContainer from "./components/common/maxContainer";
import Technologies from "./components/home/technologies";
import Partners from "./components/home/partners";
import About from "./components/home/about";
import dynamic from "next/dynamic";

const LazyContact = dynamic(() => import("./components/common/contact"), {
  ssr: false,
});

export const metadata = {
  title: "AceMQ Consulting | Expert RabbitMQ Messaging & Queuing Solutions",
  description:
    "AceMQ Consulting specializes in RabbitMQ solutions, including consulting, support, and professional services. Optimize your systems with our expert RabbitMQ services.",
  alternates: {
    canonical: "https://acemq.com/",
  },
  openGraph: {
    title: "AceMQ Consulting | Expert RabbitMQ Messaging & Queuing Solutions",
    description:
      "AceMQ Consulting specializes in RabbitMQ solutions, including consulting, support, and professional services. Optimize your systems with our expert RabbitMQ services.",
    url: "https://acemq.com/",
    siteName: "AceMQ Consulting",
    // Add image URL here if available
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <MaxContainer>
        <Hero />
        <Brands />
        <Services />
        <Impact />
        <Domians />
        <Technologies />
      </MaxContainer>
      <MaxContainer>
        <Partners />
        <About />
        <LazyContact route="home" />
      </MaxContainer>
    </>
  );
}
