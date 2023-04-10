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
                    " row align-items-center justify-content-center px-4 px-md-0"
                }
            >
                <div className="col-md-10 offset-md-1">
                    <h1>{t("title")}</h1>
                    <p>
                        <strong>{t("softwareDeveloper")}</strong>
                    </p>

                    {sections.map((item, index) => (
                        <p key={item.text}>
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
            <Technologies />
            <Resume />
            <Contact />
        </div>
    );
}

export default App;
