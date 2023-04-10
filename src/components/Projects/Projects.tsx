import style from "./Projects.module.scss";
import pilates from "../../assets/studio-pilates.png";
import portalFilmes from "../../assets/portal-filmes.png";
import sadfes from "../../assets/sadfes.png";
import portfolio from "../../assets/portfolio.png";
import { useTranslation } from "react-i18next";
import type appType from "../../public/locales/pt/app.json";

interface Project {
    link: string;
    image: string;
    github: string;
    key: keyof typeof appType.projectsSection;
}

export default function Projects() {
    const { t } = useTranslation("app");

    const projects: Project[] = [
        {
            key: "athletesMonitoring",
            link: "https://tis4-demo.web.app/",
            image: sadfes,
            github: "https://github.com/leticiafraga/tis4-demo",
        },
        {
            key: "moviesPortal",
            link: "https://leticiafraga.github.io/portal-filmes/index.html",
            image: portalFilmes,
            github: "https://github.com/leticiafraga/portal-filmes",
        },
        {
            key: "portfolio",
            link: "https://leticiafraga.github.io/",
            image: portfolio,
            github: "https://github.com/leticiafraga/leticiafraga.github.io",
        },
        {
            key: "pilates",
            link: "https://studiozenpilates.web.app/",
            image: pilates,
            github: "https://github.com/leticiafraga/studio-pilates",
        },
    ];

    return (
        <section
            className={
                style.projects +
                " row align-items-center justify-content-center px-5"
            }
            id="projects"
        >
            <div className="col-12 col-md text-center mb-5 mb-lg-0">
                <h2>{t("projects")}</h2>
            </div>
            <div className={"col-12 col-lg-7 " + style.wrapper}>
                {projects.map((p) => (
                    <div className={style.flipCard} key={p.key}>
                        <div className={style.flipCardInner}>
                            <div className={style.flipCardFront}>
                                <div className={style.imgContainer}>
                                    <img src={p.image} />
                                </div>
                                <div className={style.nameContainer}>
                                    <h3>
                                        {t(`projectsSection.${p.key}.title`)}
                                    </h3>
                                </div>
                            </div>
                            <div className={style.flipCardBack}>
                                <p>{t(`projectsSection.${p.key}.desc`)}</p>
                                <div className="row w-100">
                                    <div className="col-6">
                                        <button className=" w-100 btn btn-secondary m-2">
                                            <a target="_blank" href={p.link}>
                                                {t("access")}
                                            </a>
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <button className="w-100 btn btn-secondary m-2">
                                            <a target="_blank" href={p.github}>
                                                GitHub
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
