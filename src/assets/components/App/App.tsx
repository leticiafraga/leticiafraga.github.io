import { useState } from "react";
import Header from "../Header/Header";
import style from "./App.module.scss";

const sections = [
  { link: "projetos", text: "Projetos" },
  { link: "curriculo", text: "Currículo" },
  { link: "contato", text: "Contato" },
];

function App() {
  const [active, setActive] = useState(0);
  return (
    <div className="container">
      <Header
        options={sections}
        activeSection={active}
        onClickLink={setActive}
      />
      <div className={style.main}>
        <div>
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
    </div>
  );
}

export default App;
