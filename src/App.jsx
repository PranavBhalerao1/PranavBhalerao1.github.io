import './index.css'

const externalLinks = {
  research: '#research-projects',
  github: 'https://github.com/PranavBhalerao1',
  linkedin: 'https://www.linkedin.com/in/pranav-bhalerao/',
  email: 'mailto:pranav@pranavbhalerao.me',
}

const projects = [
  {
    title: 'Understanding Neural Representations',
    description:
      'Research exploring how Transformer and Conformer models learn internal representations through probing, statistical analysis, and large-scale experiments.',
    bullets: [
      'Studied representation learning across 24 Transformer and Conformer models',
      'Built analysis pipelines across 50,000+ samples',
      'Produced visualizations to understand architecture-dependent processing strategies',
    ],
    links: [
      { label: 'Paper', href: '#' },
      { label: 'Code', href: '#' },
    ],
  },
  {
    title: 'Marathi Literature Lexicon',
    description:
      'A language preservation project building structured lexical resources for Marathi literature, making dialect-heavy and historical vocabulary more accessible.',
    bullets: [],
    links: [
      { label: 'Website', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
]

function App() {
  return (
    <>
      <div className="ambient-glow" aria-hidden="true" />
      <main className="layout">
        <section className="hero section" id="top">
          <p className="eyebrow">Pranav Bhalerao</p>
          <h1>AI Researcher · Builder</h1>
          <p className="hero-copy">
            I study how intelligent systems learn, represent information, and interact with language.
          </p>
          <p className="hero-subcopy">Stanford freshman studying Mathematics and Computer Science.</p>
          <nav className="button-row" aria-label="Primary links">
            <a href={externalLinks.research}>Research</a>
            <a href={externalLinks.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={externalLinks.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={externalLinks.email}>Email</a>
          </nav>
        </section>

        <section className="section" id="research-projects">
          <div className="section-heading">
            <h2>Research &amp; Projects</h2>
          </div>
          <div className="grid cards">
            {projects.map((project) => (
              <article className="card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.bullets.length > 0 && (
                  <ul>
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
                <div className="inline-links">
                  {project.links.map((link) => (
                    <a key={link.label} href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <h2>Publications</h2>
          </div>
          <article className="card publication-card">
            <h3>Understanding Representation Learning in Transformer and Conformer Models</h3>
            <dl>
              <div>
                <dt>Venue</dt>
                <dd>EMNLP 2026 Main Conference</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>Co-first author</dd>
              </div>
            </dl>
            <div className="inline-links">
              <a href="#">Paper</a>
              <a href="#">Code</a>
            </div>
          </article>
        </section>

        <section className="section about-grid">
          <article>
            <div className="section-heading">
              <h2>About</h2>
            </div>
            <p>
              I&apos;m a freshman at Stanford University studying Mathematics and Computer Science.
            </p>
            <p>
              My interests lie at the intersection of machine learning, language, and understanding
              how intelligent systems learn.
            </p>
            <p>Currently exploring:</p>
            <ul>
              <li>Neural representations</li>
              <li>Natural language processing</li>
              <li>AI interpretability</li>
              <li>Language technologies</li>
            </ul>
          </article>

          <article className="card currently-card">
            <div className="section-heading">
              <h2>Currently</h2>
            </div>
            <ul className="currently-list">
              <li>
                <span>📍 Stanford University</span>
                <p>Studying Mathematics and Computer Science</p>
              </li>
              <li>
                <span>🧠 Research:</span>
                <p>Machine learning, representation learning, and language models</p>
              </li>
              <li>
                <span>📚 Exploring:</span>
                <p>AI systems, interpretability, and NLP</p>
              </li>
            </ul>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <a href={externalLinks.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={externalLinks.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={externalLinks.email}>Email</a>
      </footer>
    </>
  )
}

export default App
