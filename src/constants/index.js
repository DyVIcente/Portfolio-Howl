import {
  piquante,
  kasa,
  yariga,
  kanap,
  pp,
  horace,
  metaversus,
  camsocial,
  githubProfile,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "work",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const projects = [
  {
    name: "Courses.Fidme.com",
    description:
      "Retrouvez sur courses.fidme.com toutes les offres de remboursement, les promotions et les réductions disponibles sur Fidme Courses. Les plus grandes marques sont enfin accessibles !",
    tags: [
      {
        name: "React",
        color: "text-black",
      },
    ],
    image: githubProfile,
    source_code_link: "https://courses.fidme.com/",
  },
  {
    name: "Piiquante",
    description:
      "Projet 6 - Formation Développeur Web. Construire une API sécurisée pour une application d'avis gastronomiques.",
    tags: [
      {
        name: "NodeJS",
        color: "text-black",
      },
      {
        name: "Mongodb",
        color: "text-black",
      },
      {
        name: "Express",
        color: "text-black",
      },
    ],
    image: piquante,
    source_code_link: "https://github.com/DyVIcente/P6-Piiquante",
  },
  {
    name: "Kasa",
    description:
      "Porjet 7 - Formation Développeur Web. Créez une application web de location immobilière avec React.",
    tags: [
      {
        name: "React",
        color: "text-black",
      },
      {
        name: "Css",
        color: "text-black",
      },
    ],
    image: kasa,
    source_code_link: "https://github.com/DyVIcente/P7-Kasa",
  },
  {
    name: "Yariga",
    description:
      "Exercice - Yariga est une App/exercice dashboard, Full Satck, MERN, avec CRUD, Auth, et des graphiques à l'aide de Refine.",
    tags: [
      {
        name: "MERN",
        color: "text-black",
      },
      {
        name: "MaterialUI",
        color: "text-black",
      },
      {
        name: "TypeScript",
        color: "text-black",
      },
      {
        name: "Refine",
        color: "text-black",
      },
    ],
    image: yariga,
    source_code_link:
      "https://github.com/DyVIcente/Yariga-Dashboard-Porperties",
  },
  {
    name: "Kanap",
    description:
      "Projet 5 - Formation Développeur Web. Construisez une site e-commerce en JavaScript.",
    tags: [
      {
        name: "JavaScript",
        color: "text-black",
      },
      {
        name: "Css",
        color: "text-black",
      },
    ],
    image: kanap,
    source_code_link: "https://github.com/DyVIcente/P5-Kanap",
  },
  {
    name: "Metaversus",
    description:
      "Exercice - Metaversus est un site one-page réalisé avec des animations au scroll et un design moderne.",
    tags: [
      {
        name: "Next.js",
        color: "text-black",
      },
      {
        name: "Framer-motion",
        color: "text-black",
      },
      {
        name: "Tailwind",
        color: "text-black",
      },
    ],
    image: metaversus,
    source_code_link: "https://github.com/DyVIcente/Metaversus",
  },
  {
    name: "CamSocial",
    description:
      "Exercice - Création d'une App réseau social, full-stack MERN avec auth, likes et dark mode.",
    tags: [
      {
        name: "MERN",
        color: "text-black",
      },
      {
        name: "MaterialUI",
        color: "text-black",
      },
    ],
    image: camsocial,
    source_code_link: "https://github.com/DyVIcente/Reseau-Social-Exercice",
  },
  {
    name: "Encore plus",
    description: "Pour voir plus de projets et ma Github Page.",
    tags: [
      {
        name: "Etc..",
        color: "text-black",
      },
    ],
    image: githubProfile,
    source_code_link: "https://github.com/DyVIcente",
  },
];

export const Recomendations = [
  {
    reco: "J'ai eu la chance d'accompagner Dylan dans sa formation de Développeur web sur OpenClassrooms. Dylan est passionné par son travail, il a prouvé à mainte reprise son envie de monter en compétence. Il ne perd jamais de temps pour apprendre de nouvelles choses ou pour consolider ses acquis.Je n'ai aucun doute quant aux capacités de Dylan, ce sera un vrai atout pour votre équipe.",
    name: "Thomas Boileau",
    designation: "Développeut PHP Symphony",
    company: "Freelance",
    image: pp,
  },
  {
    reco: "Dylan est aussi lumineux qu'un sortilège Lumos Maxima. Ses talents en développement sont époustouflants.",
    name: "Horace Slughorn",
    designation: "Professeur de potions",
    company: "Poudlard",
    image: horace,
  },
];
