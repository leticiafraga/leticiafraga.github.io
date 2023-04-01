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

    return (
        <nav className={style.navbar + " navbar navbar-expand"}>
            <div className="container">
                <a className="navbar-brand" href="#main">
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
                        <li>
                            <button
                                type="button"
                                onClick={() =>
                                    changeLanguage(
                                        i18n.language == "pt" ? "en" : "pt"
                                    )
                                }
                            >
                                {i18n.language == "pt" ? "en" : "pt"}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
