import { ReactNode, useState } from "react";
import style from "./Accordion.module.scss";

interface AccordionItem {
    title: string;
    content: ReactNode;
}

interface Props {
    items: AccordionItem[];
}

export default function Accordion(props: Props) {
    const [active, setActive] = useState(-1);

    return (
        <div className="accordion" id="accordionExample">
            <>
                {props.items.map((item, i) => {
                    const isActive = active == i;
                    return (
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className={
                                        "accordion-button " +
                                        (isActive ? "" : "collapsed")
                                    }
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                    onClick={() => setActive(isActive ? -1 : i)}
                                >
                                    {item.title}
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className={
                                    "accordion-collapse collapse " +
                                    (isActive ? "show" : "")
                                }
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </>{" "}
        </div>
    );
}
