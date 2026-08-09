import Social_Media_IMG from "./assets/OpenPureNet.jpg";
import Client_NexusIMG from "./assets/Client-Nexus.png";
import Amagon_IMG from "./assets/Amagon.jpg";
import Bevenuto_Salvatore_IMG from "./assets/Italiener.jpg";
import CinePalace_IMG from "./assets/CinePalace.jpg";

export interface ProjectHighlights {
  title: string;
  imgQuantitie: number;
  projectIMG: string;
  style: string;
  technologies: string[];
  description: string;
  app: string;
  appTitle: string;
}

export const projectHighlights: ProjectHighlights[] = [
  {
    title: "OpenPureNet",
    imgQuantitie: 5,
    projectIMG: Social_Media_IMG,
    style: "project-cart",
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
    appTitle: "zu OpenPureNet",
  },
  {
    title: "Client-Nexus CRM",
    imgQuantitie: 4,
    projectIMG: Client_NexusIMG,
    style: "project-cart2",
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
    appTitle: "zu Client Nexus CRM",
  },
  {
    title: "Amagon",
    imgQuantitie: 5,
    projectIMG: Amagon_IMG,
    style: "project-cart3",
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
    appTitle: "zu Amagon",
  },
  {
    title: "Benvenuto Salvatore",
    imgQuantitie: 5,
    projectIMG: Bevenuto_Salvatore_IMG,
    style: "project-cart4",
    technologies: ["HTML", "SCSS", "JavaScript", "BEM", "Responsive Design"],
    description: `Die Website vom dem fiktiven Italiener Benvenutto Salvatore ist
              eine moderner ansprechenden Webpage in dunklen Design. Das Layout
              ist darauf ausgelegt, den Besucher der Seite zu einem Besuch im
              Restaurant anzuregen. Das Design wurde responsive mit angepasst
              und ist auch für Mobile optimiert um den Besucher ein optimales
              Erlebniss zu bereiten.`,
    app: "https://r-s-94.github.io/Italiener/",
    appTitle: "zu Benvenuto Salvatore",
  },
  {
    title: "CinePalace",
    imgQuantitie: 7,
    projectIMG: CinePalace_IMG,
    style: "project-cart5",
    technologies: ["React-Vite", "TypeScript", "Local-Storage", "SCSS", "BEM"],
    description: ``,
    app: "https://r-s-94.github.io/CinePalace/",
    appTitle: "zum CinePalace",
  },
];
