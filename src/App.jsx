import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Database,
  Download,
  GraduationCap,
  Headphones,
  Laptop,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorCog,
  Moon,
  MousePointerClick,
  Network,
  Phone,
  Printer,
  Search,
  ShieldCheck,
  Sparkles,
  Sun,
  TerminalSquare,
  Users,
  Video,
  Wrench,
  X,
  Layers3,
  Code2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const profile = {
  name: "Samia Boutezrout",
  title: "Technicienne Support Informatique N1/N2",
  target: "CDI Support IT · Helpdesk · Support de proximité",
  location: "Paris · Île-de-France",
  email: "boutezroutsamia@gmail.com",
  phone: "07 61 55 12 41",
  phoneHref: "0761551241",
  photo: "/samia-photo.jpeg",
  cv: "/CV-Samia-Boutezrout.pdf",
  pitch:
    "J’accompagne les utilisateurs avec méthode : écoute, qualification, diagnostic, résolution et suivi clair jusqu’au retour au bon fonctionnement.",
};

const nav = [
  { label: "Accueil", id: "home" },
  { label: "Valeur", id: "value" },
  { label: "Veille", id: "future" },
  { label: "Réalisations", id: "projects" },
  { label: "Expérience", id: "experience" },
  { label: "Stack", id: "stack" },
  { label: "Contact", id: "contact" },
];

const metrics = [
  { value: "N1/N2", label: "Support utilisateurs", icon: Headphones },
  { value: "ITSM", label: "Jira · GLPI · ServiceNow", icon: ClipboardList },
  { value: "O365", label: "Windows · VPN · iPhone", icon: Laptop },
  { value: "FR/EN", label: "Communication fluide", icon: MessageCircle },
];

const valueCards = [
  {
    title: "Support qui rassure",
    icon: Users,
    color: "from-sky-500 to-blue-700",
    text: "Accueil clair, écoute active, vulgarisation technique et accompagnement utilisateur.",
    tags: ["Relationnel", "Pédagogie", "Service"],
  },
  {
    title: "Diagnostic structuré",
    icon: Search,
    color: "from-violet-500 to-fuchsia-600",
    text: "Analyse des symptômes, qualification, tests, priorisation et résolution adaptée.",
    tags: ["Analyse", "Méthode", "Réactivité"],
  },
  {
    title: "Suivi jusqu’à clôture",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-600",
    text: "Traçabilité ticketing, escalade si besoin, vérification et documentation support.",
    tags: ["Ticketing", "Escalade", "Documentation"],
  },
];

const futureTopics = [
  {
    title: "IA pour le support IT",
    subtitle: "Support augmenté",
    icon: Sparkles,
    gradient: "from-blue-600 to-cyan-500",
    description:
      "Utiliser l’IA pour aider à qualifier les tickets, reformuler les réponses utilisateurs, générer des procédures et repérer les incidents récurrents.",
    actions: ["Résumer les tickets longs", "Créer des réponses claires", "Générer des procédures", "Identifier les irritants"],
    docs: [
      { label: "Microsoft Learn IA", href: "https://learn.microsoft.com/fr-fr/ai/" },
      { label: "OpenAI Docs", href: "https://platform.openai.com/docs" },
    ],
    feeds: [
      { label: "Microsoft AI Blog", href: "https://blogs.microsoft.com/ai/feed/" },
    ],
  },
  {
    title: "SSO / MFA",
    subtitle: "Identité & accès",
    icon: ShieldCheck,
    gradient: "from-violet-600 to-fuchsia-600",
    description:
      "Comprendre le Single Sign-On, le MFA et la gestion des identités pour réduire les incidents de connexion et sécuriser les accès utilisateurs.",
    actions: ["Analyser les problèmes de connexion", "Vérifier MFA", "Comprendre les droits", "Orienter vers l’équipe IAM"],
    docs: [
      { label: "Microsoft Entra", href: "https://learn.microsoft.com/fr-fr/entra/" },
      { label: "OWASP MFA", href: "https://cheatsheetseries.owasp.org/cheatsheets/Multifactor_Authentication_Cheat_Sheet.html" },
    ],
    feeds: [
      { label: "Microsoft Security Blog", href: "https://www.microsoft.com/en-us/security/blog/feed/" },
    ],
  },
  {
    title: "Automatisation",
    subtitle: "Moins de répétitif",
    icon: Wrench,
    gradient: "from-emerald-600 to-teal-500",
    description:
      "Automatiser les tâches support répétitives : modèles de réponses, contrôles simples, reporting, création de demandes et standardisation des procédures.",
    actions: ["Templates de réponses", "Checklists de diagnostic", "Reporting support", "Scripts simples"],
    docs: [
      { label: "Power Automate", href: "https://learn.microsoft.com/fr-fr/power-automate/" },
      { label: "PowerShell Docs", href: "https://learn.microsoft.com/fr-fr/powershell/" },
    ],
    feeds: [
      { label: "Power Automate Blog", href: "https://www.microsoft.com/en-us/power-platform/blog/power-automate/feed/" },
    ],
  },
  {
    title: "ITSM & SLA",
    subtitle: "Ticketing structuré",
    icon: ClipboardList,
    gradient: "from-orange-500 to-pink-600",
    description:
      "Améliorer la qualité du support avec des catégories propres, des priorités cohérentes, des SLA lisibles et des tableaux de bord utiles.",
    actions: ["Catégoriser les tickets", "Suivre les SLA", "Créer des tableaux de bord", "Documenter la résolution"],
    docs: [
      { label: "Atlassian ITSM", href: "https://www.atlassian.com/itsm" },
      { label: "ServiceNow Docs", href: "https://docs.servicenow.com/" },
      { label: "GLPI Project", href: "https://glpi-project.org/" },
    ],
    feeds: [
      { label: "Atlassian Blog", href: "https://www.atlassian.com/blog/feed" },
    ],
  },
];

const experiences = [
  {
    company: "8advisory",
    logo: "8A",
    logoSrc: "/8advisory-logo.png",
    logoLabel: "8advisory",
    role: "Technicienne Support HelpDesk IT",
    period: "Octobre 2025 — Avril 2026",
    location: "Paris",
    badge: "Support N2",
    color: "from-blue-600 to-indigo-700",
    summary: "Support technique niveau 2 dans un environnement professionnel exigeant.",
    highlights: [
      "Diagnostic incidents matériels, logiciels, réseau et imprimantes.",
      "Gestion, qualification et suivi des demandes de services.",
      "Assistance de proximité sur site et accompagnement utilisateurs.",
      "Préparation, configuration, déploiement et support des postes.",
      "Support Office 365, VPN, iPhone, salles de visioconférence, Intune, Remote Help.",
    ],
    stack: ["Windows 10", "Office 365", "VPN", "iPhone", "Intune", "Remote Help", "Réseau"],
  },
  {
    company: "Vinci SA",
    logo: "VINCI",
    logoSrc: "/vinci-logo.png",
    logoLabel: "VINCI SA",
    role: "Alternante Technicienne Applicatif Transverse",
    period: "Septembre 2023 — Septembre 2025",
    location: "Nanterre",
    badge: "Support applicatif",
    color: "from-fuchsia-600 to-violet-700",
    summary: "Support N1/N2 applicatif, ticketing, tests fonctionnels et documentation.",
    highlights: [
      "Support utilisateurs sur applications métiers.",
      "Recueil, qualification, suivi et résolution via outil de ticketing.",
      "Analyse des dysfonctionnements fonctionnels et techniques.",
      "Escalade des incidents complexes et suivi jusqu’à résolution.",
      "Tests de non-régression, recettes applicatives et contrôles de fonctionnement.",
      "Rédaction de procédures support et documentation utilisateur.",
    ],
    stack: ["Ticketing", "Applications métiers", "Tests", "Recette", "SQL", "Excel", "Documentation"],
  },
];


const projects = [
  {
    title: "My App Todo",
    type: "Application desktop",
    stack: "C# · WinForms · SQLite",
    icon: Code2,
    gradient: "from-indigo-700 via-blue-700 to-slate-950",
    description: "Application de gestion de tâches avec stockage local, interface simple et suivi des actions utilisateur.",
    points: ["CRUD tâches", "Base SQLite", "Interface WinForms", "Organisation personnelle"],
    link: "#",
  },
  {
    title: "Site vitrine",
    type: "Front-end",
    stack: "React · JavaScript",
    icon: MonitorCog,
    gradient: "from-cyan-600 via-blue-600 to-indigo-800",
    description: "Site vitrine moderne avec composants React, navigation fluide et mise en page responsive.",
    points: ["Responsive", "Composants React", "UX claire", "Design moderne"],
    link: "#",
  },
  {
    title: "ArtSphere",
    type: "Application web",
    stack: "React · Firebase",
    icon: Sparkles,
    gradient: "from-fuchsia-600 via-violet-700 to-slate-950",
    description: "Projet web orienté contenu avec authentification, stockage Firebase et interface interactive.",
    points: ["Firebase", "Authentification", "Contenu dynamique", "Interface interactive"],
    link: "#",
  },
  {
    title: "Gestionnaire des tâches",
    type: "Application web",
    stack: "PHP Laravel · MariaDB · MySQL",
    icon: ClipboardList,
    gradient: "from-red-600 via-orange-600 to-slate-950",
    description: "Application de suivi des tâches avec gestion des données, logique back-end et base relationnelle.",
    points: ["Laravel", "MariaDB", "MySQL", "Gestion utilisateurs"],
    link: "#",
  },
];

const stackGroups = [
  {
    name: "Support",
    icon: Headphones,
    items: [
      "Support N1/N2",
      "Helpdesk",
      "Assistance sur site",
      "Prise en main à distance",
      "Accompagnement utilisateur",
      "Qualification des demandes",
      "Suivi jusqu’à résolution",
      "Communication utilisateur",
    ],
  },
  {
    name: "Postes",
    icon: Laptop,
    items: [
      "Windows 10 / 11",
      "Linux",
      "Préparation postes",
      "Configuration utilisateurs",
      "Déploiement matériel",
      "Maintenance poste de travail",
      "Installation logiciels",
      "Contrôle fonctionnement",
    ],
  },
  {
    name: "Collaboratif",
    icon: Video,
    items: [
      "Microsoft 365",
      "Outlook",
      "Teams",
      "SharePoint",
      "OneDrive",
      "Salles de visioconférence",
      "VPN",
      "iPhone / mobilité",
    ],
  },
  {
    name: "Diagnostic",
    icon: Wrench,
    items: [
      "Incidents matériels",
      "Incidents logiciels",
      "Réseau utilisateur",
      "Imprimantes",
      "Droits d’accès",
      "Analyse des symptômes",
      "Tests de reproduction",
      "Escalade technique",
    ],
  },
  {
    name: "ITSM",
    icon: ClipboardList,
    items: [
      "Jira",
      "GLPI",
      "ServiceNow",
      "Catégorisation tickets",
      "Priorisation",
      "SLA",
      "Base de connaissances",
      "Reporting support",
      "Tableaux de bord",
      "Procédures",
    ],
  },
  {
    name: "Applicatif",
    icon: Database,
    items: [
      "Applications métiers",
      "SAP",
      "Cegid",
      "SIGMA-RH",
      "DocuSign",
      "SQL",
      "Excel avancé",
      "Tests fonctionnels",
      "Recette applicative",
      "Non-régression",
      "Documentation utilisateur",
    ],
  },
];

const strengths = ["Autonomie", "Rigueur", "Réactivité", "Sens du service", "Bon relationnel", "Esprit d’analyse", "Adaptabilité", "Documentation"];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Pill({ children, tone = "light" }) {
  const style =
    tone === "dark"
      ? "bg-white/10 text-white ring-white/15"
      : "bg-white/85 text-slate-700 ring-slate-200 dark:bg-slate-900/80 dark:text-slate-200 dark:ring-white/10";
  return <span className={`inline-flex items-center rounded-full px-3 py-2 text-xs font-black ring-1 ${style}`}>{children}</span>;
}

function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggleTheme}
      className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1 text-sm font-black text-slate-700 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
      aria-label="Changer le thème"
    >
      <span className={`grid h-9 w-9 place-items-center rounded-full transition ${!isDark ? "bg-amber-100 text-amber-700" : "text-slate-400 group-hover:text-amber-300"}`}>
        <Sun className="h-4 w-4" />
      </span>
      <span className={`grid h-9 w-9 place-items-center rounded-full transition ${isDark ? "bg-blue-600 text-white" : "text-slate-400 group-hover:text-blue-700"}`}>
        <Moon className="h-4 w-4" />
      </span>
    </button>
  );
}


function FloatingBadge({ children, delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: [0, -7, 0] }}
      transition={{
        opacity: { duration: 0.35, delay },
        y: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs font-black text-slate-700 shadow-lg shadow-slate-100 backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-slate-100 dark:shadow-black/20"
    >
      {children}
    </motion.span>
  );
}

function SectionHeader({ eyebrow, title, subtitle, icon: Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <span className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white shadow-lg shadow-slate-200 dark:bg-white dark:text-slate-950 dark:shadow-none">
        <Icon className="h-4 w-4" /> {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg font-semibold leading-8 text-slate-600 dark:text-slate-300">{subtitle}</p>}
    </motion.div>
  );
}

function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/75 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/75">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900">
          <img src={profile.photo} alt="Samia Boutezrout" className="h-12 w-12 rounded-2xl object-cover object-center shadow-xl shadow-blue-100 ring-2 ring-white dark:shadow-blue-950/30 dark:ring-white/20" />
          <span className="text-left">
            <span className="block text-sm font-black text-slate-950 dark:text-white">Samia Boutezrout</span>
            <span className="text-xs font-bold text-blue-700 dark:text-cyan-300">Support IT N1/N2</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/80 p-1 shadow-sm dark:border-white/10 dark:bg-white/5 lg:flex">
          {nav.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="rounded-full px-4 py-2 text-sm font-black text-slate-600 transition hover:bg-blue-50 hover:text-blue-800 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-cyan-200">
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <a href={profile.cv} download className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:text-blue-700 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:text-cyan-200">
            CV <Download className="h-4 w-4" />
          </a>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-xl shadow-slate-200 transition hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-white dark:text-slate-950 dark:shadow-none dark:hover:bg-cyan-100">
            Contact <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/5 dark:text-white lg:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="border-t border-slate-100 bg-white px-5 py-4 dark:border-white/10 dark:bg-slate-950 lg:hidden">
            <div className="mb-3 flex justify-end"><ThemeToggle theme={theme} toggleTheme={toggleTheme} /></div>
            {nav.map((item) => (
              <button key={item.id} onClick={() => { scrollTo(item.id); setOpen(false); }} className="block w-full rounded-2xl px-4 py-3 text-left text-sm font-black text-slate-700 hover:bg-blue-50 dark:text-slate-200 dark:hover:bg-white/10">
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero({ theme, toggleTheme }) {
  const [mode, setMode] = useState("recruteur");
  const content = {
    recruteur: { title: "Profil clair, disponible et orienté service.", points: ["CDI support IT", "Paris / Île-de-France", "Français · Anglais courant"], icon: Users },
    manager: { title: "Support structuré pour réduire les irritants utilisateurs.", points: ["Qualification", "Diagnostic", "Suivi", "Documentation"], icon: ShieldCheck },
  };
  const active = content[mode];
  const ActiveIcon = active.icon;

  return (
    <section id="home" className="relative isolate overflow-hidden px-5 py-16 sm:py-24">
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-blue-300 opacity-40 blur-3xl dark:bg-blue-700 dark:opacity-25"
      />
      <motion.div
        animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-24 h-96 w-96 rounded-full bg-fuchsia-300 opacity-30 blur-3xl dark:bg-fuchsia-700 dark:opacity-25"
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, 18, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-200 opacity-30 blur-3xl dark:bg-cyan-700 dark:opacity-15"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-700 ring-1 ring-emerald-100 dark:bg-emerald-400/10 dark:text-emerald-200 dark:ring-emerald-300/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Disponible CDI
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-blue-800 ring-1 ring-blue-100 dark:bg-white/10 dark:text-cyan-200 dark:ring-white/10">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Support IT <span className="bg-gradient-to-r from-blue-600 via-fuchsia-600 to-cyan-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-fuchsia-300 dark:to-blue-300">réactif</span>, humain et carré.
          </h1>

          <p className="mt-6 max-w-2xl text-xl font-semibold leading-9 text-slate-600 dark:text-slate-300">{profile.pitch}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-fuchsia-600 px-7 py-4 font-black text-white shadow-xl shadow-blue-200 transition hover:-translate-y-1 dark:shadow-blue-950/30">
              Me contacter <Mail className="h-5 w-5" />
            </a>
            <button onClick={() => scrollTo("future")} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-black text-slate-900 shadow-xl shadow-slate-100 transition hover:-translate-y-1 hover:text-blue-800 dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-none dark:hover:bg-white/15 dark:hover:text-cyan-200">
              Voir ma veille <MousePointerClick className="h-5 w-5" />
            </button>
            <a href={profile.cv} download className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-black text-slate-900 shadow-xl shadow-slate-100 transition hover:-translate-y-1 hover:text-blue-800 dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-none dark:hover:bg-white/15 dark:hover:text-cyan-200">
              Télécharger CV <Download className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <FloatingBadge delay={0}>⚡ Réactivité</FloatingBadge>
            <FloatingBadge delay={0.25}>🎧 Support N1/N2</FloatingBadge>
            <FloatingBadge delay={0.5}>🧩 ITSM</FloatingBadge>
            <FloatingBadge delay={0.75}>🔐 SSO / MFA</FloatingBadge>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          whileHover={{ scale: 1.015, rotate: 0.2 }}
          transition={{
            opacity: { duration: 0.55 },
            scale: { duration: 0.55 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="rounded-[2.5rem] border border-white/70 bg-white/85 p-5 shadow-2xl shadow-blue-100 backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:shadow-blue-950/20"
        >
          <div className="rounded-[2rem] bg-white p-5 text-slate-950 shadow-xl shadow-slate-100 ring-1 ring-slate-200 dark:bg-black/40 dark:text-white dark:shadow-none dark:ring-white/10">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img src={profile.photo} alt="Portrait de Samia Boutezrout" className="h-20 w-20 rounded-3xl object-cover object-center shadow-xl ring-2 ring-slate-200 dark:ring-white/30" />
                <div>
                  <h2 className="text-2xl font-black text-slate-950 dark:text-white">{profile.name}</h2>
                  <p className="mt-1 font-bold text-blue-700 dark:text-blue-200">{profile.title}</p>
                </div>
              </div>
              <div className="hidden md:block"><ThemeToggle theme={theme} toggleTheme={toggleTheme} /></div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {metrics.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.label} whileHover={{ y: -5 }} className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-200 dark:bg-white/10 dark:ring-white/10">
                    <Icon className="mb-3 h-5 w-5 text-blue-700 dark:text-cyan-300" />
                    <p className="text-2xl font-black text-slate-950 dark:text-white">{item.value}</p>
                    <p className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-300">{item.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 grid gap-3">
            <div className="flex rounded-3xl bg-slate-100 p-1 dark:bg-white/10">
              <button onClick={() => setMode("recruteur")} className={`flex-1 rounded-2xl px-4 py-3 text-sm font-black transition ${mode === "recruteur" ? "bg-white text-blue-700 shadow dark:bg-slate-950 dark:text-cyan-200" : "text-slate-500 dark:text-slate-300"}`}>Recruteur</button>
              <button onClick={() => setMode("manager")} className={`flex-1 rounded-2xl px-4 py-3 text-sm font-black transition ${mode === "manager" ? "bg-white text-blue-700 shadow dark:bg-slate-950 dark:text-cyan-200" : "text-slate-500 dark:text-slate-300"}`}>Manager IT</button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={mode} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="rounded-3xl bg-white p-5 ring-1 ring-slate-200 dark:bg-slate-950/70 dark:ring-white/10">
                <div className="flex items-start gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                    <ActiveIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-950 dark:text-white">{active.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {active.points.map((point) => <Pill key={point}>{point}</Pill>)}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

function ValueSection() {
  return (
    <section id="value" className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Ce que j’apporte" title="Un support complet, pas juste de la résolution" subtitle="Je combine relation utilisateur, technique et suivi pour éviter les tickets qui traînent." icon={Sparkles} />
        <div className="grid gap-6 lg:grid-cols-3">
          {valueCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * 0.08 }} whileHover={{ y: -8 }} className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-xl shadow-slate-100 dark:border-white/10 dark:bg-white/10 dark:shadow-black/20">
                <div className={`bg-gradient-to-br ${card.color} p-6 text-white`}>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/18 ring-1 ring-white/20"><Icon className="h-7 w-7" /></div>
                  <h3 className="mt-6 text-2xl font-black">{card.title}</h3>
                </div>
                <div className="p-6">
                  <p className="font-semibold leading-7 text-slate-600 dark:text-slate-300">{card.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{card.tags.map((tag) => <Pill key={tag}>{tag}</Pill>)}</div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FutureSupportSection() {
  const [active, setActive] = useState(0);
  const current = futureTopics[active];
  const CurrentIcon = current.icon;

  return (
    <section id="future" className="relative overflow-hidden bg-slate-50 px-5 py-20 text-slate-950 dark:bg-black dark:text-white">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-300 opacity-30 blur-3xl dark:bg-blue-500 dark:opacity-20" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-300 opacity-30 blur-3xl dark:bg-fuchsia-500 dark:opacity-20" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white shadow-lg shadow-slate-200 ring-1 ring-slate-900/10 dark:bg-white/10 dark:text-cyan-100 dark:shadow-none dark:ring-white/10">
            <Sparkles className="h-4 w-4" /> Support IT de demain
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
            Veille tech pour un support plus rapide, sécurisé et fiable
          </h2>
          <p className="mt-4 text-lg font-semibold leading-8 text-slate-600 dark:text-slate-300">
            Je suis les sujets qui transforment le support : IA, identité, automatisation et qualité ITSM.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {futureTopics.map((item, index) => {
              const Icon = item.icon;
              const isActive = active === index;
              return (
                <button
                  key={item.title}
                  onClick={() => setActive(index)}
                  className={`group rounded-[1.75rem] p-5 text-left transition ${
                    isActive
                      ? "bg-white text-slate-950 shadow-2xl shadow-blue-100 dark:bg-blue-950/40 dark:text-white dark:shadow-blue-950/40 dark:ring-1 dark:ring-cyan-300/20"
                      : "bg-white text-slate-800 shadow-sm ring-1 ring-slate-200 hover:bg-blue-50 hover:text-blue-800 dark:bg-slate-900/70 dark:text-slate-200 dark:ring-white/10 dark:hover:bg-slate-800 dark:hover:text-cyan-200"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className={`grid h-14 w-14 place-items-center rounded-2xl ${
                        isActive ? "bg-blue-50 text-blue-700 dark:bg-cyan-400/15 dark:text-cyan-200" : "bg-slate-100 text-blue-700 dark:bg-white/10 dark:text-cyan-200"
                      }`}>
                        <Icon className="h-6 w-6" />
                      </span>
                      <span>
                        <span className="block text-lg font-black">{item.title}</span>
                        <span className={`text-xs font-black uppercase tracking-wide ${
                          isActive ? "text-blue-700 dark:text-cyan-200" : "text-slate-500 dark:text-slate-400"
                        }`}>
                          {item.subtitle}
                        </span>
                      </span>
                    </div>
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </div>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={current.title}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              className="overflow-hidden rounded-[2.5rem] bg-white text-slate-950 shadow-2xl shadow-blue-100 ring-1 ring-slate-200 dark:bg-slate-950 dark:text-white dark:shadow-blue-950/30 dark:ring-white/10"
            >
              <div className={`bg-gradient-to-br ${current.gradient} p-7 text-white`}>
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                  <div className="flex items-center gap-4">
                    <div className="grid h-16 w-16 place-items-center rounded-3xl bg-white/18 ring-1 ring-white/20">
                      <CurrentIcon className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="text-sm font-black uppercase tracking-wide text-white/75">Veille active</p>
                      <h3 className="text-3xl font-black">{current.title}</h3>
                      <p className="mt-1 font-bold text-white/80">{current.subtitle}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-white/18 px-4 py-2 text-xs font-black ring-1 ring-white/20">
                    Doc + RSS
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <p className="rounded-3xl bg-slate-50 p-5 font-semibold leading-7 text-slate-600 ring-1 ring-slate-100 dark:bg-white/5 dark:text-slate-300 dark:ring-white/10">
                  {current.description}
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl bg-white p-5 shadow-lg shadow-slate-100 ring-1 ring-slate-100 dark:bg-white/5 dark:shadow-none dark:ring-white/10">
                    <p className="mb-4 text-sm font-black uppercase tracking-wide text-blue-700 dark:text-cyan-300">
                      Ce que je surveille
                    </p>
                    <div className="grid gap-3">
                      {current.actions.map((action) => (
                        <div key={action} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-black text-slate-700 dark:bg-slate-950/70 dark:text-slate-200">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-700 dark:text-cyan-300" />
                          {action}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-3xl bg-blue-50 p-5 ring-1 ring-blue-100 dark:bg-blue-400/10 dark:ring-blue-300/20">
                      <p className="mb-4 text-sm font-black uppercase tracking-wide text-blue-800 dark:text-cyan-200">
                        Documentation
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {current.docs.map((doc) => (
                          <a
                            key={doc.label}
                            href={doc.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black text-slate-800 ring-1 ring-blue-100 transition hover:-translate-y-0.5 hover:text-blue-700 dark:bg-slate-950/70 dark:text-slate-200 dark:ring-white/10 dark:hover:text-cyan-200"
                          >
                            {doc.label} <ArrowRight className="h-3.5 w-3.5" />
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-3xl bg-emerald-50 p-5 ring-1 ring-emerald-100 dark:bg-emerald-400/10 dark:ring-emerald-300/20">
                      <p className="mb-4 text-sm font-black uppercase tracking-wide text-emerald-800 dark:text-emerald-200">
                        Flux RSS / veille
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {current.feeds.map((feed) => (
                          <a
                            key={feed.label}
                            href={feed.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black text-slate-800 ring-1 ring-emerald-100 transition hover:-translate-y-0.5 hover:text-emerald-700 dark:bg-slate-950/70 dark:text-slate-200 dark:ring-white/10 dark:hover:text-emerald-200"
                          >
                            {feed.label} <ArrowRight className="h-3.5 w-3.5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}


function ProjectsSection() {
  const [active, setActive] = useState(0);
  const current = projects[active];
  const CurrentIcon = current.icon;

  const previous = () => setActive((index) => (index === 0 ? projects.length - 1 : index - 1));
  const next = () => setActive((index) => (index === projects.length - 1 ? 0 : index + 1));

  return (
    <section id="projects" className="relative overflow-hidden bg-white px-5 py-20 dark:bg-slate-950">
      <motion.div
        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-200 opacity-40 blur-3xl dark:bg-blue-700 dark:opacity-20"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-200 opacity-40 blur-3xl dark:bg-fuchsia-700 dark:opacity-20"
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Réalisations"
          title="Mes réalisations techniques"
          subtitle="Quelques projets qui montrent ma logique applicative, ma rigueur et ma capacité à construire des interfaces utiles."
          icon={Code2}
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const isActive = active === index;

              return (
                <motion.button
                  key={project.title}
                  onClick={() => setActive(index)}
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group rounded-[1.75rem] p-5 text-left transition ${
                    isActive
                      ? "bg-slate-950 text-white shadow-2xl shadow-slate-200 dark:bg-white dark:text-slate-950 dark:shadow-none"
                      : "bg-slate-50 text-slate-800 ring-1 ring-slate-200 hover:bg-blue-50 hover:text-blue-800 dark:bg-white/5 dark:text-slate-200 dark:ring-white/10 dark:hover:bg-white/10 dark:hover:text-cyan-200"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className={`grid h-14 w-14 place-items-center rounded-2xl ${
                        isActive
                          ? "bg-white/12 text-cyan-200 dark:bg-slate-950 dark:text-cyan-300"
                          : "bg-white text-blue-700 ring-1 ring-slate-200 dark:bg-white/10 dark:text-cyan-200 dark:ring-white/10"
                      }`}>
                        <Icon className="h-6 w-6" />
                      </span>
                      <span>
                        <span className="block text-lg font-black">{project.title}</span>
                        <span className={`text-xs font-black uppercase tracking-wide ${
                          isActive ? "text-cyan-200 dark:text-blue-700" : "text-slate-500 dark:text-slate-400"
                        }`}>
                          {project.type}
                        </span>
                      </span>
                    </div>
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </div>
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={current.title}
              initial={{ opacity: 0, x: 24, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -24, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl shadow-slate-100 dark:border-white/10 dark:bg-white/10 dark:shadow-black/20"
            >
              <div className={`relative min-h-[260px] bg-gradient-to-br ${current.gradient} p-7 text-white`}>
                <div className="absolute right-8 top-8 opacity-20">
                  <CurrentIcon className="h-40 w-40" />
                </div>

                <div className="relative flex h-full min-h-[220px] flex-col justify-between">
                  <div>
                    <span className="rounded-full bg-white/16 px-4 py-2 text-xs font-black ring-1 ring-white/20">
                      {current.type}
                    </span>
                    <h3 className="mt-6 text-4xl font-black tracking-tight">{current.title}</h3>
                    <p className="mt-2 text-lg font-black text-white/85">{current.stack}</p>
                  </div>

                  <div className="mt-8 flex items-center gap-3">
                    <button onClick={previous} className="grid h-11 w-11 place-items-center rounded-full bg-white/14 ring-1 ring-white/20 transition hover:bg-white/25" aria-label="Projet précédent">
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button onClick={next} className="grid h-11 w-11 place-items-center rounded-full bg-white/14 ring-1 ring-white/20 transition hover:bg-white/25" aria-label="Projet suivant">
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <p className="font-semibold leading-8 text-slate-600 dark:text-slate-300">{current.description}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {current.points.map((point) => (
                    <div key={point} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-black text-slate-700 ring-1 ring-slate-100 dark:bg-slate-950/60 dark:text-slate-200 dark:ring-white/10">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-700 dark:text-cyan-300" />
                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between gap-4">
                  <div className="flex gap-2">
                    {projects.map((project, index) => (
                      <button key={project.title} onClick={() => setActive(index)} className={`h-2.5 rounded-full transition ${active === index ? "w-8 bg-blue-700 dark:bg-cyan-300" : "w-2.5 bg-slate-300 dark:bg-white/30"}`} aria-label={`Voir ${project.title}`} />
                    ))}
                  </div>

                  <a href={current.link} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-100">
                    Voir plus <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="experience" className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Expérience" title="Du concret, mission par mission" subtitle="Des missions précises pour comprendre rapidement mon périmètre support." icon={BriefcaseBusiness} />
        <div className="grid gap-6 lg:grid-cols-2">
          {experiences.map((exp, index) => {
            const isOpen = open === index;
            return (
              <motion.article key={exp.company} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * 0.08 }} className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-xl shadow-slate-100 dark:border-white/10 dark:bg-white/10 dark:shadow-black/20">
                <div className={`bg-gradient-to-br ${exp.color} p-6 text-white`}>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="mb-5 flex items-center gap-4">
                        <div className="flex h-16 min-w-24 items-center justify-center rounded-3xl bg-white px-4 shadow-xl ring-1 ring-white/40">
                          {exp.logoSrc ? (
                            <img
                              src={exp.logoSrc}
                              alt={`Logo ${exp.logoLabel}`}
                              className="max-h-10 max-w-28 object-contain"
                            />
                          ) : (
                            <span className="text-lg font-black text-slate-950">{exp.logo}</span>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-black uppercase tracking-wide text-white/70">Entreprise</p>
                          <p className="text-xl font-black text-white">{exp.logoLabel}</p>
                        </div>
                      </div>
                      <span className="rounded-full bg-white/16 px-4 py-2 text-xs font-black ring-1 ring-white/20">{exp.badge}</span>
                      <h3 className="mt-5 text-2xl font-black">{exp.role}</h3>
                      <p className="mt-1 font-bold text-white/80">{exp.company} · {exp.location}</p>
                    </div>
                    <div className="rounded-2xl bg-white/16 px-4 py-3 text-sm font-black ring-1 ring-white/20">{exp.period}</div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="font-bold leading-7 text-slate-600 dark:text-slate-300">{exp.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{exp.stack.map((item) => <Pill key={item}>{item}</Pill>)}</div>
                  <button onClick={() => setOpen(isOpen ? -1 : index)} className="mt-6 flex w-full items-center justify-between rounded-2xl bg-slate-50 px-5 py-4 font-black text-slate-900 ring-1 ring-slate-100 transition hover:bg-blue-50 hover:text-blue-800 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:hover:bg-white/10 dark:hover:text-cyan-200">
                    Voir les missions détaillées
                    <ChevronDown className={`h-5 w-5 transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="mt-5 grid gap-3">
                          {exp.highlights.map((item) => (
                            <li key={item} className="flex gap-3 rounded-2xl bg-white p-4 text-sm font-bold leading-6 text-slate-600 ring-1 ring-slate-100 dark:bg-white/5 dark:text-slate-300 dark:ring-white/10">
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700 dark:text-cyan-300" /> {item}
                            </li>
                          ))}
                        </div>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StackSection() {
  const [active, setActive] = useState("Support");
  const selected = useMemo(() => stackGroups.find((group) => group.name === active), [active]);
  const SelectedIcon = selected.icon;
  return (
    <section id="stack" className="bg-slate-50 px-5 py-20 dark:bg-slate-900/60">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Compétences" title="Stack support interactive" subtitle="Un aperçu enrichi des environnements, outils ITSM, applications métiers et pratiques support." icon={MonitorCog} />
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {stackGroups.map((group) => {
              const Icon = group.icon;
              return (
                <motion.button key={group.name} whileHover={{ x: 6 }} whileTap={{ scale: 0.98 }} onClick={() => setActive(group.name)} className={`flex items-center gap-3 rounded-3xl border p-4 text-left font-black transition ${active === group.name ? "border-blue-700 bg-blue-700 text-white shadow-xl shadow-blue-100 dark:shadow-blue-950/30" : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-cyan-200"}`}>
                  <Icon className="h-5 w-5" /> {group.name}
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} className="rounded-[2.5rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-100 dark:border-white/10 dark:bg-white/10 dark:shadow-black/20">
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-blue-600 to-fuchsia-600 text-white">
                  <SelectedIcon className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-wide text-blue-700 dark:text-cyan-300">Catégorie</p>
                  <h3 className="text-3xl font-black text-slate-950 dark:text-white">{selected.name}</h3>
                </div>
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {selected.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-black text-slate-700 shadow-sm ring-1 ring-slate-100 dark:bg-slate-950/60 dark:text-slate-200 dark:ring-white/10"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-200 dark:bg-black/40 dark:shadow-none dark:ring-1 dark:ring-white/10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-cyan-200">Atouts professionnels</p>
              <h3 className="mt-2 text-2xl font-black">Une posture support sérieuse et adaptable</h3>
            </div>
            <div className="flex flex-wrap gap-2 lg:max-w-2xl lg:justify-end">{strengths.map((item) => <Pill key={item} tone="dark">{item}</Pill>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationStrip() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-100 dark:border-white/10 dark:bg-white/10 dark:shadow-black/20">
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div className="flex items-center gap-4">
            <div className="grid h-16 w-16 place-items-center rounded-3xl bg-amber-50 text-amber-700 ring-1 ring-amber-100 dark:bg-amber-400/10 dark:text-amber-200 dark:ring-amber-300/20">
              <GraduationCap className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-amber-700 dark:text-amber-200">Formation</p>
              <h3 className="text-2xl font-black text-slate-950 dark:text-white">BTS SIO — Option SLAM</h3>
              <p className="font-bold text-slate-500 dark:text-slate-300">Wébitech, Paris · 2023 — 2025</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Développement", "Bases de données", "Documentation", "Réseau", "Administration systèmes"].map((item) => <Pill key={item}>{item}</Pill>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white px-5 py-20 dark:bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-fuchsia-50 dark:from-slate-950 dark:via-blue-950 dark:to-fuchsia-950" />
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-blue-300 opacity-25 blur-3xl dark:bg-blue-500 dark:opacity-20" />
      <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-fuchsia-300 opacity-25 blur-3xl dark:bg-fuchsia-500 dark:opacity-20" />
      <div className="relative mx-auto max-w-5xl rounded-[2.5rem] bg-white p-8 text-center shadow-2xl shadow-black/20 dark:bg-slate-950 dark:text-white dark:ring-1 dark:ring-white/10 md:p-12">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-blue-600 to-fuchsia-600 text-white"><Mail className="h-8 w-8" /></div>
        <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">Disponible pour renforcer une équipe support IT.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold leading-8 text-slate-600 dark:text-slate-300">Helpdesk, support applicatif, poste de travail, assistance de proximité et suivi utilisateur en Île-de-France.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-black text-white shadow-xl shadow-slate-200 transition hover:-translate-y-1 hover:bg-blue-700 dark:bg-white dark:text-slate-950 dark:shadow-none dark:hover:bg-cyan-100">Envoyer un email <Mail className="h-5 w-5" /></a>
          <a href={`tel:${profile.phoneHref}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-black text-slate-900 shadow-xl shadow-slate-100 transition hover:-translate-y-1 hover:text-blue-800 dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-none dark:hover:text-cyan-200">Appeler <Phone className="h-5 w-5" /></a>
          <a href={profile.cv} download className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-black text-slate-900 shadow-xl shadow-slate-100 transition hover:-translate-y-1 hover:text-blue-800 dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-none dark:hover:text-cyan-200">CV <Download className="h-5 w-5" /></a>
        </div>
        <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-100 dark:bg-white/5 dark:ring-white/10"><p className="text-xs font-black uppercase text-slate-400 dark:text-slate-500">Email</p><p className="mt-1 break-all text-sm font-black text-slate-700 dark:text-slate-200">{profile.email}</p></div>
          <div className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-100 dark:bg-white/5 dark:ring-white/10"><p className="text-xs font-black uppercase text-slate-400 dark:text-slate-500">Téléphone</p><p className="mt-1 text-sm font-black text-slate-700 dark:text-slate-200">{profile.phone}</p></div>
          <div className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-100 dark:bg-white/5 dark:ring-white/10"><p className="text-xs font-black uppercase text-slate-400 dark:text-slate-500">Localisation</p><p className="mt-1 text-sm font-black text-slate-700 dark:text-slate-200">{profile.location}</p></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-8 dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} {profile.name}. Portfolio support IT.</p>
        <div className="flex items-center gap-2 text-sm font-black text-blue-700 dark:text-cyan-300"><Sparkles className="h-4 w-4" /> Mode clair / sombre inclus</div>
      </div>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <main className={`${theme === "dark" ? "dark" : ""} min-h-screen scroll-smooth bg-white font-sans text-slate-900 selection:bg-cyan-100 selection:text-blue-950`}>
      <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-slate-950">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero theme={theme} toggleTheme={toggleTheme} />
        <ValueSection />
        <FutureSupportSection />
        <ProjectsSection />
        <ExperienceSection />
        <StackSection />
        <EducationStrip />
        <ContactSection />
        <Footer />

        <button onClick={toggleTheme} className="fixed bottom-5 left-5 z-40 hidden h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl shadow-slate-200 transition hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:shadow-black/30 sm:inline-flex" aria-label="Changer le thème">
          {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </button>
        <a href={`mailto:${profile.email}?subject=Opportunité CDI Support IT - Samia Boutezrout`} className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-fuchsia-600 text-white shadow-2xl shadow-blue-200 transition hover:-translate-y-1 dark:shadow-blue-950/30 sm:hidden" aria-label="Contacter Samia">
          <Mail className="h-6 w-6" />
        </a>
      </div>
    </main>
  );
}
