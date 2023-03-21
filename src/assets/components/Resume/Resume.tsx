import style from "./Resume.module.scss";

export default function Resume() {
  return (
    <section
      className={
        style.resume + " row align-items-center justify-content-center"
      }
      id="resume"
    >
      <div className="col-10 offset-1">
        <h2>Currículo</h2>
      </div>
    </section>
  );
}
