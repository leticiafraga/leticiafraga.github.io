import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import style from "./Contact.module.scss";
import { useTranslation } from "react-i18next";

interface SocialLink {
    icon: ReactElement;
    link: string;
    bg?: ReactElement;
}

const socials: SocialLink[] = [
    {
        icon: <FontAwesomeIcon icon={faGithub} />,
        link: "https://github.com/leticiafraga/",
    },
    {
        icon: (
            <FontAwesomeIcon
                color="#aaa"
                icon={faLinkedinIn}
                transform="shrink-5"
            />
        ),
        link: "https://www.linkedin.com/in/leticia-fraga/",
        bg: <FontAwesomeIcon icon={faCircle} />,
    },
    {
        icon: (
            <FontAwesomeIcon
                color="#aaa"
                icon={faEnvelope}
                transform="shrink-5"
            />
        ),
        link: "mailto:leticiafraga55@gmail.com",
        bg: <FontAwesomeIcon icon={faCircle} />,
    },
];

export default function Contact() {
    const { t } = useTranslation("app");

    return (
        <section
            className={
                style.contact + " row align-items-center justify-content-center"
            }
            id="contact"
        >
            <div className="col-12 col-md text-center">
                <h2>{t("contact")}</h2>
            </div>
            <div className="col-12 col-md-7">
                {socials.map((item) => (
                    <a href={item.link} key={item.link}>
                        <span className="ms-4 fa-layers fa-4x">
                            {item.bg}
                            {item.icon}
                        </span>
                    </a>
                ))}
                <hr />
                <span className="ms-4">leticiafraga55@gmail.com</span>
            </div>
        </section>
    );
}
