import style from "./Resume.module.scss";

export default function Resume() {
    return (
        <section
            className={
                style.resume +
                " row align-items-center justify-content-center flex-row-reverse"
            }
            id="resume"
        >
            <div className="col-1" />
            <div className="col-12 col-md text-center">
                <h2>Currículo</h2>
            </div>
            <div className="col-12 col-md-4 offset-md-1">
                <h3>Experiência</h3>
                <ul>
                    <li>
                        Estágio em Desenvolvimento de Software, Minds Digital
                    </li>
                    <li>Estágio em SEO e CRO, Cadastra</li>
                </ul>
                <h3>Formação</h3>
                <ul>
                    <li>Engenharia de Software, PUC Minas, cursando</li>
                    <li>
                        Engenharia Aeroespacial, UFMG, cursado até o 4º período
                    </li>
                </ul>
                <h3>Idiomas</h3>
                <ul>
                    <li>Inglês, B2</li>
                    <li>Espanhol, B1</li>
                    <li>Francês, A2</li>
                </ul>
            </div>
        </section>
    );
}
