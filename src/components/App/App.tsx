import { useState } from "react";
import { useTranslation } from "react-i18next";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Technologies from "../Technologies/Technologies";
import style from "./App.module.scss";

function App() {
    const [active, setActive] = useState(0);
    const { t } = useTranslation("app");

    const sections = [
        { link: "projects", text: t("projects") },
        { link: "resume", text: t("resume") },
        { link: "contact", text: t("contact") },
    ];

    return (
        <div className="container-fluid">
            <Header
                options={sections}
                activeSection={active}
                onClickLink={setActive}
            />

            <div
                id="main"
                className={
                    style.main +
                    " row align-items-center justify-content-center"
                }
            >
                <div className="col-10 offset-1">
                    <h1>{t("title")}</h1>

                    {sections.map((item, index) => (
                        <p>
                            <a
                                href={`#${item.link}`}
                                onClick={() => setActive(index)}
                            >
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
