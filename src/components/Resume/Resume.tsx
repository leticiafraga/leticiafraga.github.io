import { useTranslation } from "react-i18next";
import style from "./Resume.module.scss";

export default function Resume() {
    const { t } = useTranslation("app");

    return (
        <section
            className={
                style.resume +
                " row align-items-center justify-content-center flex-row-reverse"
            }
            id="resume"
        >
            <div className="col-1" />
            <div className="col-12 col-md d-flex justify-content-center">
                <h2>{t("resume")}</h2>
            </div>
            <div className="col-12 px-4 px-md-0 col-md-4 offset-md-1">
                <h3>{t("resumeSection.experience")}</h3>
                <ul className={style.externalUl}>
                    <li>{t("resumeSection.minds")}</li>
                    <li>{t("resumeSection.cadastraInternship")}</li>
                    <li>{t("resumeSection.calculusTutor")}</li>
                </ul>
                <h3>{t("resumeSection.education")}</h3>
                <ul className={style.externalUl}>
                    <li>{t("resumeSection.softwareEngineering")}</li>
                    <ul>
                        <li>{t("resumeSection.softwareEngineeringDetails")}</li>
                    </ul>
                    <li>{t("resumeSection.exchange")}</li>
                    <ul>
                        <li>{t("resumeSection.exchangeDetails")}</li>
                    </ul>
                    <li>{t("resumeSection.aerospaceEngineering")}</li>
                    <ul>
                        <li>
                            {t("resumeSection.aerospaceEngineeringDetails")}
                        </li>
                    </ul>
                </ul>
                <h3>{t("resumeSection.languages")}</h3>
                <ul className={style.externalUl}>
                    <li>{t("resumeSection.english")}, C1</li>
                    <li>{t("resumeSection.french")}, B2</li>
                    <li>{t("resumeSection.spanish")}, B1</li>
                    <li>{t("resumeSection.portuguese")}, {t("resumeSection.native")}</li>
                </ul>
            </div>
        </section>
    );
}
