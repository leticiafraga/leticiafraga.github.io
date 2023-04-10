import style from "./Technologies.module.scss";
import angular from "../../assets/icons/angular.svg";
import react from "../../assets/icons/react.svg";
import css from "../../assets/icons/css.svg";
import html from "../../assets/icons/html.svg";
import git from "../../assets/icons/git.svg";
import sass from "../../assets/icons/sass.svg";
import typescript from "../../assets/icons/typescript.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";
import jest from "../../assets/icons/jest.svg";
import dotnet from "../../assets/icons/dotnet.svg";
import { useTranslation } from "react-i18next";

const techs = [
    { name: "React", icon: react },
    { name: "Typescript", icon: typescript },
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "Sass", icon: sass },
    { name: "Git", icon: git },
    { name: "Jest", icon: jest },
    { name: "Bootstrap", icon: bootstrap },
    { name: "Angular", icon: angular },
    { name: ".NET", icon: dotnet },
];

export default function Technologies() {
    const { t } = useTranslation("app");

    return (
        <section className={style.skills + " row"}>
            <h3 className="text-center">{t("technologies_work")}</h3>
            <div className="col-md-6 offset-md-3 col-12 d-flex">
                <div className="row justify-content-center">
                    {techs.map((item) => (
                        <div
                            className={style.badgeContainer + " col-4 col-lg-3"}
                        >
                            <span className={style.badge}>
                                <img src={item.icon} />
                                <span>{item.name}</span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
