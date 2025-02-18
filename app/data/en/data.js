export const primaryData = {
  user: {
    firstName: "Daler",
    lastName: "Abdurakhimov",
  },
  position: {
    first: "Front End developer",
    second: "Web developer",
  },
  slill: "Skills",
  skills: [
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
    "Photoshop",
  ],
  workHistory: "Work history",
};

export const data = [
  {
    period: "2023 to Current",
    company: "Fly.tj Company (Antares)",
    position: primaryData.position.first,
    desc: [
      "Provided technical support for B2C product fly.tj and two partner services: B2C flytrip.uz and B2B agent.flytrip.uz.",
      "Maintained legacy code by refactoring and optimizing the application in React 16.",
      "Developed new features requested by management, including displaying itinerary information in a modal window, booking cart, search for saved passengers, and other enhancements.",
      "Created layouts of new pages in figma and implemented them in projects based on the designs developed.",
      "Cleaned the fly.tj project of old and unused media files and removed inactive code after refactoring individual components, which improved page loading speed.",
      "",
      "Developed an updated version of the user interface of a B2B product as part of the business.fly.tj project.",
      "Semantic and cross-browser layout ensures accessibility and correct display in all major browsers.",
      "Adapting the layout for different devices, using modern CSS technologies (grid, clamp(), etc.), which increased the ease of interaction with the interface.",
      "Designed and implemented color schemes for the service's dark theme, improving the user experience in low-light conditions.",
      "Integrate the front-end with the back-end, ensuring that data is received and processed on the client and sent to the server.",
    ],
    stack: {
      title: "Stack",
      value:
        "JavaScript( TypeScript( React( Redux, ...Other_packages ), NextJS( Zustand, Zod, ShadcnUI, ...Other_packages))), HTML( Semantic_layout ) CSS( SASS, TailwindCSS, StyledComponents) ",
    },
    portfolio: {
      title: "Portfolio",
      items: [
        "https://business-module-self.vercel.app/info",
        "fly.tj",
        "flytrip.uz",
        "business.fly.tj",
        "...",
      ],
    },
  },
  {
    period: "2022 to 2023",
    company: "Livo Outsource Company",
    position: primaryData.position.first,
    desc: [
      "Solidified knowledge of the Vue.js JavaScript framework by appreciating its advantages, such as efficient partitioning of an application into over-utilized components and convenient transfer of data of different types (string, array, object), as well as handling of keyboard and mouse events between Vue components.",
      "Developed web application user interfaces using Vue.js and Nuxt.js.",
      "Worked with additional libraries such as Axios, Vue Router, Vuex and other tools to enhance application functionality.",
    ],
    stack: {
      title: "Stack",
      value:
        "JavaScript( Vue + NuxtJS( Vuex, Axios ...Other_packages)), HTML( Semantic_layout ), CSS( SASS, TailwindCSS )",
    },
    portfolio: {
      title: "Portfolio",
      items: ["https://www.diardushanbe.com/", "https://mdis.edu.tj/", "..."],
    },
  },
  {
    period: "2019 to 2022",
    company: "Self-employed, Freelancer",
    position: primaryData.position.second,
    desc: [
      "Learned the basics of the WordPress engine and mastered this CMS up and down as I did most of my academic and commercial projects using it.",
      "Practiced on training and commercial projects, mastered CSS grid layout technology for a more efficient and elegant adaptive layout solution.",
    ],
    stack: {
      title: "Stack",
      value: "WordPress, HTML, CSS( Bootstrap )",
    },
  },
];

export const educations = {
  title: "Education",
  desc: "Video courses",
  items: [
    "[WebForMySelf] WordPress-Мастер. Разработка тем для WordPress (2018)",
    "[WebForMyself] Технология CSS Grid. Руководство по адаптивной верстке (2019)",
    "[Исмаил Усеинов] [Udemy] Frontend разработчик на HTML, CSS и JavaScript (2021)",
    "[ITVDN] JavaScript Стартовый (2021)",
    "[Udemy, Bogdan Stashchuk] JavaScript - Полный Курс По JavaScript (Включает 80 Задач) [2022]",
    "Vue 3 2021 Владилен Минин",
    "Youtube курс по NuxtJS",
    "[Udemy, Bogdan Stashchuk] React - Полный Курс по React и Redux",
    "Youtube курс по NextJS",
  ]
}

