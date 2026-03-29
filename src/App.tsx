import "./App.css";

const projects = [
  {
    title: "ReadZen - Hackathon ZENDOK",
    description:
      "Solution intelligente pour la gestion et l’analyse de documents avec OCR, résumé automatique et accessibilité.",
    tech: "Flask, Python, OCR, IA",
  },
  {
    title: "NutriFit API",
    description:
      "API REST développée avec FastAPI pour une application de nutrition et fitness avec authentification JWT.",
    tech: "FastAPI, MySQL, SQLAlchemy, JWT",
  },
  {
    title: "Dashboard Feedback AI",
    description:
      "Application d’analyse de feedback client avec traitement de données et visualisation.",
    tech: "Python, Pandas, Flask",
  },
];

const skills = [
  "Python",
  "SQL",
  "FastAPI",
  "Flask",
  "MySQL",
  "MongoDB",
  "Airflow",
  "Docker",
  "GitHub",
  "React",
];

function App() {
  return (
    <div className="page">
      <div className="container">
        <section className="hero-card">
          <div className="hero-top">
            <div className="icon-box">💼</div>

            <div>
              <h1>Portfolio</h1>
              <a
                href="https://github.com/MhandAMRANE"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/MhandAMRANE
              </a>
            </div>
          </div>

          <div className="hero-content">
            <p className="name">M'HAND AMRANE</p>
            <h2>Data Engineer | AI & Big Data</h2>
            <p className="intro">
              Étudiant en Master Data Engineering à l’Université de Corse,
              passionné par les pipelines de données, les API, l’intelligence
              artificielle et les systèmes d’information.
            </p>

            <div className="buttons">
              <a
                className="btn btn-dark"
                href="https://github.com/MhandAMRANE"
                target="_blank"
                rel="noreferrer"
              >
                Voir mon GitHub
              </a>

              <a className="btn btn-light" href="mailto:mhandamrane25@gmail.com">
                Me contacter
              </a>
            </div>
          </div>
        </section>

        <div className="grid">
          <section className="card">
            <h3>Projets</h3>

            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <span>{project.tech}</span>
              </div>
            ))}
          </section>

          <div className="right-column">
            <section className="card">
              <h3>Compétences</h3>

              <div className="skills">
                {skills.map((skill, index) => (
                  <span className="skill" key={index}>
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="card">
              <h3>Formation</h3>

              <div className="education-item">
                <strong>2025 - 2026</strong>
                <p>Master Data Engineering</p>
                <p>Université de Corse</p>
              </div>

              <div className="education-item">
                <strong>2023 - 2025</strong>
                <p>Master Systèmes d’Information Avancés</p>
                <p>Université de Béjaïa</p>
              </div>

              <div className="education-item">
                <strong>2020 - 2023</strong>
                <p>Licence Informatique</p>
                <p>Université de Béjaïa</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;