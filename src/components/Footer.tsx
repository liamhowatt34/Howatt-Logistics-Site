import "./utils.css";
import "./Footer.css";

interface Props {
  heading: string;
}

function Footer({ heading }: Props) {
  return (
    <footer className="section container footer">
      <h3 className="footer__title">{heading}</h3>
    </footer>
  );
}

export default Footer;
