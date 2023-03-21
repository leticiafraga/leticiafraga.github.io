import { useState } from "react";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import style from "./App.module.scss";

const sections = [
  { link: "projects", text: "Projetos" },
  { link: "resume", text: "Currículo" },
  { link: "contact", text: "Contato" },
];

function App() {
  const [active, setActive] = useState(0);
  return (
    <div className="container-fluid">
      <Header
        options={sections}
        activeSection={active}
        onClickLink={setActive}
      />

      <div id="main" className={style.main + " row align-items-center justify-content-center"}>
        <div className="col-10 offset-1">
          <h1>Letícia Fraga</h1>
          {sections.map((item, index) => (
            <p>
              <a href={`#${item.link}`} onClick={() => setActive(index)}>
                {item.text}
              </a>
            </p>
          ))}
        </div>
      </div>
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
