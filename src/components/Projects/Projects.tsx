import style from "./Projects.module.scss";
import pilates from "../../assets/studio-pilates.png";
import portalFilmes from "../../assets/portal-filmes.png";
import sadfes from "../../assets/sadfes.png";
import portfolio from "../../assets/portfolio.png";
import { useTranslation } from "react-i18next";

interface Project {
    name: string;
    description: string;
    link: string;
    image: string;
    github: string;
}

export default function Projects() {
    const { t } = useTranslation("app");

    const projects: Project[] = [
        {
            name: t("projectsSection.athletesMonitoring"),
            description:
                "Demonstração de um sistema de gerenciamento de atletas desenvolvido para um cliente real. Desenvolvido em React, utilizando as bibliotecas react-router-dom e react-hook-form, com banco de dados e autenticação do Firebase",
            link: "https://tis4-demo.web.app/",
            image: sadfes,
            github: "https://github.com/leticiafraga/tis4-demo",
        },
        {
            name: t("projectsSection.moviesPortal"),
            description:
                "Site de visualização de filmes responsivo que consome a API The Movie DB",
            link: "https://leticiafraga.github.io/portal-filmes/index.html",
            image: portalFilmes,
            github: "https://github.com/leticiafraga/portal-filmes",
        },
        {
            name: t("projectsSection.portfolio"),
            description:
                "Meu portfolio em React, onde, além de me apresentar, posso praticar o uso do React. Ainda não está finalizado. Utiliza as seguintes tecnologias: Typescript, Sass, Vite, Bootstrap",
            link: "https://studiozenpilates.web.app/",
            image: portfolio,
            github: "https://github.com/leticiafraga/portfolio",
        },
        {
            name: t("projectsSection.pilates"),
            description:
                "Site institucional de um estúdio de pilates que utiliza com Bootstrap",
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
            <div className="col offset-lg-1 mb-5 mb-lg-0">
                <h2>{t("projects")}</h2>
            </div>
            <div className={"col-12 col-lg-7 " + style.wrapper}>
                {projects.map((p) => (
                    <div className={style.flipCard}>
                        <div className={style.flipCardInner}>
                            <div className={style.flipCardFront}>
                                <div className={style.imgContainer}>
                                    <img src={p.image} />
                                </div>
                                <div className={style.nameContainer}>
                                    <h3>{p.name}</h3>
                                </div>
                            </div>
                            <div className={style.flipCardBack}>
                                <p>{p.description}</p>
                                <div className="row w-100">
                                    <div className="col-6">
                                        <button className=" w-100 btn btn-primary m-2">
                                            <a target="_blank" href={p.link}>
                                                Acessar
                                            </a>
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <button className="w-100 btn btn-primary m-2">
                                            <a target="_blank" href={p.github}>
                                                Github
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
