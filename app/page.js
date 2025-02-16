import Image from "next/image";
import photo from "../public/images/daler.jpg";
import { GiSkills } from "react-icons/gi";

import "./styles.scss"
import { WorkHistory } from "./components/workHistory";

export default function Home() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "NextJS",
    "Redux",
    "Zustand",
    "Vue",
    "NuxtJS",
    "REST API",
    "HTML",
    "CSS",
    "SASS",
    "TailwindCSS",
    "Bootstrap",
    "StyledComponents",
    "Git",
    "WordPress",
    "Figma",
    "Photoshop"
  ]

  return (
    <div>
      <header className="header">
        <div className="main-info">
          <div className="photo-block">
            <Image src={photo} width={100} height={100} alt="photo" />
          </div>
          <div className="primary-info">
            <h1>ДАЛЕР АБДУРАХИМОВ</h1>
            <h2>Frontend разработчик</h2>
          </div>
          <div />
        </div>
      </header>
      <main className="content">
        <section className="skils">
          <div className="skils-heading">
            <GiSkills className="icon" />
            <h3>Навыки:</h3>
          </div>
          <div className="skills">
            {skills.map(skill => (
              <div key={Math.random()} className="skill">
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </section>
        <WorkHistory />
      </main>
      <footer></footer>
    </div >
  );
}
