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
      { name: "CSS", icon: assetPath("assets/css.svg"), color: "rgba(38, 77, 228, 0.18)" },
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
];
