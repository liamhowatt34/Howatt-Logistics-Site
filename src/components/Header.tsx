import "./utils.css";
import "./Header.css";

interface Props {
  heading: string;
  navItems: string[];
}

function Header({ heading, navItems }: Props) {
  return (
    <header className="container header">
      <h1 className="header__title">{heading}</h1>
      <nav>
        <ul className="header__list">
          {navItems.map((item) => (
            <li className="header__list-item">
              <a className="header__list-link" href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
