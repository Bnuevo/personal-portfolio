import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { biography, composeEmail, profile, projects, routeFromHash, routes } from './content.js';
import './styles.css';

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

const dimensions = {
  'github.svg': [43.0005, 46.0536], 'linkedin.svg': [44, 42], 'instagram.svg': [44, 44],
  'menu-line.svg': [40, 5], 'contact-button.svg': [650, 160],
  'nav-about.svg': [1508, 88], 'nav-projects.svg': [1508, 88], 'nav-contact.svg': [1508, 88],
  'collage-horizontal.svg': [600, 1], 'collage-vertical.svg': [380, 1], 'project-divider.svg': [520, 1],
};
function Art({ name }) {
  const ref = useRef(null);
  const [scale, setScale] = useState(1);
  const [width, height] = dimensions[name];
  useLayoutEffect(() => {
    const observer = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / width));
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [width]);
  return <span className="art" ref={ref} style={{ aspectRatio: `${width} / ${height}` }}><img src={asset(name)} alt="" style={{ transform: `scale(${scale})` }} /></span>;
}

function SocialLinks({ home = false }) {
  const links = home ? ['linkedin', 'github'] : ['github', 'linkedin', 'instagram'];
  return <div className={`social-links ${home ? 'home-socials' : ''}`} aria-label="Social profiles">
    {links.map(name => profile[name] ? <a key={name} href={profile[name]} target="_blank" rel="noreferrer" aria-label={`Brian Nuevo on ${name === 'github' ? 'GitHub' : 'LinkedIn'}`}><Art name={`${name}.svg`} /></a> : <span key={name} className="unavailable-social" role="img" aria-label="Instagram profile coming soon" title="Instagram profile coming soon"><Art name={`${name}.svg`} /></span>)}
  </div>;
}

function Navigation({ page }) {
  return <nav className={`navigation navigation-${page}`} aria-label="Main navigation">
    <div className="nav-art" aria-hidden="true"><Art name={`nav-${page}.svg`} /></div>
    {routes.map(route => <a href={`#${route}`} key={route} aria-current={page === route ? 'page' : undefined}>{route[0].toUpperCase() + route.slice(1)}</a>)}
  </nav>;
}

function Home() {
  const [open, setOpen] = useState(true);
  return <main id="main-content" className="screen home" data-node-id="610:17" tabIndex="-1">
    <div className="hero-image"><img src={asset('monkeyrock.png')} alt="Rocky Northern California landscape at sunset" /></div>
    <h1 className="hero-name">BRIAN<br />NUEVO</h1>
    <a className="hero-contact" href="#contact"><div className="button-art" aria-hidden="true"><Art name="contact-button.svg" /></div><span>Contact Me</span></a>
    <aside className="home-sidebar">
      <button className="menu-toggle" aria-expanded={open} aria-controls="home-menu" onClick={() => setOpen(!open)}><span className="menu-icon" aria-hidden="true">{[0, 1, 2].map(i => <span key={i}><Art name="menu-line.svg" /></span>)}</span>Menu</button>
      <div id="home-menu" hidden={!open}>
        <nav className="home-links" aria-label="Main navigation"><a href="#about">About Me</a><a href="#projects">Projects</a><a href="#contact">Find me</a></nav>
        <SocialLinks home />
      </div>
    </aside>
  </main>;
}

function About() {
  return <main id="main-content" className="screen about" data-node-id="611:48" tabIndex="-1">
    <Navigation page="about" />
    <h1 className="page-title">ABOUT ME</h1>
    <div className="about-layout">
      <div className="photo-collage" role="img" aria-label="Photo collage reserved for Brian’s personal photos">
        <span className="collage-line horizontal"><Art name="collage-horizontal.svg" /></span>
        <span className="collage-line vertical"><Art name="collage-vertical.svg" /></span>
      </div>
      <div className="about-copy"><p>{biography}</p><h2>SKILLS</h2><ul className="skills-list">{['PostgreSQL', 'Python', 'Snowflake', 'Informatica', 'Apache Airflow', 'dbt'].map(skill => <li key={skill}>{skill}</li>)}</ul></div>
    </div>
  </main>;
}

function ResumeLink({ className = '', children = 'RESUME' }) {
  return profile.resume ? <a className={className} href={profile.resume} target="_blank" rel="noreferrer">{children}</a> : <button className={className} type="button" disabled title="Updated resume coming soon">{children}<span className="pending-label">Updated resume coming soon</span></button>;
}

function Projects() {
  return <main id="main-content" className="screen projects" data-node-id="611:146" tabIndex="-1">
    <Navigation page="projects" />
    <div className="projects-intro"><h1 className="projects-title">PROJECTS</h1><p>Green behind the ears here are some of my highlights from Machine Learning to Database Design</p><div className="project-actions"><ResumeLink className="gold-button" /><a className="gold-button" href={profile.github} target="_blank" rel="noreferrer">GitHub</a></div></div>
    <aside className="project-contents"><h2>Table of Contents</h2>{projects.map((project, i) => <article key={project.id} id={project.id}>
      <h3>{project.url ? <a href={project.url} target="_blank" rel="noreferrer">{project.title}</a> : project.title}</h3><p>{project.description}</p>
      {i < projects.length - 1 && <div className="project-divider" aria-hidden="true"><Art name="project-divider.svg" /></div>}
    </article>)}</aside>
  </main>;
}

function ContactForm() {
  const [prepared, setPrepared] = useState(false);
  function submit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    window.location.href = composeEmail(data);
    setPrepared(true);
  }
  return <section className="contact-card" aria-labelledby="contact-form-heading"><h2 id="contact-form-heading">Contact Form</h2><form onSubmit={submit}>
    <label htmlFor="contact-name">Name<input id="contact-name" name="name" autoComplete="name" required maxLength={100} /></label>
    <label htmlFor="contact-email">Email<input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} /></label>
    <label htmlFor="contact-message">Message<textarea id="contact-message" name="message" rows={3} required maxLength={4000} /></label>
    <button className="email-button" type="submit">Compose email <span aria-hidden="true">↗</span></button>
    <p className="form-note" role="status">{prepared ? 'Your email app should open with a draft. If it doesn’t, use the email link below.' : 'Opens your email app with your message ready to send.'}</p>
    <a className="direct-email" href={`mailto:${profile.email}`}>{profile.email}</a>
  </form></section>;
}

function Contact() {
  return <main id="main-content" className="screen contact" data-node-id="611:109" tabIndex="-1">
    <Navigation page="contact" /><h1 className="page-title">FIND ME</h1>
    <div className="contact-layout"><div className="resume-column"><div className="resume-card"><h2>RESUME</h2>{profile.resume ? <a className="resume-preview" href={profile.resume} target="_blank" rel="noreferrer" aria-label="Open Brian Nuevo’s resume PDF"><img src={asset('resume-preview.png')} alt="Preview of Brian Nuevo’s resume" /><span>View resume PDF ↗</span></a> : <p>Updated resume coming soon.</p>}</div><SocialLinks /></div><ContactForm /></div>
  </main>;
}

function App() {
  const [page, setPage] = useState(() => routeFromHash(window.location.hash));
  const initial = useRef(true);
  useEffect(() => {
    const update = () => setPage(routeFromHash(window.location.hash));
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  useEffect(() => {
    document.title = `${page === 'home' ? 'Brian Nuevo' : page[0].toUpperCase() + page.slice(1) + ' | Brian Nuevo'} | Software Engineer`;
    window.scrollTo(0, 0);
    if (!initial.current) document.getElementById('main-content')?.focus({ preventScroll: true });
    initial.current = false;
  }, [page]);
  const Screen = { home: Home, about: About, projects: Projects, contact: Contact }[page];
  return <><a className="skip-link" href="#main-content" onClick={event => { event.preventDefault(); document.getElementById('main-content')?.focus(); }}>Skip to content</a><Screen /></>;
}

createRoot(document.getElementById('root')).render(<App />);
