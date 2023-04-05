import { useTranslation } from "react-i18next";
import style from "./Header.module.scss";

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
    const { i18n } = useTranslation("app");

    const changeLanguage = async (lng: string) => i18n.changeLanguage(lng);
    const toggleLanguage = i18n.language == "pt" ? "en" : "pt";

    return (
        <nav className={style.navbar + " navbar navbar-expand"}>
            <div className="container justify-content-end justify-content-md-between">
                <a className="navbar-brand d-none d-md-inline" href="#main">
                    Letícia Fraga
                </a>
                <div id="navbarText">
                    <ul className="navbar-nav ms-auto">
                        {props.options.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <a
                                    className={
                                        "nav-link " +
                                        (index == props.activeSection
                                            ? "active"
                                            : "")
                                    }
                                    aria-current="page"
                                    href={`#${item.link}`}
                                    onClick={() => props.onClickLink(index)}
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                        <li className="d-flex align-items-center justify-content-center">
                            <button
                                className={
                                    "btn btn-secondary " + style.changeLanguage
                                }
                                type="button"
                                onClick={() => changeLanguage(toggleLanguage)}
                            >
                                {toggleLanguage.toUpperCase()}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
