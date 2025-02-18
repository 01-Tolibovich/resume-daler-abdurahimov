import Image from "next/image";
import photo from "../public/images/daler.jpg";
import { GiSkills } from "react-icons/gi";
import { WorkHistory } from "./components";
import { educations, primaryData } from "./data/en";
import { BsFillMortarboardFill } from "react-icons/bs";

import "./styles.scss";

export default function Home() {
  return (
    <div>
      <header className="header">
        <div className="main-info">
          <div className="photo-block">
            <Image src={photo} width={500} height={500} alt="photo" />
          </div>
          <div className="primary-info">
            <h1>{`${primaryData.user.firstName} ${primaryData.user.lastName}`}</h1>
            <h2>{primaryData.position.first}</h2>
          </div>
          <div />
        </div>
      </header>
      <main className="content">
        <section className="skils">
          <div className="skils-heading">
            <GiSkills className="icon" />
            <h3>{primaryData.slill}:</h3>
          </div>
          <div className="skills">
            {primaryData.skills.map((skill) => (
              <div key={Math.random()} className="skill">
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </section>
        <WorkHistory />
      </main>
      <footer className="content footer">
        <div className="educations">
          <BsFillMortarboardFill className="icon" />
          <h3>{educations.title}</h3>
        </div>
        <h4>{educations.desc}:</h4>
        <div className="edu-items">
          {educations.items.map((item) => (
            <small key={Math.random()}>{item}</small>
          ))}
        </div>
      </footer>
    </div>
  );
}
