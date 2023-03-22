import style from "./Projects.module.scss";
import pilates from "../../assets/studio-pilates.png";
import portalFilmes from "../../assets/portal-filmes.png";
import sadfes from "../../assets/sadfes.png";

interface Project {
  name: string;
  description: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "Studio Zen Pilates",
    description: "Site de um estúdio de pilates",
    link: "https://studiozenpilates.web.app/",
    image: pilates,
  },
  {
    name: "SADFES",
    description:
      "Sistema de gerenciamento de atletas desenvolvido para um cliente real",
    link: "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti4-0658100-sadfes-demanda-7",
    image: sadfes,
  },
  {
    name: "Portal de filmes",
    description:
      "Site de visualização de filmes que utiliza a API The Movie DB",
    link: "https://leticiafraga.github.io/portal-filmes/index.html",
    image: portalFilmes,
  },
  {
    name: "Studio Zen Pilates",
    description: "Site de um studio de pilates",
    link: "https://studiozenpilates.web.app/",
    image: pilates,
  },
  {
    name: "Studio Zen Pilates",
    description: "Site de um studio de pilates",
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
      <div className="col-3 offset-1">
        <h2>Projects</h2>
      </div>
      <div className={"col-7 " + style.wrapper}>
        {projects.map((p) => (
          <div className={style.card + " d-flex"}>
            <a href={p.link} className="col-6">
              <img src={p.image} />
            </a>
            <div className="mb-2 ms-2 col-6">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
