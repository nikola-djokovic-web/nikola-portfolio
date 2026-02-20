import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Languages, Linkedin, Mail } from "lucide-react";
import { projects } from "./data/experience";

const content = {
  en: {
    role: "Frontend Developer",
    headline: "Nikola Đoković",
    intro:
      "I build modern, fast, and clear web applications with a strong focus on UX, component architecture, and long-term maintainability.",
    focus:
      "Focus: React, Vue.js, TypeScript, design-system thinking, and production performance.",
    navAbout: "About Me",
    aboutLead:
      "I develop web products that feel modern, clear, and easy to use. My focus is high-quality UX, readable code, and architecture that helps teams scale without slowing down.",
    aboutBody:
      "From concept to implementation, I combine engineering precision with design thinking. I bring the most value when existing frontend quality needs to be raised while shipping new features quickly.",
    stats: [
      { value: "4+", label: "Years of experience" },
      { value: "20+", label: "Production features delivered" },
      { value: "2", label: "Primary frontend stacks" },
    ],
    projectsTitle: "Selected Projects",
    skillsTitle: "Skills & Workflow",
    frontend: "Frontend",
    tools: "Tools",
    workflow: "How I Work",
    workflowItems: [
      "Component architecture",
      "UI consistency",
      "Performance",
      "Code review",
    ],
    contactTitle: "Let’s Build Something",
    contactText:
      "I am open to frontend roles and product collaborations where quality, speed, and user experience are important.",
    sendEmail: "Send Email",
    language: "English",
    switchLanguage: "Switch to Serbian",
    projectText: {
      1: {
        description:
          "Application for creating and validating electronic invoices using the XRechnung standard.",
        details:
          "Implemented PDF visualization and a configuration wizard to automate key workflows.",
      },
      2: {
        description:
          "Centralized master-data management platform with DATEV integration.",
        details:
          "Built complex multi-step forms and a digital-signature workflow system.",
      },
    },
  },
  sr: {
    role: "Frontend Developer",
    headline: "Nikola Đoković",
    intro:
      "Gradim moderne, brze i pregledne web aplikacije sa fokusom na UX, arhitekturu komponenti i dugoročno održiv frontend.",
    focus:
      "Fokus: React, Vue.js, TypeScript, dizajn-sistem pristup i performanse produkcionih aplikacija.",
    navAbout: "O meni",
    aboutLead:
      "Razvijam web proizvode koji su moderni, jasni i laki za korišćenje. Fokus mi je na kvalitetnom UX-u, čitljivom kodu i arhitekturi koja omogućava timovima da skaliraju bez usporavanja razvoja.",
    aboutBody:
      "Od koncepta do implementacije kombinujem inženjersku preciznost i dizajn razmišljanje. Najviše doprinosim tamo gde treba podići kvalitet postojećeg frontenda i ubrzati isporuku novih funkcionalnosti.",
    stats: [
      { value: "4+", label: "Godine iskustva" },
      { value: "20+", label: "Funkcionalnosti u produkciji" },
      { value: "2", label: "Glavna frontend steka" },
    ],
    projectsTitle: "Izdvojeni projekti",
    skillsTitle: "Veštine i način rada",
    frontend: "Frontend",
    tools: "Alati",
    workflow: "Kako radim",
    workflowItems: [
      "Arhitektura komponenti",
      "Konzistentan UI",
      "Performanse",
      "Code review",
    ],
    contactTitle: "Hajde da napravimo nešto dobro",
    contactText:
      "Otvoren sam za frontend pozicije i saradnju na proizvodima gde su bitni kvalitet, brzina i dobar korisnički doživljaj.",
    sendEmail: "Pošalji email",
    language: "Srpski",
    switchLanguage: "Prebaci na engleski",
    projectText: {
      1: {
        description:
          "Aplikacija za kreiranje i validaciju elektronskih faktura po XRechnung standardu.",
        details:
          "Implementacija PDF vizuelizacije i konfiguracionog wizarda za automatizaciju.",
      },
      2: {
        description:
          "Centralizovano upravljanje matičnim podacima sa DATEV integracijom.",
        details:
          "Razvoj kompleksnih multi-step formi i sistema za digitalno potpisivanje.",
      },
    },
  },
};

const skills = {
  frontend: ["React", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  tools: ["Git", "Vite", "REST API", "Copilot", "Figma"],
};

const sectionReveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" },
};

export default function App() {
  const [language, setLanguage] = useState("en");
  const t = content[language];

  const localizedProjects = useMemo(() => {
    return projects.map((project) => ({
      ...project,
      description:
        t.projectText[project.id]?.description ?? project.description,
      details: t.projectText[project.id]?.details ?? project.details,
    }));
  }, [t]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="max-w-6xl mx-auto pt-12 px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 pb-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
              {t.role}
            </p>
            <button
              type="button"
              onClick={() =>
                setLanguage((prev) => (prev === "en" ? "sr" : "en"))
              }
              className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-slate-700/90 bg-slate-900/80 px-3 py-2 text-sm font-semibold text-slate-100 shadow-lg shadow-slate-950/40 backdrop-blur transition-colors hover:border-cyan-400/60 hover:text-cyan-200"
              aria-label={t.switchLanguage}
              title={t.switchLanguage}
            >
              <Languages size={16} />
              <span>{language === "en" ? "🇬🇧" : "🇷🇸"}</span>
              <span>{t.language}</span>
            </button>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight max-w-4xl">
            {t.headline}
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed">
            {t.intro}
          </p>
          <p className="max-w-2xl text-slate-400 leading-relaxed">{t.focus}</p>
          <div className="flex items-center gap-3 text-slate-300">
            <a
              href="mailto:nikoladokovic.dev@gmail.com"
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400/60 hover:text-cyan-300 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400/60 hover:text-cyan-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400/60 hover:text-cyan-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </motion.div>
      </header>

      <main className="max-w-6xl mx-auto px-6 md:px-8 pb-24 space-y-24">
        <motion.section
          id="about"
          {...sectionReveal}
          className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 md:p-12 shadow-xl shadow-slate-950/40"
        >
          <AboutSection t={t} />
        </motion.section>

        <motion.section
          id="experience"
          {...sectionReveal}
          className="space-y-8"
        >
          <ExperienceSection t={t} projects={localizedProjects} />
        </motion.section>

        <motion.section
          id="skills"
          {...sectionReveal}
          className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 md:p-12 shadow-xl shadow-slate-950/40"
        >
          <SkillsSection t={t} />
        </motion.section>

        <motion.section
          id="contact"
          {...sectionReveal}
          className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 to-slate-900/80 p-8 md:p-12 shadow-xl shadow-cyan-500/10"
        >
          <ContactSection t={t} />
        </motion.section>
      </main>
    </div>
  );
}

function AboutSection({ t }) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {t.navAbout}
      </h2>
      <p className="w-full text-slate-300 leading-relaxed text-lg text-justify">
        {t.aboutLead}
      </p>
      <p className="w-full text-slate-400 leading-relaxed text-justify">
        {t.aboutBody}
      </p>
      <div className="grid gap-4 sm:grid-cols-3 pt-2">
        {t.stats.map((item, index) => (
          <StatCard
            key={item.label}
            value={item.value}
            label={item.label}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function ExperienceSection({ t, projects }) {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {t.projectsTitle}
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

function SkillsSection({ t }) {
  return (
    <div className="space-y-7">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {t.skillsTitle}
      </h2>
      <SkillGroup title={t.frontend} items={skills.frontend} />
      <SkillGroup title={t.tools} items={skills.tools} />
      <SkillGroup title={t.workflow} items={t.workflowItems} />
    </div>
  );
}

function ContactSection({ t }) {
  return (
    <div className="space-y-5">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {t.contactTitle}
      </h2>
      <p className="text-slate-300 max-w-2xl leading-relaxed text-justify">
        {t.contactText}
      </p>
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href="mailto:nikoladokovic.dev@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-400/20 text-cyan-200 border border-cyan-400/40 font-semibold hover:bg-cyan-400/30 transition-colors"
        >
          <Mail size={18} />
          {t.sendEmail}
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 bg-slate-900 text-slate-200 font-semibold hover:border-cyan-400/60 hover:text-cyan-300 transition-colors"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>
      </div>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-5"
    >
      <p className="text-2xl font-black tracking-tight text-cyan-300">
        {value}
      </p>
      <p className="text-sm text-slate-400 mt-1 text-justify">{label}</p>
    </motion.div>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.35,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            className="px-3 py-1 bg-slate-800 text-slate-200 rounded-lg text-sm font-medium border border-slate-700"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 44, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className="p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all group"
    >
      <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
        {project.company}
      </span>
      <h3 className="text-xl font-bold mt-2 flex items-center justify-between gap-3">
        {project.title}
        <ExternalLink
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          size={20}
        />
      </h3>
      <p className="text-slate-300 mt-4 text-sm leading-relaxed text-justify">
        {project.description}
      </p>
      <p className="text-slate-400 mt-3 text-sm leading-relaxed text-justify">
        {project.details}
      </p>
      <div className="flex flex-wrap gap-2 mt-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-slate-950 text-slate-300 rounded-lg text-xs font-semibold border border-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
