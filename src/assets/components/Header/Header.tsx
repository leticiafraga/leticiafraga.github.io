import { useSyncExternalStore } from "react";

interface Props {
  options: NavLink[];
  activeSection: number;
  onClickLink: (index: number) => void;
}

interface NavLink {
  link: string;
  text: string;
}

export default function Header(props: Props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Letícia Fraga
        </a>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            {props.options.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  className={
                    "nav-link " + (index == props.activeSection ? "active" : "")
                  }
                  aria-current="page"
                  href={`#${item.link}`}
                  onClick={() => props.onClickLink(index)}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
