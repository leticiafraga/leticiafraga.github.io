import style from "./Projects.module.scss";

export default function Projects() {
  return (
    <section
      className={
        style.projects + " row align-items-center justify-content-center"
      }
      id="projects"
    >
      <div className="col-10 offset-1">
        <h2>Projects</h2>
      </div>
    </section>
  );
}
