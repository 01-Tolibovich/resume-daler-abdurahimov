export const primaryData = {
  user: {
    firstName: "Далер",
    lastName: "Абдурахимов",
  },
  position: {
    first: "Front End разработчик",
    second: "Веб-разработчик",
  },
  slill: "Навыки",
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
  workHistory: "История работы",
};

export const data = [
  {
    period: "2023г по Текущий",
    company: "Компания Fly.tj (Антарес)",
    position: primaryData.position.first,
    desc: [
      "Предоставлял техническую поддержку B2C-продукта fly.tj, а также двум партнёрским сервисам: B2C flytrip.uz и B2B agent.flytrip.uz.",
      "Поддерживал легаси-код, выполняя рефакторинг и оптимизацию приложения на React 16.",
      "Разработал новые функции по запросу руководства, включая отображение информации о маршруте в модальном окне, корзину бронированных авиабилетов, поиск сохранённых пассажиров и другие улучшения.",
      "Создал макеты новых страниц в figma и реализовал их в проектах на основе разработанных дизайнов.",
      "Очистил проект fly.tj от старых и неиспользуемых медиафайлов, а также удалил неактивный код после рефакторинга отдельных компонентов, что улучшило скорость загрузки страниц.",
      "",
      "Разработал обновлённую версию пользовательского интерфейса B2B-продукта в рамках проекта business.fly.tj.",
      "Выполнял семантическую и кроссбраузерную вёрстку, обеспечивая доступность и корректное отображение во всех популярных браузерах.",
      "Адаптировал вёрстку под разные устройства, используя современные CSS-технологии (Grid, clamp() и др.), что повысило удобство взаимодействия с интерфейсом.",
      "Разработал и внедрил цветовые схемы для тёмной темы сервиса, улучшив удобство работы пользователей в условиях низкой освещённости.",
      "Интегрировал фронтенд с бэкендом, обеспечив получение и обработку данных на клиенте, а также отправку данных на сервер.",
    ],
    stack: {
      title: "Стек",
      value:
        "JavaScript( TypeScript( React( Redux, ...Other_packages ), NextJS( Zustand, Zod, ShadcnUI, ...Other_packages))), HTML( Semantic_layout ) CSS( SASS, TailwindCSS, StyledComponents) ",
    },
    portfolio: {
      title: "Портфолио",
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
    period: "2022г по 2023г",
    company: "Livo Outsource Company",
    position: primaryData.position.first,
    desc: [
      "Закрепил знания JavaScript-фреймворка Vue.js, оценив его преимущества, такие как эффективное разбиение приложения на переиспользуемые компоненты и удобная передача данных разных типов (строка, массив, объект), а также обработка событий клавиатуры и мыши между компонентами Vue.",
      "Разрабатывал пользовательские интерфейсы веб-приложений с использованием Vue.js и Nuxt.js.",
      "Работал с дополнительными библиотеками, такими как Axios, Vue Router, Vuex и другими инструментами для улучшения функциональности приложений.",
    ],
    stack: {
      title: "Стек",
      value:
        "JavaScript( Vue + NuxtJS( Vuex, Axios ...Other_packages)), HTML( Semantic_layout ), CSS( SASS, TailwindCSS )",
    },
    portfolio: {
      title: "Портфолио",
      items: ["https://www.diardushanbe.com/", "https://mdis.edu.tj/", "..."],
    },
  },
  {
    period: "2019г по 2022 г",
    company: "Самозанятость, Фрилансер",
    position: primaryData.position.second,
    desc: [
      "Изучал основы движка WordPress и освоил эту CMS вдоль и поперёк, так как большинство учебных и коммерческих проектов выполнял с её помощью.",
      "Практикуя на учебных и коммерческих проектах, освоил CSS-технологию Grid Layout для более эффективного и элегантного решения адаптивной вёрстки.",
    ],
    stack: {
      title: "Стек",
      value: "WordPress, HTML, CSS( Bootstrap )",
    },
  },
];

export const educations = {
  title: "Образование",
  desc: "Видеокурсы",
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