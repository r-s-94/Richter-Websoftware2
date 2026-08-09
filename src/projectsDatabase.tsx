import Social_Media_IMG from "./assets/OpenPureNet.jpg";
import Social_Media_IMG2 from "./assets/OpenPureNet2.jpg";
import Social_Media_IMG3 from "./assets/OpenPureNet3.jpg";
import Social_Media_IMG4 from "./assets/OpenPureNet4.jpg";
import Social_Media_IMG5 from "./assets/OpenPureNet5.jpg";
import Client_NexusIMG from "./assets/Client-Nexus.png";
import Client_NexusIMG2 from "./assets/Client-Nexus2.png";
import Client_NexusIMG3 from "./assets/Client-Nexus3.png";
import Client_NexusIMG4 from "./assets/Client-Nexus4.png";
import Amagon_IMG from "./assets/Amagon.jpg";
import Amagon_IMG2 from "./assets/Amagon2.jpg";
import Amagon_IMG3 from "./assets/Amagon3.jpg";
import Amagon_IMG4 from "./assets/Amagon4.jpg";
import Amagon_IMG5 from "./assets/Amagon5.jpg";
import Bevenuto_Salvatore_IMG from "./assets/Italiener.jpg";
import Bevenuto_Salvatore_IMG2 from "./assets/Italiener2.jpg";
import Bevenuto_Salvatore_IMG3 from "./assets/Italiener3.jpg";
import Bevenuto_Salvatore_IMG4 from "./assets/Italiener4.jpg";
import Bevenuto_Salvatore_IMG5 from "./assets/Italiener5.jpg";
import CinePalace_IMG from "./assets/CinePalace.jpg";
import CinePalace_IMG2 from "./assets/CinePalace2.jpg";
import CinePalace_IMG3 from "./assets/CinePalace3.jpg";
import CinePalace_IMG4 from "./assets/CinePalace4.jpg";
import CinePalace_IMG5 from "./assets/CinePalace5.jpg";
import CinePalace_IMG6 from "./assets/CinePalace6.jpg";
import CinePalace_IMG7 from "./assets/CinePalace7.jpg";
import Portfolio_IMG from "./assets/Portfolio Webseite.png";
import Note_App_IMG from "./assets/Web-Aplication Notiz-App.jpg";
import Joke_App_IMG from "./assets/Web-Apclication Witze-App.jpg";
import Weather_App_IMG from "./assets/Web-Aplication Wetter-App.jpg";

export interface Project {
  title: string;
  index: number;
  imgQuantity: number;
  projectIMG: ProjectImg[];
  technologies: string[];
  description: string;
  app: string;
}

interface ProjectImg {
  index: number;
  img: string;
}

export const projects: Project[] = [
  {
    title: "OpenPureNet",
    index: 0,
    imgQuantity: 5,
    projectIMG: [
      { index: 0, img: Social_Media_IMG },
      { index: 1, img: Social_Media_IMG2 },
      { index: 2, img: Social_Media_IMG3 },
      { index: 3, img: Social_Media_IMG4 },
      { index: 4, img: Social_Media_IMG5 },
    ],
    technologies: [
      "React-Vite",
      "React-Dom",
      "Supabase",
      "TypeScript",
      "Tailwind-CSS",
      "Shadcn",
      "BEM",
      "Responsive-Design",
    ],
    description: `OpenPureNet ist eine selbst entwickelte Plattform, die den Funktionsumfang moderner Netzwerke nachbildet. 
                  Registrierung, Login und Verwaltung von Profilen. Anfragen senden, annehmen, Status verfolgen. 
                  Bilder und Videos mit Validierung (Dateiname, Dateigröße, Sonderzeichen) hochladen. 
                  Nutzer werden über neue Anfragen und Upload-Status informiert.`,
    app: "https://openpurenet.richter-websoftware.de/",
  },
  {
    title: "Client-Nexus",
    index: 1,
    imgQuantity: 4,
    projectIMG: [
      { index: 0, img: Client_NexusIMG },
      { index: 1, img: Client_NexusIMG2 },
      { index: 2, img: Client_NexusIMG3 },
      { index: 3, img: Client_NexusIMG4 },
    ],
    technologies: [
      "React-Vite",
      "React-Dom",
      "Supabase",
      "TypeScript",
      "React-Chart",
      "SCSS",
      "BEM",
    ],
    description: `Das Client Nexus CRM Programm bietet es an, seine Mitarbeiter, 
                  Kunden und Aufträge digital zu erfassen und zu verarbeiten. 
                  Ein Graph zur Anzeige des Jahresumsatzes macht die Finanzen übersichtlich.`,
    app: "https://r-s-94.github.io/CRM-Verwaltungsprogramm/",
  },
  {
    title: "Amagon",
    index: 2,
    imgQuantity: 5,
    projectIMG: [
      { index: 0, img: Amagon_IMG },
      { index: 1, img: Amagon_IMG2 },
      { index: 2, img: Amagon_IMG3 },
      { index: 3, img: Amagon_IMG4 },
      { index: 4, img: Amagon_IMG5 },
    ],
    technologies: [
      "React-Vite",
      "React-Dom",
      "LocalStorage",
      "TypeSrcipt",
      "SCSS",
      "BEM",
      "Responsive Design",
    ],
    description: `Amagon, ein fiktiver Online-Shop, steht für modernes Online-Shopping mit grenzenloser Vielfalt.
                  Mit modernen Technologien wie ReactVite, SCSS, ReactRouterDOM und LocalStorage wurde 
                  dieser übersichtliche, ansprechnd gestaltete Shop entwickelt. Einkäufe und Einstellungen lassen 
                  sich einfach und bequem im LocalStorage speichern. Das Design ist responsive und für mobile 
                  Endgeräte optimiert.`,
    app: "https://r-s-94.github.io/Online-Shop/",
  },
  {
    title: "Benvenuto Salvatore",
    index: 3,
    imgQuantity: 5,
    projectIMG: [
      { index: 0, img: Bevenuto_Salvatore_IMG },
      { index: 1, img: Bevenuto_Salvatore_IMG2 },
      { index: 2, img: Bevenuto_Salvatore_IMG3 },
      { index: 3, img: Bevenuto_Salvatore_IMG4 },
      { index: 4, img: Bevenuto_Salvatore_IMG5 },
    ],
    technologies: ["HTML", "SCSS", "JavaScript", "BEM", "Responsive Design"],
    description: `Die Website vom dem fiktiven Italiener Benvenutto Salvatore ist
              eine moderner ansprechenden Webpage in dunklen Design. Das Layout
              ist darauf ausgelegt, den Besucher der Seite zu einem Besuch im
              Restaurant anzuregen. Das Design wurde responsive mit angepasst
              und ist auch für Mobile optimiert um den Besucher ein optimales
              Erlebniss zu bereiten.`,
    app: "https://r-s-94.github.io/Italiener/",
  },
  {
    title: "CinePalace",
    index: 4,
    imgQuantity: 7,
    projectIMG: [
      { index: 0, img: CinePalace_IMG },
      { index: 1, img: CinePalace_IMG2 },
      { index: 2, img: CinePalace_IMG3 },
      { index: 3, img: CinePalace_IMG4 },
      { index: 4, img: CinePalace_IMG5 },
      { index: 5, img: CinePalace_IMG6 },
      { index: 6, img: CinePalace_IMG7 },
    ],
    technologies: ["React-Vite", "TypeScript", "Local-Storage", "SCSS", "BEM"],
    description: `Das CinePalace ist eine fiktive responsive Kino-Webseite mit integriertem Buchungssystem.
                  Die Anwendung ermöglicht das Endecken aktueller Filme, die Auswahl von Sitzplätzen sowie
                  die Online-Buchung von Tickets und Snacks. Entwickelt wurde das Projekt mit React, Typescript
                  und SCSS. Besonderer Fokus lag auf einer modernen Benutzeroberfläche, einer intuitiven Bedienung
                  und einem dynamischen 3D-Slider.`,
    app: "https://r-s-94.github.io/CinePalace/",
  },
  {
    title: "Portfolio-Webseite",
    index: 5,
    imgQuantity: 1,
    projectIMG: [{ index: 0, img: Portfolio_IMG }],
    technologies: ["HTML", "Responsiv Design"],
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              corrupti repellat, deleniti facere fuga consequuntur eaque
              voluptatum ipsam dolores, saepe tempora excepturi! Totam quae rem
              minus, recusandae nam iste facilis! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sunt debitis rerum molestiae minus,
              porro rem ducimus vitae officia dolores repudiandae expedita totam
              unde fugiat fuga nihil. Consequuntur sit accusamus ratione.`,
    app: "https://richter-softwaresysteme.de/",
  },
  {
    title: "Notize-App",
    index: 6,
    imgQuantity: 1,
    projectIMG: [{ index: 0, img: Note_App_IMG }],
    technologies: [
      "HTML",
      "SCSS",
      "React-Vite",
      "React-Router-Dom",
      "Local-Storage",
      "Responsive-Design",
      "BEM",
    ],
    description: `Eine klassische Notiz-App, zur Erstellung und Bearbeitung von
                  Notizen. Übersichtlich, funktional und mit modernen Technologien
                  entwickelt im schicken Design. Damit vergisst du nie wieder deine
                  Ideen und Gedanken.`,
    app: "https://r-s-94.github.io/Notiz-App/",
  },
  {
    title: "Witze-App",
    index: 7,
    imgQuantity: 1,
    projectIMG: [{ index: 0, img: Joke_App_IMG }],
    technologies: [
      "HTML",
      "CSS",
      "React-Vite",
      "React-Router-Dom",
      "Responsive-Design",
      "BEM",
    ],
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              corrupti repellat, deleniti facere fuga consequuntur eaque
              voluptatum ipsam dolores, saepe tempora excepturi! Totam quae rem
              minus, recusandae nam iste facilis! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sunt debitis rerum molestiae minus,
              porro rem ducimus vitae officia dolores repudiandae expedita totam
              unde fugiat fuga nihil. Consequuntur sit accusamus ratione.`,
    app: "https://r-s-94.github.io/Witze-App/",
  },
  {
    title: "Wetter-App",
    index: 8,
    imgQuantity: 1,
    projectIMG: [{ index: 0, img: Weather_App_IMG }],
    technologies: [],
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              corrupti repellat, deleniti facere fuga consequuntur eaque
              voluptatum ipsam dolores, saepe tempora excepturi! Totam quae rem
              minus, recusandae nam iste facilis! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sunt debitis rerum molestiae minus,
              porro rem ducimus vitae officia dolores repudiandae expedita totam
              unde fugiat fuga nihil. Consequuntur sit accusamus ratione.`,
    app: "https://r-s-94.github.io/Wetter-App/",
  },
];
