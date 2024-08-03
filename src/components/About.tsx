import "./utils.css";
import "./About.css";

interface ListItem {
  listLabel: string;
  listDetail: string;
}

interface Props {
  heading: string;
  description: string;
  listItems: ListItem[];
}

function About({ heading, description, listItems }: Props) {
  return (
    <section id="about" className="section container about">
      <div>
        <h2 className="about__title">{heading}</h2>
        <div className="about__description-wrapper">
          <p className="about__description">{description}</p>
          <ul className="about__list">
            {listItems.map((detail) => (
              <li className="about__list-item">
                <strong>{detail.listLabel}</strong> {detail.listDetail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
