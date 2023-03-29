import style from "./Projects.module.scss";
import pilates from "../../assets/studio-pilates.png";
import portalFilmes from "../../assets/portal-filmes.png";
import sadfes from "../../assets/sadfes.png";
import portfolio from "../../assets/portfolio.png";

interface Project {
  name: string;
  description: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "Gerenciamento de histórico de atletas",
    description:
      "Demonstração de um sistema de gerenciamento de atletas desenvolvido para um cliente real. Desenvolvido em React, utilizando as bibliotecas react-router-dom e react-hook-form, com banco de dados e autenticação do Firebase",
    link: "https://tis4-demo.web.app/",
    image: sadfes,
  },
  {
    name: "Portal de filmes",
    description:
      "Site de visualização de filmes responsivo que consome a API The Movie DB",
    link: "https://leticiafraga.github.io/portal-filmes/index.html",
    image: portalFilmes,
  },
  {
    name: "Portfolio",
    description:
      "Meu portfolio em React, onde, além de me apresentar, posso praticar o uso do React. Utiliza as seguintes tecnologias: Typescript, Sass, Vite, Bootstrap, FontAwesome",
    link: "https://studiozenpilates.web.app/",
    image: portfolio,
  },
  {
    name: "Studio Zen Pilates",
    description: "Site de um estúdio de pilates",
    link: "https://studiozenpilates.web.app/",
    image: pilates,
  },
];

export default function Projects() {
  return (
    <section
      className={
        style.projects + " row align-items-center justify-content-center"
      }
      id="projects"
    >
      <div className="col-12 col-md-3 offset-md-1">
        <h2>Projetos</h2>
      </div>
      <div className={"col-12 col-md-7 " + style.wrapper}>
        {projects.map((p) => (
          <div className={style.flipCard}>
            <a target="_blank" href={p.link} className={style.flipCardInner}>
              <div className={style.flipCardFront}>
                <h3>{p.name}</h3>
                <div className={style.imgContainer}>
                  <img src={p.image} />
                </div>
              </div>
              <div className={style.flipCardBack}>
                <p>{p.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
