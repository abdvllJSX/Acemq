import MaxContainer from '../components/common/maxContainer'
import Hero from '../components/rabbitMQ/hero'
import Brands from '../components/common/brand'
import Info from '../components/rabbitMQ/info'
import Achievement from '../components/rabbitMQ/achievement'
import Services from '../components/rabbitMQ/services'
import Impact from '../components/common/impact'
import Capabilities from '../components/rabbitMQ/capabilities'
import Contact from '../components/common/contact'

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
            <MaxContainer>
                <Hero />
                <Brands />
                <Info />
                <Achievement />
                <Services />
                <Impact />
                <Capabilities />
                <Contact />
            </MaxContainer>
        </>
    );
}

export default RabbitMQ;