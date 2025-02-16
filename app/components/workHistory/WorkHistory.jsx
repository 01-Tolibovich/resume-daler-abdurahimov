import { MdOutlineWork } from "react-icons/md";
import { data } from "@/app/data/ru";

import "./styles.scss";

export const WorkHistory = () => {

    return (
        <section className="work-history">
            <div className="experience"><MdOutlineWork className="icon" /><h2>История работы:</h2></div>
            {data.map(el => (
                <div key={Math.random()} className="work-expiriens">
                    <div className="period">
                        <h3 className="year">{el.period}</h3>
                        <h4>{el.company}</h4>
                        <h3>{el.position}</h3>
                    </div>
                    <ul className="discriptoin">
                        {el.desc.map(li => (
                            <div key={Math.random()}>
                                <li key={Math.random()}>{li}</li>
                            </div>
                        ))}
                    </ul>
                    <div className="full-width">
                        {el.stack && <div>
                            <h4>Стек:</h4>
                            <small>{el.stack}</small>
                        </div>}
                        {el.portfolio && <div>
                            <h4>Портфолио:</h4>
                            <div className="items">
                                {el.portfolio.map(el => (
                                    <p key={Math.random()}>{el}</p>
                                ))}
                            </div>
                        </div>}
                    </div>
                </div>
            ))}
        </section>
    )
}