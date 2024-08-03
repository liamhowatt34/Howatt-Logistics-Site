import "./utils.css";
import "./Hero.css";
import truckImage1 from "../assets/IMG_2691.jpg";

interface Props {
  slogan: string;
}

function Hero({ slogan }: Props) {
  return (
    <section className="container hero">
      <img
        className="hero__img"
        src={truckImage1}
        alt="Howatt Logistics Truck"
      />
      <h2 className="hero__slogan">{slogan}</h2>
    </section>
  );
}

export default Hero;
