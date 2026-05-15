import { assetPath } from "../utils/assets";

export const projects = [
  {
    id: 1,
    img: assetPath("assets/demo-3.gif"),
    title: "Agile Project",
    type: "Quest principal",
    status: "Desplegado",
    technologies: [
      { name: "Python", icon: assetPath("assets/python.svg"), color: "rgba(75, 139, 190, 0.2)" },
      { name: "Flask", icon: assetPath("assets/flask.svg"), color: "rgba(229, 231, 235, 0.14)" },
      { name: "HTML", icon: assetPath("assets/html5.svg"), color: "rgba(240, 101, 41, 0.2)" },
      { name: "JavaScript", icon: assetPath("assets/javascript.svg"), color: "rgba(240, 219, 79, 0.22)" },
      { name: "CSS", icon: assetPath("assets/css.svg"), color: "rgba(23, 47, 139, 0.18)" },
    ],
    description:
      "Aplicación web de gestión de tareas orientada a proyectos y contextos. Incluye CRUD completo, filtrado avanzado y una interfaz adaptada a dispositivos móviles.",
    details: [
      "Arquitectura por capas: dominio, servicios y repositorios.",
      "Aplicación de principios SOLID y separación de responsabilidades.",
      "Despliegue público y repositorio disponible para revisión técnica.",
    ],
    links: {
      demo: "https://agile-project-o2pv.onrender.com",
      repo: "https://github.com/Ramirofordev/Agile-Project",
    },
  },
  {
    id: 2,
    img: assetPath("assets/demo-crm-1.gif"),
    title: "CRM Project",
    type: "Quest principal",
    status: "Desplegado",
    technologies: [
        { name: "Python", icon: assetPath("assets/python.svg"), color: "rgba(75, 139, 190, 0.2)" },
        {name: "FastAPI", icon: assetPath("assets/FastAPI.svg"), color: "rgba(0, 150, 136, 0.2)" },
        {name: "React", icon: assetPath("assets/react.svg"), color: "rgba(97, 218, 251, 0.2)" },
        {name: "Tailwind", icon: assetPath("assets/tailwind.svg"), color: "rgba(56, 189, 248, 0.2)"},
    ],
    description:
      "Aplicación CRM orientada a la gestión de clientes, contactos y procesos comerciales. Integra una API backend con una interfaz web moderna para centralizar operaciones y facilitar el seguimiento de información clave.",
    details: [
      "Backend desarrollado con FastAPI para exponer endpoints REST y gestionar la lógica de negocio.",
      "Frontend construido con React y Tailwind CSS para una interfaz responsive y modular.",
      "Separación entre capa de presentación y API para mantener una arquitectura desacoplada.",
    ],
    links: {
      demo: "https://project-crm-woad.vercel.app",
      repo: "https://github.com/Ramirofordev/CRM",
    },
  },
];
