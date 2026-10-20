import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Mail,
  Menu,
  X,
  Database,
  Monitor,
  Terminal,
  User,
} from "lucide-react";

const skills = [
  { name: "Java", level: "Programación", icon: Code2 },
  { name: "Python", level: "Programación", icon: Terminal },
  { name: "React", level: "Desarrollo web", icon: Code2 },
  { name: "TypeScript", level: "Desarrollo web", icon: Code2 },
  { name: "Node.js", level: "Backend", icon: Terminal },
  { name: "HTML5", level: "Frontend", icon: Monitor },
  { name: "CSS3", level: "Diseño web", icon: Monitor },
  { name: "MySQL", level: "Bases de datos", icon: Database },
];

const projects = [
  {
    number: "01",
    title: "NOVA GYM",
    category: "Aplicación de escritorio · Java",
    description:
      "Sistema de gestión para un gimnasio con módulos para clases grupales, socios, parqueo y espacios recreativos. Desarrollado con Java y una interfaz gráfica.",
    tags: ["Java", "Swing", "POO"],
    icon: "🏋️",
  },
  {
    number: "02",
    title: "Tienda virtual",
    category: "Desarrollo web · Spring Boot",
    description:
      "Aplicación web orientada a la presentación de productos, promociones y servicios, con una interfaz organizada y adaptable a diferentes dispositivos.",
    tags: ["Java", "Spring Boot", "Thymeleaf"],
    icon: "🛍️",
  },
  {
    number: "03",
    title: "Sistema de reservas",
    category: "Aplicación web · CRUD",
    description:
      "Proyecto de gestión de reservas que permite registrar, consultar, editar y eliminar información utilizando una arquitectura organizada y una base de datos.",
    tags: ["PHP", "MySQL", "MVC"],
    icon: "📅",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#inicio" className="logo" onClick={closeMenu}>
          PS<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#inicio" onClick={closeMenu}>Inicio</a>
          <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
          <a href="#habilidades" onClick={closeMenu}>Habilidades</a>
          <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
          <a href="#contacto" className="nav-contact" onClick={closeMenu}>
            Contacto <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero section-container">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              Estudiante de Ingeniería en Sistemas
            </div>

            <p className="eyebrow">HOLA, SOY</p>

            <h1>
              María Paula
              <br />
              <span>Steller.</span>
            </h1>

            <h2>
              Desarrollo soluciones digitales
              <br className="desktop-break" /> con tecnología y creatividad.
            </h2>

            <p className="hero-description">
              Me apasiona la programación, el desarrollo de software y la
              creación de experiencias digitales. Estoy en constante
              aprendizaje y busco oportunidades para transformar mis
              conocimientos en soluciones reales.
            </p>

            <div className="hero-actions">
              <a href="#proyectos" className="button button-primary">
                Ver mis proyectos <ArrowUpRight size={18} />
              </a>

              <a href="#contacto" className="button button-secondary">
                Contactarme
              </a>
            </div>

            <a href="#sobre-mi" className="scroll-indicator">
              <ArrowDown size={16} />
              DESCUBRE MÁS
            </a>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="code-window">
              <div className="window-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="window-title">developer.ts</span>
              </div>

              <div className="code-content">
                <p><span className="line-number">01</span> <span className="code-purple">const</span> developer = {"{"}</p>
                <p><span className="line-number">02</span> &nbsp; name: <span className="code-green">"María Paula"</span>,</p>
                <p><span className="line-number">03</span> &nbsp; career: <span className="code-green">"Systems Engineering"</span>,</p>
                <p><span className="line-number">04</span> &nbsp; skills: [</p>
                <p><span className="line-number">05</span> &nbsp;&nbsp; <span className="code-orange">"Java"</span>, <span className="code-orange">"Python"</span>,</p>
                <p><span className="line-number">06</span> &nbsp;&nbsp; <span className="code-orange">"React"</span>, <span className="code-orange">"TypeScript"</span></p>
                <p><span className="line-number">07</span> &nbsp; ],</p>
                <p><span className="line-number">08</span> &nbsp; mindset: <span className="code-green">"Always learning"</span>,</p>
                <p><span className="line-number">09</span> &nbsp; motivated: <span className="code-purple">true</span></p>
                <p><span className="line-number">10</span> {"}"};</p>
                <p className="code-comment">// Ready to build something great.</p>
              </div>

              <div className="window-footer">
                <span><span className="status-dot"></span> Disponible para aprender</span>
                <span>UTF-8</span>
              </div>
            </div>

            <div className="floating-card card-top">
              <Code2 size={20} />
              <div>
                <strong>Clean code</strong>
                <span>Código organizado</span>
              </div>
            </div>

            <div className="floating-card card-bottom">
              <span className="floating-emoji">✦</span>
              <div>
                <strong>Growth mindset</strong>
                <span>Aprendizaje constante</span>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="about section-container">
          <div className="section-heading">
            <span className="section-label">01 / SOBRE MÍ</span>
            <h2>Curiosidad que se convierte en <span>soluciones.</span></h2>
          </div>

          <div className="about-grid">
            <div className="about-icon">
              <img
                src="/images/perfil.jpg"
                className="profile-photo"
              />
            </div>

            <div className="about-text">
              <p>
                Soy estudiante de <strong>Ingeniería en Sistemas</strong>,
                con interés en el desarrollo de software, las bases de datos
                y las tecnologías web.
              </p>

              <p>
                Mi formación me ha permitido desarrollar habilidades en
                programación, resolución de problemas y creación de
                aplicaciones. También cuento con experiencia en ventas y
                atención al cliente, que me ha ayudado a fortalecer mi
                comunicación, responsabilidad y trabajo en equipo.
              </p>

              <p>
                Mi objetivo es seguir creciendo profesionalmente, aprender
                nuevas tecnologías y contribuir con soluciones útiles,
                funcionales y bien diseñadas.
              </p>

              <div className="about-highlights">
                <div>
                  <span className="highlight-symbol">↗</span>
                  <span>Aprendizaje continuo</span>
                </div>
                <div>
                  <span className="highlight-symbol">↗</span>
                  <span>Resolución de problemas</span>
                </div>
                <div>
                  <span className="highlight-symbol">↗</span>
                  <span>Trabajo en equipo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="habilidades" className="skills-section">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-label">02 / HABILIDADES</span>
              <h2>Herramientas para <span>crear.</span></h2>
              <p>
                Tecnologías que forman parte de mi aprendizaje y desarrollo
                profesional.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <article className="skill-card" key={skill.name}>
                    <div className="skill-icon">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3>{skill.name}</h3>
                    <p>{skill.level}</p>
                    <span className="skill-arrow">
                      <ArrowUpRight size={17} />
                    </span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="proyectos" className="projects-section section-container">
          <div className="section-heading">
            <span className="section-label">03 / PROYECTOS</span>
            <h2>Ideas convertidas en <span>código.</span></h2>
            <p>
              Una selección de proyectos académicos y personales en los que
              he aplicado mis conocimientos.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>

                <div className="project-icon">{project.icon}</div>

                <div className="project-information">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <a
                  href="#contacto"
                  className="project-link"
                  aria-label={`Consultar sobre ${project.title}`}
                >
                  <ArrowUpRight size={23} />
                </a>
              </article>
            ))}
          </div>

          <p className="projects-note">
            <Code2 size={16} />
            Próximamente: más proyectos y repositorios de código.
          </p>
        </section>

        <section className="approach-section">
          <div className="section-container approach-content">
            <span className="section-label">MI ENFOQUE</span>
            <h2>
              No se trata solo de escribir código.
              <br />
              Se trata de <span>resolver problemas.</span>
            </h2>

            <div className="approach-grid">
              <div>
                <span>01</span>
                <h3>Analizar</h3>
                <p>Comprender el problema antes de desarrollar una solución.</p>
              </div>
              <div>
                <span>02</span>
                <h3>Construir</h3>
                <p>Crear soluciones claras, funcionales y mantenibles.</p>
              </div>
              <div>
                <span>03</span>
                <h3>Mejorar</h3>
                <p>Aprender de cada proyecto y buscar nuevas oportunidades.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="contact-section section-container">
          <div className="contact-card">
            <span className="section-label">04 / CONTACTO</span>
            <h2>
              ¿Construimos algo
              <br />
              <span>interesante?</span>
            </h2>

            <p>
              Estoy interesada en oportunidades para aprender, colaborar
              y continuar desarrollándome en el mundo de la tecnología.
            </p>

            <a
              href="mail: paula.stelleralvarado2006@gmail.com"
              className="button button-primary"
            >
              <Mail size={18} />
              Escríbeme
              <ArrowUpRight size={18} />
            </a>

            <div className="contact-decoration">{"</>"}</div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#inicio" className="logo">
          PS<span>.</span>
        </a>

        <p>Diseñado y desarrollado con dedicación.</p>

        <div className="footer-socials">
          <a
            href="https://github.com/paulaasteller"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <span className="social-text">GH</span>
          </a>

          <a
            href="https://www.linkedin.com/in/maria-paula-steller-alvarado-b40a37173/?isSelfProfile=true"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <span className="social-text">in</span>
          </a>

          <a
            href="mailto:paula.stelleralvarado2006@gmail.com"
            aria-label="Correo electrónico"
            title="Correo electrónico"
          >
            <Mail size={19} />
          </a>
        </div>

        <span className="footer-copy">
          © {new Date().getFullYear()} · Todos los derechos reservados
        </span>
      </footer>
    </div>
  );
}

export default App;