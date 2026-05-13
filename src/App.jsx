import { useEffect, useMemo, useState } from "react";
import {
  FaBriefcase,
  FaChevronRight,
  FaCode,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFileDownload,
  FaGem,
  FaGithub,
  FaLinkedin,
  FaMapMarkedAlt,
  FaMedal,
  FaMoon,
  FaScroll,
  FaSun,
  FaTimes,
  FaTools,
  FaUserAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { certificates } from "./data/certificates";
import { experience } from "./data/experience";
import { projects } from "./data/projects";
import { skills } from "./data/skills";
import { assetPath } from "./utils/assets";

const sections = [
  { id: "home", label: "Perfil", icon: FaUserAlt },
  { id: "inventory", label: "Inventario", icon: FaGem },
  { id: "quests", label: "Misiones", icon: FaMapMarkedAlt },
  { id: "achievements", label: "Crónicas", icon: FaScroll },
];

const rarityMeta = {
  common: { label: "Común", className: "rarity-common" },
  rare: { label: "Raro", className: "rarity-rare" },
  epic: { label: "Épico", className: "rarity-epic" },
  legendary: { label: "Legendario", className: "rarity-legendary" },
};

const particles = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  top: `${8 + ((index * 37) % 84)}%`,
  left: `${4 + ((index * 53) % 90)}%`,
  delay: `${(index % 7) * 0.8}s`,
  duration: `${8 + (index % 6)}s`,
  size: `${2 + (index % 3)}px`,
}));

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") !== "false");

  useEffect(() => {
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") setIsContactOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className={`app-shell ${darkMode ? "theme-void" : "theme-pale"}`}>
      <Atmosphere />
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-24 px-4 pb-24 pt-28 sm:px-6 lg:pl-64 lg:pr-10">
        <section id="home" className="scroll-mt-28">
          <Home onOpenContact={() => setIsContactOpen(true)} />
        </section>

        <section id="inventory" className="scroll-mt-28">
          <Inventory />
        </section>

        <section id="quests" className="scroll-mt-28">
          <Projects />
        </section>

        <section id="achievements" className="scroll-mt-28">
          <Chronicle />
        </section>
      </main>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

function Atmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="mist-layer" />
      <div className="vignette-layer" />
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="ember"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}

function Navigation({ darkMode, setDarkMode }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className="fixed inset-x-3 top-3 z-50 lg:bottom-6 lg:left-6 lg:right-auto lg:top-6 lg:w-56">
      <nav className="menu-frame flex items-center gap-2 overflow-x-auto px-3 py-3 lg:h-full lg:flex-col lg:items-stretch lg:justify-between lg:overflow-visible lg:p-4">
        <div className="hidden lg:block">
          <p className="eyebrow">Portafolio RPG</p>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--text-strong)]">Nacho</h2>
          <p className="mt-1 text-sm text-[var(--text-muted)]">Backend Developer</p>
        </div>

        <div className="flex min-w-max gap-2 lg:min-w-0 lg:flex-col">
          {sections.map(({ id, label, icon: Icon }) => (
            <button key={id} type="button" onClick={() => scrollTo(id)} className="nav-item">
              {Icon({ "aria-hidden": "true" })}
              <span>{label}</span>
              <FaChevronRight aria-hidden="true" className="hidden text-[10px] opacity-60 lg:block" />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setDarkMode((value) => !value)}
          className="nav-item ml-auto lg:ml-0"
          aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
          {darkMode ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
          <span className="hidden sm:inline">{darkMode ? "Luz pálida" : "Vacío"}</span>
        </button>
      </nav>
    </aside>
  );
}

function Home({ onOpenContact }) {
  return (
    <div className="hero-grid">
      <Panel className="character-card">
        <div className="portrait-ring">
          <img src={assetPath("assets/pixel_art.jpg")} alt="Retrato pixel art de Nacho" />
        </div>

        <div className="mt-6 space-y-2 text-center">
          <p className="eyebrow">Clase inicial</p>
          <h1 className="text-4xl font-semibold text-[var(--text-strong)] sm:text-5xl">José Ignacio Ramiro</h1>
          <p className="text-[var(--accent)]">Backend Developer Junior</p>
        </div>

        <div className="mt-7 grid w-full gap-4">
          <Stat name="Python" level={86} />
          <Stat name="Backend" level={82} />
          <Stat name="Frontend" level={66} />
        </div>
      </Panel>

      <Panel className="flex flex-col justify-between gap-8">
        <div>
          <p className="eyebrow">Pantalla de personaje</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-[var(--text-strong)] sm:text-6xl">
            Hola aquí Nacho!
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
            Soy desarrollador backend junior enfocado en Python, arquitectura limpia y aplicaciones mantenibles.
            Trabajo con una base full stack para entender el producto completo, desde la lógica de dominio hasta la
            experiencia final del usuario.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Trait title="Rango" value="Nivel 2" />
          <Trait title="Arma" value="Python" />
          <Trait title="Afinidad" value="SOLID" />
        </div>

        <div className="flex flex-wrap gap-3">
          <ActionLink href="https://github.com/Ramirofordev" icon={FaGithub} label="GitHub" />
          <ActionLink href="https://linkedin.com/in/ramirofordev01/" icon={FaLinkedin} label="LinkedIn" />
          <ActionLink href="mailto:joseignacioramirocastro22@gmail.com" icon={FaEnvelope} label="Email" />
          <ActionLink href={assetPath("assets/José_Ignacio_Ramiro_Castro.pdf")} icon={FaFileDownload} label="CV" />
          <button type="button" onClick={onOpenContact} className="primary-action">
            Invocar contacto
          </button>
        </div>
      </Panel>
    </div>
  );
}

function Inventory() {
  const [activeTab, setActiveTab] = useState("certificates");
  const tabs = [
    { id: "certificates", label: "Reliquias", icon: FaMedal },
    { id: "skills", label: "Atributos", icon: FaCode },
    { id: "experience", label: "Ecos", icon: FaBriefcase },
  ];

  return (
    <Panel>
      <SectionHeader
        eyebrow="Inventario"
        title="Reliquias, atributos y ecos de progreso"
        description="Una vista compacta de formación, herramientas / tecnologías y experiencia."
      />

      <div className="mt-8 flex flex-wrap gap-2">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setActiveTab(id)}
            className={`tab-button ${activeTab === id ? "is-active" : ""}`}
            aria-pressed={activeTab === id}
          >
            {Icon({ "aria-hidden": "true" })}
            {label}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {activeTab === "certificates" && <CertificatesPanel />}
        {activeTab === "skills" && <SkillsPanel />}
        {activeTab === "experience" && <ExperiencePanel />}
      </div>
    </Panel>
  );
}

function Projects() {
  return (
    <Panel>
      <SectionHeader
        eyebrow="Misiones"
        title="Proyectos desplegados"
        description="Cada misión muestra contexto, decisiones técnicas y enlaces para revisar el resultado."
      />

      <div className="mt-8 grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Panel>
  );
}

function Chronicle() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <Panel>
        <SectionHeader
          eyebrow="Crónicas"
          title="Perfil de jugador"
          description=""
        />

        <div className="mt-8 space-y-6 text-lg leading-8 text-[var(--text-soft)]">
          <p>
            Mi perfil se centra en construir aplicaciones bien estructuradas, escalables y mantenibles. En proyectos
            personales y prácticas profesionales he trabajado con Python, arquitectura modular, gestión de datos y
            separación de responsabilidades.
          </p>
          <p>
            Complemento el backend con conocimientos de React, JavaScript, Git, Linux y cloud computing. Busco seguir
            creciendo en ingeniería de software aportando criterio, constancia y cuidado por la calidad del código.
          </p>
        </div>
      </Panel>

      <Panel className="profile-panel">
        <img src={assetPath("assets/yo.png")} alt="Foto de José Ignacio Ramiro" />
        <div>
          <p className="eyebrow">Afinidades activas</p>
          <div className="mt-4 grid gap-3">
            <Trait title="Arquitectura" value="Modular" />
            <Trait title="Principios" value="SOLID" />
            <Trait title="Objetivo" value="Backend" />
          </div>
        </div>
      </Panel>
    </div>
  );
}

function CertificatesPanel() {
  return (
    <div className="relic-grid">
      {certificates.map((cert) => (
        <CertificateCard key={cert.id} cert={cert} />
      ))}
    </div>
  );
}

function CertificateCard({ cert }) {
  const rarity = rarityMeta[cert.rarity] ?? rarityMeta.common;

  return (
    <article className={`relic-card ${rarity.className}`}>
      <div className="relic-image">
        <img src={cert.image} alt={`Certificado ${cert.title}`} loading="lazy" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="rarity-badge">{rarity.label}</span>
          <FaGem aria-hidden="true" className="text-xs opacity-70" />
        </div>
        <h3 className="mt-3 text-lg font-semibold text-[var(--text-strong)]">{cert.title}</h3>
        <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{cert.description}</p>
        <a href={cert.pdf} target="_blank" rel="noopener noreferrer" className="text-link mt-4 inline-flex">
          Ver certificado
          <FaExternalLinkAlt aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function SkillsPanel() {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <SkillColumn title="Lenguajes" items={skills.languages} icon={FaCode} />
      <SkillColumn title="Herramientas" items={skills.tools} icon={FaTools} />
    </div>
  );
}

function SkillColumn({ title, items, icon: Icon }) {
  return (
    <div className="inventory-column">
      <div className="mb-5 flex items-center gap-3">
        {Icon({ "aria-hidden": "true", className: "text-[var(--accent)]" })}
        <h3 className="text-xl font-semibold text-[var(--text-strong)]">{title}</h3>
      </div>

      <div className="grid gap-4">
        {items.map((skill) => (
          <div key={skill.name} className="skill-row">
            <img src={skill.icon} alt="" aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium text-[var(--text-strong)]">{skill.name}</span>
                <span className="text-sm text-[var(--text-muted)]">{skill.level}</span>
              </div>
              <div className="stat-track mt-2">
                <span style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperiencePanel() {
  return (
    <div className="timeline">
      {experience.map((item) => (
        <article key={item.id} className="timeline-card">
          <span className="timeline-dot" />
          <div>
            <p className="eyebrow">{item.rank}</p>
            <h3 className="mt-2 text-2xl font-semibold text-[var(--text-strong)]">{item.role}</h3>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              {item.company} · {item.date}
            </p>
            <ul className="mt-4 space-y-2 text-[var(--text-soft)]">
              {item.description.map((desc) => (
                <li key={desc} className="flex gap-3">
                  <FaChevronRight aria-hidden="true" className="mt-1 shrink-0 text-xs text-[var(--accent)]" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="quest-card">
      <div className="quest-media">
        <img src={project.img} alt={`Vista previa de ${project.title}`} loading="lazy" />
      </div>

      <div className="quest-body">
        <div className="flex flex-wrap items-center gap-3">
          <span className="quest-type">{project.type}</span>
          <span className="quest-status">{project.status}</span>
        </div>

        <h3 className="mt-4 text-3xl font-semibold text-[var(--text-strong)]">{project.title}</h3>
        <p className="mt-4 leading-7 text-[var(--text-soft)]">{project.description}</p>

        <ul className="mt-5 grid gap-2 text-sm text-[var(--text-muted)]">
          {project.details.map((detail) => (
            <li key={detail} className="flex gap-3">
              <FaChevronRight aria-hidden="true" className="mt-1 shrink-0 text-[10px] text-[var(--accent)]" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology.name} className="tech-chip" style={{ backgroundColor: technology.color }}>
              <img src={technology.icon} alt="" aria-hidden="true" />
              {technology.name}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <ActionLink href={project.links.demo} icon={FaExternalLinkAlt} label="Demo" />
          <ActionLink href={project.links.repo} icon={FaGithub} label="Repositorio" />
        </div>
      </div>
    </article>
  );
}

function ContactModal({ isOpen, onClose }) {
  const [status, setStatus] = useState("idle");

  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm("service_jk5ztzp", "template_kxjjndg", event.currentTarget, "DWVqBbequAhd6m7Mf")
      .then(() => {
        setStatus("sent");
        event.currentTarget.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <div className="modal-backdrop" role="presentation">
      <div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="contact-title">
        <button type="button" onClick={onClose} className="modal-close" aria-label="Cerrar contacto">
          <FaTimes aria-hidden="true" />
        </button>

        <p className="eyebrow">Campana de invocación</p>
        <h2 id="contact-title" className="mt-2 text-3xl font-semibold text-[var(--text-strong)]">
          Contacto
        </h2>
        <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
          Rellena el formulario y recibiré tu mensaje por email.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <Field label="Nombre" name="name" placeholder="Tu nombre" required />
          <Field label="Email" name="email" type="email" placeholder="tu@email.com" required />

          <label className="field-label">
            <span>Mensaje</span>
            <textarea name="message" rows="5" placeholder="¿En qué puedo ayudarte?" required />
          </label>

          <button type="submit" className="primary-action w-full justify-center" disabled={status === "sending"}>
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </button>

          {status === "sent" && <p className="form-status success">Mensaje enviado correctamente.</p>}
          {status === "error" && <p className="form-status error">No se pudo enviar. Revisa los datos e inténtalo de nuevo.</p>}
        </form>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder, required = false }) {
  return (
    <label className="field-label">
      <span>{label}</span>
      <input name={name} type={type} placeholder={placeholder} required={required} />
    </label>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--text-strong)] sm:text-5xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-[var(--text-soft)]">{description}</p>
    </div>
  );
}

function Panel({ children, className = "" }) {
  return <div className={`panel ${className}`}>{children}</div>;
}

function Stat({ name, level }) {
  const width = useMemo(() => `${level}%`, [level]);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-[var(--text-muted)]">{name}</span>
        <span className="text-[var(--accent)]">{level}</span>
      </div>
      <div className="stat-track">
        <span style={{ width }} />
      </div>
    </div>
  );
}

function Trait({ title, value }) {
  return (
    <div className="trait">
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  );
}

function ActionLink({ href, icon: Icon, label }) {
  const isExternal = href.startsWith("http");

  return (
    <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className="action-link">
      {Icon({ "aria-hidden": "true" })}
      <span>{label}</span>
    </a>
  );
}

export default App;
