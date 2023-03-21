import style from "./Contact.module.scss";

export default function Contact() {
  return (
    <section
      className={
        style.contact + " row align-items-center justify-content-center"
      }
      id="contact"
    >
      <div className="col-10 offset-1">
        <h2>Contact</h2>
      </div>
    </section>
  );
}
