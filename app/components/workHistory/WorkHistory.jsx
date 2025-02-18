import { Source_Code_Pro } from "next/font/google";
import { MdOutlineWork } from "react-icons/md";
import { data, primaryData } from "@/app/data/en";

import "./styles.scss";

const sourceCodePro = Source_Code_Pro();

export const WorkHistory = () => {
  
  return (
    <section className="work-history">
      <div className="experience">
        <MdOutlineWork className="icon" />
        <h2>{primaryData.workHistory}:</h2>
      </div>
      {data.map((el) => (
        <div key={Math.random()} className="work-expiriens">
          <div className="period">
            <h3 className="year">{el.period}</h3>
            <h4>{el.company}</h4>
            <h3 className="position">{el.position}</h3>
          </div>
          <ul className="discriptoin">
            {el.desc.map((li) => (
              <div key={Math.random()}>
                <li key={Math.random()}>{li}</li>
              </div>
            ))}
          </ul> 
          <div className="full-width">
            {el.stack && (
              <div className="stack">
                <h4>{el.stack.title}:</h4>
                <small className={sourceCodePro.className}>{el.stack.value}</small>
              </div>
            )}
            {el.portfolio && (
              <div>
                <h4>{el.portfolio.title}:</h4>
                <div className="items">
                  {el.portfolio.items.map((el) => (
                    <p className={sourceCodePro.className} key={Math.random()}>{el}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
