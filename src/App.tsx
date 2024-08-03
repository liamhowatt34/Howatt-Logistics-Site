import "./modern-normalize.css";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const navItems = ["About", "Gallery", "Contact"];

  const aboutDescription = `Since 2013, Southern Ontario Trucking Delivery Services has been a
  trusted name in the transportation industry, specializing in the
  delivery of heavy loads and oversized shipments across Southern
  Ontario, Canada. With over a decade of experience, we have built a
  reputation for reliability, efficiency, and exceptional customer
  service. Based in Southern Ontario, we are strategically located to
  serve a wide range of industries throughout the region. Our
  comprehensive network allows us to offer efficient and
  cost-effective transportation solutions, no matter the size or
  complexity of your shipment.`;

  const aboutListItems = [
    {
      listLabel: "Experienced Professionals:",
      listDetail: `Our team of drivers
              and logistics experts have extensive experience in handling heavy
              and oversized shipments, ensuring your goods are in capable hands.`,
    },
    {
      listLabel: "Reliable and Timely:",
      listDetail: `We pride ourselves on our
              punctuality and commitment to meeting delivery deadlines,
              providing you with peace of mind and minimizing disruptions to
              your operations.`,
    },
    {
      listLabel: "Safety First:",
      listDetail: `We prioritize safety in every
              aspect of our operations, from secure loading and unloading to
              adhering to all regulatory requirements and industry standards.`,
    },
    {
      listLabel: "Customer-Focused:",
      listDetail: `Our customer service team is
              dedicated to understanding your unique needs and providing
              tailored solutions that meet your specific transportation
              requirements.`,
    },
  ];

  const contactDescription = `
    For reliable and professional heavy load and oversized shipment
    delivery services, contact Howatt Logistics today. Let us handle your
    transportation needs with the expertise and care that has defined our
    service since 2013.
  `;

  const contactDetails = [
    { label: "Phone", value: "519-555-5555" },
    { label: "Email", value: "ericghowatt@bell.ca" },
  ];

  return (
    <>
      <Header heading="Howatt Logistics" navItems={navItems} />
      <main>
        <Hero slogan="Quality Heavy Delivery Service" />
        <About
          heading="About"
          description={aboutDescription}
          listItems={aboutListItems}
        />
        <Gallery />
        <Contact
          heading="Contact Us"
          description={contactDescription}
          contactDetails={contactDetails}
        />
      </main>
      <Footer heading="- Howatt Logistics -" />
    </>
  );
}

export default App;
