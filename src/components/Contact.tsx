import "./utils.css";
import "./About.css";
import "./Contact.css";

interface ContactDetail {
  label: string;
  value: string;
}

interface Props {
  heading: string;
  description: string;
  contactDetails: ContactDetail[];
}

function Contact({ heading, description, contactDetails }: Props) {
  return (
    <section id="contact" className="section container contact">
      <h2 className="about__title">{heading}</h2>
      <div className="contact__description-wrapper">
        <p className="about__description">{description}</p>
        <ul className="contact__list">
          {contactDetails.map((detail) => (
            <li className="contact__list-item">
              {detail.label}: <strong>{detail.value}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
