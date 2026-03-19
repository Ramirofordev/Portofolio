import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaLink} from "react-icons/fa";
import { certificates } from "./data/certificates";
import { skills } from "./data/skills";
import { experience } from "./data/experience";
import { projects } from "./data/projects";
import  emailjs  from "@emailjs/browser";

// Screens
function Home({ darkMode, onOpenContact }) {
  return (
    <div className = "min-h-screen flex flex-col items-center justify-center pt-10 text-center">
      <div className = "flex gap-10">
        <div className = "p-10 rounded-2xl  max-w-md flex-col flex gap-4">
          <img className = "w-36 h-36 rounded-full object-cover border-4 border-purple-400 shadow-[0_0_25px_#a855f7]" src = "/Portofolio/assets/pixel_art.jpg" alt = "profile" />
          <p className = "text-lg leading-relaxed text-lg font-semibold">Full Stack Developer</p>
          <p className = "text-sm leading-relaxed">Level 2</p>
          <Stat name = "Backend" level = {80} />
          <Stat name = "Frontend" level = {60} />
        </div>

        <div className = "p-10 rounded-2xl max-w-md gap-10 mt-10">
          <h2 className = "text-5xl font-bold text-justify"> <span>Hola, aqui <span className = "text-purple-400 font-bold">Nacho!</span></span> 👋</h2>
          <h3 className = "text-lg leading-relaxed text-justify">
            <br />
           Soy <span className = "italic font-semibold text-purple-400">desarrollador backend junior enfocado en Python</span>, con experiencia en la creación de aplicaciones y en el uso de arquitecturas basadas en principios SOLID. Me apasiona construir soluciones eficientes, bien estructuradas y en constante mejora, mientras continúo formándome en ingeniería de software y computación en la nube.
          </h3>
        </div>
      </div>

        <div>
          <div className = "mt-10 flex justify-center gap-6">
            <IconButton 
            href = "https://github.com/Ramirofordev"
            icon = {FaGithub}
            darkMode = {darkMode} />

            <IconButton
            href = "https://linkedin.com/in/ramirofordev01/"
            icon = {FaLinkedin}
            darkMode = {darkMode} />

            <IconButton
            href = "mailto:joseignacioramirocastro22@gmail.com"
            icon = {FaEnvelope}
            darkMode = {darkMode} />

            <IconButton
            href = "/Portofolio/assets/José_Ignacio_Ramiro_Castro.pdf"
            icon = {FaFileDownload}
            darkMode = {darkMode} />

          </div>
        </div>

        <button
          onClick = {onOpenContact}
          className="
            mt-6 inline-block px-6 py-3 rounded-xl
            bg-purple-500 text-white font-semibold
            shadow-[0_0_20px_#a855f7]
            hover:scale-105 hover:bg-purple-600
            transition
          "
        >
          Contáctame
        </button>
    </div>

  );
}

function Inventory({ darkMode }) {
  const [activeTab, setActiveTab] = useState("certificates");
  return (
    <div className = "min-h-screen flex flex-col items-center justify-start pt-32 gap-10">
      <h1></h1>

      <InventoryTabs activeTab = {activeTab} setActiveTab = {setActiveTab} darkMode = {darkMode}/>

      <div className = "w-full max-w-4xl">
        {activeTab === "certificates" && <CertificatesPanel darkMode = {darkMode}/>}
        {activeTab === "skills" && <SkillsPanel darkMode = {darkMode}/>}
        {activeTab === "experience" && <ExperiencePanel darkMode = {darkMode}/>}
      </div>
    </div>
  );
}

function Projects({ darkMode }) {
  return (
    <div className = "min-h-screen flex items-center justify-center">
      <ProjectsPanel darkMode = {darkMode} />
    </div>
  );
}

function Aboutme() {
  return (
    <div className="min-h-screen flex flex-col justify-start pt-32 max-w-6xl mx-auto w-full px-6">
      
      <h2 className="text-4xl font-bold mb-12">
        Perfil de Jugador
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT - TEXTO */}
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-justify">
          
          <p>
            Soy <span className="font-semibold text-purple-400">desarrollador backend junior </span> 
            especializado en <span className="font-semibold">Python</span>, enfocado en crear 
            <span className="italic"> aplicaciones bien estructuradas, escalables y mantenibles</span>. 
            He desarrollado proyectos como un <span className="font-semibold text-purple-400">sistema CRM </span> 
            aplicando <span className="font-semibold">principios SOLID</span> y 
            <span className="font-semibold"> arquitectura modular</span>, además de contar con 
            experiencia práctica en entorno profesional.
          </p>

          <p>
            Complemento mi perfil con conocimientos en 
            <span className="font-semibold"> desarrollo web</span>, 
            <span className="font-semibold"> Git</span>, 
            <span className="font-semibold"> Linux</span> y 
            <span className="font-semibold text-purple-400"> cloud computing</span>. 
            Me considero una persona <span className="italic">en constante aprendizaje</span>, 
            orientada a la <span className="font-semibold">mejora continua</span> y al desarrollo 
            de <span className="font-semibold">soluciones que aporten valor</span>.
          </p>

        </div>

        {/* RIGHT - IMAGEN */}
        <div className="flex justify-center">
          <img
            src="/Portofolio/assets/yo.png"
            alt="profile"
            className="
              w-64 h-64 object-cover rounded-2xl
              border-2 border-purple-400
              shadow-[0_0_25px_#a855f7]
              transition duration-300
              hover:scale-105 hover:shadow-[0_0_40px_#a855f7]
            "
          />
        </div>

      </div>
    </div>
  );
}

function Navbar({ darkMode, setDarkMode }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-4 w-full flex justify-center z-50 text-sm font-sans">
      <div className={`
        flex gap-4 px-4 py-2 rounded-full
        backdrop-blur-sm border shadow-lg items-center
        shadow-[0_0_20px_rgba(168, 85, 247, 0.2)]
        hover:shadow-[0_0_25px_rgba(168, 85, 247, 0.4)]
        transition-all duration-300

        ${darkMode 
          ? "bg-white/5 border-white/10 text-white" 
          : "bg-black/5 border-black/10 text-black"}
      `}>

        <button onClick={() => scrollTo("home")} className="hover:text-purple-400">
          Inicio
        </button>

        <button onClick={() => scrollTo("inventory")} className="hover:text-blue-400">
          Inventario
        </button>

        <button onClick={() => scrollTo("quests")} className="hover:text-green-400">
          Proyectos
        </button>

        <button onClick={() => scrollTo("achievements")} className="hover:text-yellow-400">
          Sobre mi
        </button>

        <button 
          onClick={() => setDarkMode(prev => !prev)} 
          className="px-3 py-1 rounded-lg hover:scale-110 transition"
        >
          {darkMode ? "☼" : "☾"}
        </button>

        
      </div>
    </div>
  );
}

function Stat({ name, level }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(level)
  }, [level])
  return (
    <div className = "w-full flex items-center gap-4">
      <span className = "w-24">{name}</span>
      <div className = "w-full bg-gray-300 rounded-full h-4">
        <div className = "bg-purple-400 h-4 rounded-full transition-all ease-out duration-1000 shadow-[0_0_10px_#a855f7]" style = {{width: `${width}%`}}></div>
      </div>
    </div> 
  )
}

function IconButton({ href, icon: Icon, darkMode }) {
  return (
    <a href = {href} className = "flex items-center gap-3 group">
      <div className = {`border border-white/10 p-3 rounded-xl
      backdrop-blur-md
      transition-all duration-300
      hover:scale-110 hover:shadow-[0_0_15px_#a855f7]
      ${darkMode ? "hover:bg-[#e5d6e1]/10" : "hover:bg-[#373737]/10"}
      `}
      >
        <Icon size = {30} 
        className="transition group-hover:text-purple-400"/> 
      </div>
    </a>
  );
}

function InventoryTabs({ activeTab, setActiveTab, darkMode }) {
  const tabs = [
    { id: "certificates", label: "Certificados" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experiencia" },
  ];

  return (
    <div className = {`flex gap-4 px-4 py-2 rounded-xl border backdrop-blur-sm
    ${darkMode
      ? "bg-white/5 border-white/10 text-white"
      : "bg-black/5 border-black/10 text-black"}
      `}>

      {tabs.map((tab) => (
        <button
        key = {tab.id}
        onClick = {() => setActiveTab(tab.id)}
        className = {`
          px-4 py-2 rounded-lg transition-all duration-200
          
          ${activeTab === tab.id
            ? "bg-purple-500 text-white shadow-[0_0_10px_#a855f7]"
            : "text-gray-400 hover:text-black"}
            `}>
              {tab.label}
            </button>
      ))}
    </div>
  );
}

function CertificatesCard({ cert, darkMode }) {
  const rarityStyles = {
  common: "border-gray-400 bg-gray-400/5 hover:bg-gray-400/10",

  rare: "border-blue-400 bg-blue-400/5 hover:bg-blue-400/10 shadow-[0_0_10px_#60a5fa]",

  epic: "border-purple-400 bg-purple-400/5 hover:bg-purple-400/10 shadow-[0_0_15px_#a855f7]",

  legendary: "border-yellow-400 bg-yellow-400/5 hover:bg-yellow-400/15 shadow-[0_0_20px_#facc15]"
  };

  return (
    <div className = {`
      rounded-xl overflow-hidden border transition-all duration-300
      group hover:scale-105 group hover:-translate-y-1
      bg-gradient-to-br from-white/5 to-transparent
      ${darkMode
        ? "bg-white/5 "
        : "bg-black/5"
      }
      ${rarityStyles[cert.rarity] || "border-white/10"}
      `}>

        {/* Image */}
        <img
          src = {cert.image}
          alt = {cert.title}
          className = "w-full h-40 object-cover"
        />

        {/* Content */}
        <div className = "p-4 flex-col gap-2">

          <h3 className = "font-semibold text-lg group-hover:text-purple-400">
            {cert.title}
          </h3>

          <p className = "text-sm opacity-70">
            {cert.description}
          </p>

          {/* Botton */}
          <a
            href = {cert.pdf}
            target = "_blank"
            rel = "noopener noreferrer"
            className = "mt-2 hover:underline text-sm"
          >
            Ver certificado
          </a>
        </div>
      </div>
  );
}

function CertificatesPanel({ darkMode }) {
  return (
    <div className = "grid grid-cols-1 md:grid-cols-2 gap-6">

      {certificates.map((cert) => (
        <CertificatesCard
        key = {cert.id}
        cert = {cert}
        darkMode = {darkMode} />
      ))}
    </div>
  );
}

function SkillsRow({ items, direction = "left", darkMode }) {
  const animationClass = direction === "left" ? "scroll-left" : "scroll-right";

  return (
    <div className="overflow-hidden w-full">
      <div className={`flex gap-24 w-max px-10 ${animationClass}`}>

        {[...items, ...items].map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-6 group min-w-max cursor-pointer"
          >

            {/* ICON */}
            <img
              src={skill.icon}
              alt={skill.name}
              className="
                w-16 h-16
                grayscale
                brightness-75
                transition duration-300
                group-hover:grayscale-0
                group-hover:brightness-100
                group-hover:scale-110
              "
            />

            {/* TEXT */}
            <span
              className={`
                text-3xl font-semibold tracking-wide transition
                ${darkMode ? "text-gray-400 group-hover:text-white" : "text-gray-600 group-hover:text-black"}
                
              `}
            >
              {skill.name.toUpperCase()}
            </span>

          </div>
        ))}
      </div>
    </div>
  );
}

function SkillsPanel({ darkMode }) {
  return (
    <div className="flex flex-col gap-10">

      {/* Languages */}
      <SkillsRow items={skills.languages} direction="left" darkMode = {darkMode}/>

      {/* Frameworks / tools */}
      <SkillsRow items={skills.tools} direction="right" darkMode = {darkMode}/>

    </div>
  );
}

function ExperiencePanel({ darkMode }) {
  return (
    <div className = "relative max-w-4xl mx-auto">

      {/* Vertical Line */}
      <div className = "absolute left-1/2 top-0 h-full w-[2px] bg-purple-500 opacity-30 bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>

      <div className = "flex flex-col gap-16">
        {experience.map((item, index) => (
          <TimelineItem
            key = {item.id}
            item = {item}
            index = {index} 
            darkMode = {darkMode}
          />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ item, index, darkMode } ) {
    const isLeft = index % 2 === 0;

    return (
      <div className="relative flex w-full items-center">

        {isLeft ? (
          <>
            <div className="w-1/2 pr-10 flex justify-end">
              <TimelineCard item={item} darkMode={darkMode} align="right" />
            </div>
            <div className="w-1/2" />
          </>
        ) : (
          <>
            <div className="w-1/2" />
            <div className="w-1/2 pl-10">
              <TimelineCard item={item} darkMode={darkMode} align="left" />
            </div>
          </>
        )}


        {/* DOT */}
        <div className ="
        absolute left-1/2 transform -translate-x-1/2
        w-4 h-4 bg-purple-500 rounded-full
        shadow-[0_0_20px_#a855f7] animate-pulse
        "></div>

      </div>
    );
}

function TimelineCard({ item, darkMode, align }) {
  return (
    <div 
      className = {`
        w-full max-w-xl p-6 rounded-xl border transition-all duration-300
        hover:scale-105 hover:shadow-[0_0_20px_#a855f7]
        ${darkMode
          ? "bg-white/5 border-white/10"
          : "bg-black/5 border-black/10"
        }
        ${align === "left" ? "text-right" : "text-left"}
      `}
    >
      <h3 className = "text-2xl font-bold text-purple-400">
        {item.role}
      </h3>

      <p className = "text-base opacity-70">
        {item.company} • {item.date}
      </p>

      <ul>
        {item.description.map((desc, i) => (
           <li key = {i}>• {desc}</li>
        ))}
      </ul>
    </div>
  )
}

function ProjectCard({ project, darkMode }) {
  return (
    <div className = {`
    rounded-xl overflow-hidden border flex min-h-[250px]
    transition-all duration-300 group
    hover:scale-[1.02] hover:shadow-[0_0_20px_#a855f7]
    group hover:-translate-y-1
    bg-gradient-to-br from-white/5 to-transparent
    ${darkMode
      ? "bg-white/5 border-white/10"
      : "bg-black/5 border-black/10"
    }`}>

        {/* LEFT */}
        <div className = "w-1/2 border-r border-white/10">
          <img src = {project.img} alt = {project.title}  className = "w-full h-full object-cover bg-black/20"/>
        </div>

        {/* RIGHT */}
        <div className = "w-1/2 p-6 flex flex-col justify-center gap-4">
          <h2 className = "text-2xl font-bold group-hover:text-purple-400 transition">{project.title}</h2>
            <div className = "flex flex-wrap gap-2 items-center">
            {project.technologies.map((techonology, index) => (
              <div key = {index} className = "flex px-4 py-2 rounded-full border gap-2" style = {{backgroundColor: techonology.color}}>
                <img src = {techonology.icon} className = "w-5 h-5"/>
                <span className = "text-sm">{techonology.name}</span>
              </div> 
            ))}
            </div>

            <div className = "text-sm opacity-70">
              <p>{project.description}</p>
            </div>
            
            <div className = "flex justify-start gap-4 border-t pt-3 mt-3">
              <IconButton
              href = {project.links.demo}
              icon = {FaLink}
              darkMode = {darkMode}
              />
              <IconButton
              href = {project.links.repo}
              icon = {FaGithub}
              darkMode = {darkMode}
              />
            </div>

            
        </div>
    </div>
  );
}

function ProjectsPanel({ darkMode }) {
  return (
    <div className = "grid grid-cols-1 gap-6 max-w-5xl mx-auto">

      {projects.map((project) => (
        <ProjectCard
        key = {project.id}
        project = {project}
        darkMode = {darkMode} />
      ))}
    </div>
  );
}

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="
        w-full max-w-md p-6 rounded-2xl
        border border-white/10
        bg-[#0f0a1f]
        shadow-[0_0_40px_rgba(168,85,247,0.3)]
        relative
      ">

        {/* CLOSE */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-2">
          ¡Hola 👋!
        </h2>

        <p className="text-sm opacity-70 mb-6">
          Rellena el formulario y pronto tendras mi repuesta 😁 
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            emailjs.sendForm(
              "service_jk5ztzp",
              "template_kxjjndg",
              e.target,
              "DWVqBbequAhd6m7Mf"
            )
            .then(() => {
              alert("Mensaje enviado 🚀");
              onClose();
            })
            .catch(() => {
              alert("Error al enviar ❌");
            });
          }}
          className="flex flex-col gap-4"
        >

          <div>
            <label className="text-sm">Nombre</label>
            <input
              name = "name"
              type="text"
              placeholder="Tu nombre"
              className="w-full mt-1 p-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:border-purple-400"
            />
          </div>

          <div>
            <label className="text-sm">Email</label>
            <input
              name = "email"
              type="email"
              placeholder="tu@email.com"
              className="w-full mt-1 p-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:border-purple-400"
            />
          </div>

          <div>
            <label className="text-sm">Mensaje</label>
            <textarea
              name = "message"
              rows="4"
              placeholder="¿En qué puedo servirte?"
              className="w-full mt-1 p-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:border-purple-400"
            />
          </div>

          <button
            type="submit"
            className="
              mt-4 py-3 rounded-lg font-semibold
              bg-purple-500
              hover:bg-purple-600
              shadow-[0_0_20px_#a855f7]
              transition
            "
          >
            Enviar mensaje
          </button>

        </form>

      </div>
    </div>
  );
}

function App() {

  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsContactOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  useEffect(() => {
  localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={`
      relative min-h-screen
      ${darkMode ? "bg-[#0f0a1f] text-white" : "bg-[#f3e8ff] text-black"}
    `}>
      
      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 w-[600px] h-[600px] bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-200px] right-1/2 w-[600px] h-[600px] bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>
      </div>
      <div className = "absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key = {i}
            className = "absolute  bg-purple-400 rounded-full  animate-float"
            style = {{
              top: `${2 + Math.random() * 100}%`,
              left: `${2 + Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              animationDuration: `${6 + Math.random() * 10}s`,
              filter: `blur(${Math.random() * 2}px)`
            }}
          />
        ))}
      </div>
      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="pt-20 flex flex-col gap-32">

        <section id="home">
          <Home darkMode={darkMode} onOpenContact = {() => setIsContactOpen(true)}/>
        </section>

        <section id="inventory">
          <Inventory darkMode={darkMode} />
        </section>

        <section id="quests">
          <Projects darkMode = {darkMode}/>
        </section>

        <section id="achievements">
          <Aboutme />
        </section>

      </div>
    <ContactModal 
      isOpen={isContactOpen} 
      onClose={() => setIsContactOpen(false)} 
    />
    </div>
  );
}

export default App;