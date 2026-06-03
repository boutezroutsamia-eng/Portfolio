import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
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
  Eye,
  Filter,
  ChevronLeft,
  ChevronRight,
  Github,
  BookOpen,
  Rocket,
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
  { label: "Apport", id: "apport" },
  { label: "Veille", id: "future" },
  { label: "Projets", id: "projects" },
  { label: "Réalisations", id: "realisations" },
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
    category: "desktop",
    type: "Application desktop",
    stack: "C# · WinForms · SQLite",
    icon: Code2,
    gradient: "from-indigo-700 via-blue-700 to-slate-950",
    description:
      "Application desktop de gestion de tâches avec interface WinForms, priorités, statuts et suivi des échéances.",
    intro:
      "My App Todo est une application simple et efficace de gestion de tâches qui permet aux utilisateurs de mieux organiser leur travail. L’application propose une interface intuitive pour créer, mettre à jour et supprimer des tâches, tout en permettant de définir des priorités et des échéances.",
    screenshots: [
      { label: "Interface principale", src: "/projects/todo-main.jpg" },
      { label: "Fenêtre d’ajout de tâche", src: "/projects/todo-add.jpg" },
    ],
    features: [
      "Ajouter des tâches avec nom, dates, statut et priorité",
      "Modifier les tâches existantes",
      "Supprimer les tâches terminées ou inutiles",
      "Visualiser les tâches dans une grille claire",
      "Stockage local avec SQLite",
      "Interface WinForms simple et lisible",
    ],
    tech: [".NET Framework", "C#", "WinForms", "SQLite", "NLog", "xUnit"],
    prerequisites: [".NET Framework", "Bibliothèque SQLite pour .NET", "Bibliothèque NLog", "xUnit pour les tests"],
    deployment: [
      "git clone https://github.com/samaholicc/TaskManagerFinal.git",
      "cd TaskManagerFinal",
      "dotnet restore",
      "dotnet build",
      "dotnet run",
    ],
    docsLabel: "Télécharger la documentation PDF",
    docsLink: "/docs/MyAppTodo.pdf",
    github: "https://github.com/samaholicc/TaskManagerFinal",
  },
  {
    title: "Site vitrine",
    category: "web",
    type: "Front-end",
    stack: "React · JavaScript",
    icon: MonitorCog,
    gradient: "from-cyan-600 via-blue-600 to-indigo-800",
    description:
      "Site web moderne en React présentant une page d’accueil, un portfolio, une section contact et des animations fluides.",
    intro:
      "Projet de site vitrine conçu pour présenter une activité, des services et des réalisations avec une interface claire, responsive et dynamique.",
    screenshots: [
      { label: "Page d’accueil", src: "/projects/site-home.jpg" },
      { label: "Section portfolio", src: "/projects/site-portfolio.jpg" },
      { label: "Section contact", src: "/projects/site-contact.jpg" },
    ],
    features: [
      "Page d’accueil claire et professionnelle",
      "Section portfolio avec cartes projets",
      "Formulaire de contact",
      "Animations avec Framer Motion",
      "Interface responsive",
    ],
    tech: ["React", "JavaScript", "EmailJS", "Framer Motion", "CSS responsive"],
    prerequisites: ["Node.js", "npm", "Navigateur moderne"],
    deployment: [
      "npm install",
      "npm run dev",
      "npm run build",
      "npm start",
    ],
    docsLabel: "Télécharger la documentation PDF",
    docsLink: "/docs/JSreactVitrine.pdf",
    github: "#",
  },
  {
    title: "ArtSphere",
    category: "web",
    type: "Application web",
    stack: "React · Firebase",
    icon: Sparkles,
    gradient: "from-fuchsia-600 via-violet-700 to-slate-950",
    description:
      "Plateforme web permettant de créer, partager et découvrir des dessins avec authentification, galerie et interactions sociales.",
    intro:
      "ArtSphere est une plateforme web pour les artistes, leur permettant de dessiner, partager leurs œuvres, consulter une galerie et interagir avec d’autres utilisateurs.",
    screenshots: [
      { label: "Éditeur de dessin", src: "/projects/artsphere-editor.jpg" },
      { label: "Galerie des créations", src: "/projects/artsphere-gallery.jpg" },
      { label: "Profil utilisateur", src: "/projects/artsphere-profile.jpg" },
    ],
    features: [
      "Éditeur de dessin interactif",
      "Galerie publique des créations",
      "Profil utilisateur personnalisé",
      "Authentification Firebase",
      "Interface responsive",
    ],
    tech: ["React", "Vite", "Firebase Authentication", "Firestore", "Firebase Storage", "Tailwind CSS", "Framer Motion"],
    prerequisites: ["Node.js 18+", "Compte Firebase", "Firebase CLI"],
    deployment: [
      "git clone https://github.com/samaholicc/artsphere.git",
      "cd artsphere",
      "npm install",
      "cd functions",
      "npm install",
      "cd ..",
      "firebase deploy --only functions",
      "npm run build",
      "firebase deploy --only hosting",
    ],
    docsLabel: "Télécharger la documentation PDF",
    docsLink: "/docs/ArtSphere.pdf",
    github: "#",
  },
  {
    title: "Gestionnaire des tâches",
    category: "database",
    type: "Application web",
    stack: "Laravel · PHP · MySQL · Blade",
    icon: ClipboardList,
    gradient: "from-blue-700 via-indigo-700 to-slate-950",
    description:
      "Application web Laravel de gestion de tâches avec tableau de bord, création, modification, suppression et organisation du travail.",
    intro:
      "Le Gestionnaire des tâches est une application web développée avec le framework Laravel. Elle permet de créer, modifier, suivre et supprimer des tâches depuis une interface simple. L’architecture MVC de Laravel apporte une structure claire, organisée et maintenable.",
    screenshots: [
      { label: "Page d’accueil", src: "/projects/task-home.jpg" },
      { label: "Liste des tâches", src: "/projects/task-list.jpg" },
      { label: "Mode sombre / liste", src: "/projects/task-list-dark.jpg" },
      { label: "Créer une tâche", src: "/projects/task-create.jpg" },
      { label: "Réinitialisation du mot de passe", src: "/projects/task-reset-password.jpg" },
    ],
    features: [
      "Créer des tâches : définir une tâche, une description et une priorité.",
      "Modifier des tâches : ajuster les informations en fonction des changements.",
      "Voir toutes les tâches : accéder à une liste claire pour mieux suivre l’avancement.",
      "Supprimer des tâches : retirer les tâches terminées ou non pertinentes.",
    ],
    laravelFeatures: [
      "Eloquent ORM : simplifie les interactions avec la base de données.",
      "Routing : facilite la définition des URLs et leur logique correspondante.",
      "Blade Template Engine : permet des vues propres et réutilisables.",
      "Middleware : sécurise l’application et protège les routes sensibles.",
    ],
    tech: ["Laravel", "PHP", "Blade", "MySQL", "MariaDB", "Composer", "MVC", "Eloquent ORM"],
    prerequisites: ["PHP 8+", "Composer", "MySQL ou MariaDB", "Node.js / npm"],
    deployment: [
      "git clone https://github.com/samaholicc/task_manager.git",
      "cd task_manager",
      "composer install",
      "cp .env.example .env",
      "php artisan key:generate",
      "php artisan migrate",
    ],
    usage: [
      "php artisan serve",
      "Ouvrir l’application sur http://localhost:8000",
    ],
    docsLabel: "Télécharger la documentation PDF",
    docsLink: "/docs/TaskManager.pdf",
    github: "https://github.com/samaholicc/task_manager",
  },,
  {
    title: "SchoolManagement",
    category: "database",
    type: "Application desktop",
    stack: "C# · WinForms · MySQL · .NET Framework",
    icon: GraduationCap,
    gradient: "from-blue-700 via-indigo-700 to-slate-950",
    description:
      "Application desktop de gestion scolaire avec gestion des étudiants, départements, matières, classes et authentification.",
    intro:
      "SchoolManagement est une application desktop développée en C# avec WinForms. Elle permet de gérer les éléments principaux d’un établissement : étudiants, départements, matières, classes et profils utilisateurs. Le projet s’appuie sur une architecture orientée services/repositories et une base MySQL.",
    screenshots: [
      { label: "Page de connexion", src: "/projects/school-login.png" },
      { label: "Ajouter un étudiant", src: "/projects/school-add-student.png" },
      { label: "Ajouter un département", src: "/projects/school-add-department.png" },
      { label: "Ajouter une matière", src: "/projects/school-add-subject.png" },
      { label: "Modifier une classe", src: "/projects/school-edit-class.png" },
    ],
    features: [
      "Authentification utilisateur",
      "Gestion des étudiants",
      "Gestion des départements",
      "Gestion des matières",
      "Gestion des classes et sections",
      "Interface WinForms avec formulaires dédiés",
    ],
    tech: ["C#", "WinForms", ".NET Framework 4.8", "MySQL", "MySql.Data", "Newtonsoft.Json", "xUnit"],
    prerequisites: ["Visual Studio", ".NET Framework 4.8", "MySQL Server", "NuGet packages"],
    deployment: [
      "Ouvrir SchoolManagement.sln dans Visual Studio",
      "Restaurer les packages NuGet",
      "Configurer la connexion MySQL",
      "Compiler la solution",
      "Lancer le projet SchoolManagement",
    ],
    docsLabel: "Télécharger la documentation PDF",
    docsLink: "/docs/SchoolManagement.pdf",
    database: {
      name: "gestion_etudiants_db",
      engine: "MySQL / MariaDB",
      summary:
        "Base relationnelle structurée autour des comptes, étudiants, enseignants, départements, matières, classes, inscriptions et résultats.",
      tables: ["account", "dep", "subject", "teacher", "class", "studentstable", "student_classes", "results"],
      iframeSrc: "https://dbdiagram.io/e/6a206f42d2fbd72c4d45faf4/6a206f575863c174347a784d",
    },
    github: "#",
  },
  {
    title: "LocManager",
    category: "support",
    type: "Application web full-stack",
    stack: "React · Node.js · Express · MySQL",
    icon: Users,
    gradient: "from-emerald-600 via-teal-700 to-slate-950",
    description:
      "Plateforme de gestion immobilière pour administrateurs, employés, propriétaires et locataires.",
    intro:
      "LocManager est une application web full-stack de gestion immobilière. Elle facilite la gestion des profils utilisateurs, plaintes, demandes de maintenance, paiements d’entretien et tableaux de bord selon les rôles : administrateur, employé, propriétaire ou locataire.",
    screenshots: [
      { label: "Page de connexion", src: "/projects/loc-login.png" },
      { label: "Dashboard administrateur", src: "/projects/loc-admin-dashboard.png" },
      { label: "Dashboard employé", src: "/projects/loc-employee-dashboard.png" },
      { label: "Dashboard propriétaire", src: "/projects/loc-owner-dashboard.png" },
      { label: "Dashboard locataire", src: "/projects/loc-tenant-dashboard.png" },
      { label: "Modifier le profil", src: "/projects/loc-edit-profile.png" },
      { label: "Dépôt de plainte", src: "/projects/loc-raise-complaint.png" },
    ],
    features: [
      "Gestion des locataires, propriétaires et employés",
      "Dépôt et suivi des plaintes",
      "Gestion des demandes de maintenance",
      "Tableaux de bord selon les rôles",
      "Authentification et vérification email",
      "Notifications et interface moderne",
      "Mode sombre",
    ],
    tech: ["React", "React Router", "Axios", "Framer Motion", "Tailwind CSS", "Node.js", "Express", "MySQL2", "Nodemailer", "JWT"],
    prerequisites: ["Node.js 18", "npm", "MySQL", "Variables .env client/server"],
    deployment: [
      "cd server",
      "npm install",
      "Configurer le fichier .env",
      "npm start",
      "cd ../client",
      "npm install",
      "npm run build",
    ],
    docsLabel: "Télécharger la documentation PDF",
    docsLink: "/docs/Loc-Manager.pdf",
    database: {
      name: "app",
      engine: "MySQL",
      summary:
        "Base de données immobilière multi-rôles pour gérer administrateurs, employés, propriétaires, locataires, logements, locations, maintenance, messages et notifications.",
      tables: [
        "block_admin",
        "employee",
        "owner",
        "tenant",
        "block",
        "room",
        "rental",
        "parking_slots",
        "maintenance_requests",
        "activities",
        "notifications",
        "messages",
        "system_alerts",
        "stats_history",
      ],
      iframeSrc: "https://dbdiagram.io/e/6a20722d5863c174347a92a0/6a2072315863c174347a92f9",
    },
    github: "#",
  }
];

const flagshipProjects = projects.filter((project) => ["SchoolManagement", "LocManager"].includes(project.title));

const realisations = projects.filter((project) => !["SchoolManagement", "LocManager"].includes(project.title));

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
      <nav className="mx-auto flex max-w-[92rem] items-center justify-between px-5 py-4">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900">
          <img src={profile.photo} alt="Samia Boutezrout" className="h-12 w-12 rounded-2xl object-cover object-center shadow-xl shadow-blue-100 ring-2 ring-white dark:shadow-blue-950/30 dark:ring-white/20" />
          <span className="text-left">
            <span className="block text-sm font-black text-slate-950 dark:text-white">Samia Boutezrout</span>
            <span className="text-xs font-bold text-blue-700 dark:text-cyan-300">Support IT N1/N2</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/80 p-1 shadow-sm dark:border-white/10 dark:bg-white/5 lg:flex">
          {nav.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="rounded-full px-3 py-2 text-xs font-black text-slate-600 transition duration-300 ease-out hover:bg-blue-50 hover:text-blue-800 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-cyan-200 xl:px-4 xl:text-sm">
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <a href={profile.cv} download className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-800 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:text-blue-700 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:text-cyan-200">
            CV <Download className="h-4 w-4" />
          </a>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-xl shadow-slate-200 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-white dark:text-slate-950 dark:shadow-none dark:hover:bg-cyan-100">
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
<span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-blue-800 ring-1 ring-blue-100 dark:bg-white/10 dark:text-cyan-200 dark:ring-white/10">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Support IT <span className="bg-gradient-to-r from-blue-600 via-fuchsia-600 to-cyan-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-fuchsia-300 dark:to-blue-300">réactif</span>, humain et carré.
          </h1>

          <p className="mt-6 max-w-2xl text-xl font-semibold leading-9 text-slate-600 dark:text-slate-300">{profile.pitch}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-fuchsia-600 px-7 py-4 font-black text-white shadow-xl shadow-blue-200 transition duration-300 ease-out hover:-translate-y-1 dark:shadow-blue-950/30">
              Me contacter <Mail className="h-5 w-5" />
            </a>
            <button onClick={() => scrollTo("future")} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-black text-slate-900 shadow-xl shadow-slate-100 transition duration-300 ease-out hover:-translate-y-1 hover:text-blue-800 dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-none dark:hover:bg-white/15 dark:hover:text-cyan-200">
              Voir ma veille <MousePointerClick className="h-5 w-5" />
            </button>
            <a href={profile.cv} download className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-black text-slate-900 shadow-xl shadow-slate-100 transition duration-300 ease-out hover:-translate-y-1 hover:text-blue-800 dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-none dark:hover:bg-white/15 dark:hover:text-cyan-200">
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
                            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black text-slate-800 ring-1 ring-blue-100 transition duration-300 ease-out hover:-translate-y-0.5 hover:text-blue-700 dark:bg-slate-950/70 dark:text-slate-200 dark:ring-white/10 dark:hover:text-cyan-200"
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
                            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black text-slate-800 ring-1 ring-emerald-100 transition duration-300 ease-out hover:-translate-y-0.5 hover:text-emerald-700 dark:bg-slate-950/70 dark:text-slate-200 dark:ring-white/10 dark:hover:text-emerald-200"
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
  const [projectFilter, setProjectFilter] = useState("all");
  const projectCounts = {
    all: flagshipProjects.length,
    support: flagshipProjects.filter((project) => project.category === "support").length,
    web: flagshipProjects.filter((project) => project.category === "web").length,
    desktop: flagshipProjects.filter((project) => project.category === "desktop").length,
    database: flagshipProjects.filter((project) => project.category === "database").length,
  };
  const visibleFlagshipProjects =
    projectFilter === "all"
      ? flagshipProjects
      : flagshipProjects.filter((project) => project.category === projectFilter);

  const [active, setActive] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setActive(0);
  }, [projectFilter]);

  const current = visibleFlagshipProjects[active] || visibleFlagshipProjects[0] || flagshipProjects[0];
  const CurrentIcon = current.icon;

  const previous = () =>
    setActive((index) => (index === 0 ? visibleFlagshipProjects.length - 1 : index - 1));
  const next = () =>
    setActive((index) => (index === visibleFlagshipProjects.length - 1 ? 0 : index + 1));

  return (
    <section id="projects" className="relative overflow-hidden bg-white px-5 py-24 dark:bg-slate-950">
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -24, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-200 opacity-40 blur-3xl dark:bg-blue-700 dark:opacity-20"
      />
      <motion.div
        animate={{ x: [0, -35, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-200 opacity-40 blur-3xl dark:bg-fuchsia-700 dark:opacity-20"
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Projets principaux"
          title="Mes projets les plus importants"
          subtitle="Deux projets complets qui montrent ma capacité à construire, documenter et présenter une application de bout en bout."
          icon={Rocket}
        />

        <ProjectFilterBar active={projectFilter} onChange={setProjectFilter} counts={projectCounts} />

        {visibleFlagshipProjects.length === 0 && (
          <div className="mb-8 rounded-[2rem] border border-dashed border-slate-300 bg-white/70 p-8 text-center font-bold text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
            Aucun projet dans cette catégorie pour le moment.
          </div>
        )}

        {visibleFlagshipProjects.length > 0 && (
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-5">
            {visibleFlagshipProjects.map((project, index) => {
              const Icon = project.icon;
              const isActive = active === index;

              return (
                <motion.button
                  key={project.title}
                  onClick={() => setActive(index)}
                  whileHover={{ x: 8, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group overflow-hidden rounded-[2rem] border p-6 text-left transition ${
                    isActive
                      ? "border-blue-600 bg-slate-950 text-white shadow-2xl shadow-blue-100 dark:border-cyan-300/30 dark:bg-white dark:text-slate-950 dark:shadow-none"
                      : "border-slate-200 bg-white text-slate-800 shadow-xl shadow-slate-100 hover:border-blue-200 hover:bg-blue-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:shadow-black/20 dark:hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`grid h-16 w-16 shrink-0 place-items-center rounded-3xl ${
                      isActive
                        ? "bg-white/12 text-cyan-200 dark:bg-slate-950 dark:text-cyan-300"
                        : "bg-slate-50 text-blue-700 ring-1 ring-slate-200 dark:bg-white/10 dark:text-cyan-200 dark:ring-white/10"
                    }`}>
                      <Icon className="h-8 w-8" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wide ${
                          isActive
                            ? "bg-white/10 text-cyan-200 dark:bg-blue-50 dark:text-blue-700"
                            : "bg-blue-50 text-blue-700 dark:bg-cyan-400/10 dark:text-cyan-200"
                        }`}>
                          Projet complet
                        </span>
                        <span className={`rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wide ${
                          isActive
                            ? "bg-white/10 text-white/80 dark:bg-slate-100 dark:text-slate-600"
                            : "bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-300"
                        }`}>
                          {project.type}
                        </span>
                      </div>

                      <h3 className="mt-4 text-2xl font-black tracking-tight">{project.title}</h3>
                      <p className={`mt-2 text-sm font-black ${isActive ? "text-cyan-200 dark:text-blue-700" : "text-blue-700 dark:text-cyan-300"}`}>
                        {project.stack}
                      </p>
                      <p className={`mt-3 line-clamp-3 text-sm font-semibold leading-6 ${isActive ? "text-white/75 dark:text-slate-600" : "text-slate-600 dark:text-slate-300"}`}>
                        {project.description}
                      </p>
                    </div>

                    <ArrowRight className="mt-2 h-5 w-5 shrink-0 transition group-hover:translate-x-1" />
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
              className="overflow-hidden rounded-[2.75rem] border border-slate-200 bg-white shadow-2xl shadow-slate-100 dark:border-white/10 dark:bg-white/10 dark:shadow-black/20"
            >
              <div className={`relative min-h-[330px] bg-gradient-to-br ${current.gradient} p-8 text-white`}>
                <div className="absolute right-8 top-8 opacity-15">
                  <CurrentIcon className="h-48 w-48" />
                </div>

                <div className="relative flex min-h-[280px] flex-col justify-between">
                  <div>
                    <span className="rounded-full bg-white/16 px-4 py-2 text-xs font-black uppercase tracking-wide ring-1 ring-white/20">
                      Projet mis en avant
                    </span>
                    <h3 className="mt-7 text-5xl font-black tracking-tight">{current.title}</h3>
                    <p className="mt-3 text-xl font-black text-white/85">{current.stack}</p>
                    <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-white/75">{current.description}</p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <button onClick={previous} className="grid h-11 w-11 place-items-center rounded-full bg-white/14 ring-1 ring-white/20 transition duration-300 ease-out hover:bg-white/25" aria-label="Projet précédent">
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button onClick={next} className="grid h-11 w-11 place-items-center rounded-full bg-white/14 ring-1 ring-white/20 transition duration-300 ease-out hover:bg-white/25" aria-label="Projet suivant">
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>

                    <button
                      onClick={() => setSelectedProject(current)}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-cyan-100"
                    >
                      Voir le projet en détail <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 p-6 sm:grid-cols-2">
                {current.features.slice(0, 4).map((point) => (
                  <div key={point} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-black text-slate-700 ring-1 ring-slate-100 dark:bg-slate-950/60 dark:text-slate-200 dark:ring-white/10">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-700 dark:text-cyan-300" />
                    {point}
                  </div>
                ))}
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

function RealisationsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="realisations" className="bg-slate-50 px-5 py-20 dark:bg-slate-900/60">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Autres réalisations"
          title="Réalisations complémentaires"
          subtitle="Des projets plus courts qui complètent mon parcours et montrent ma polyvalence technique."
          icon={Code2}
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {realisations.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-100 dark:border-white/10 dark:bg-white/10 dark:shadow-black/20"
              >
                <div className={`relative min-h-[180px] bg-gradient-to-br ${project.gradient} p-6 text-white`}>
                  <div className="absolute right-4 top-4 opacity-20">
                    <Icon className="h-28 w-28" />
                  </div>
                  <div className="relative">
                    <span className="rounded-full bg-white/16 px-3 py-1.5 text-[11px] font-black uppercase tracking-wide ring-1 ring-white/20">
                      Réalisation
                    </span>
                    <h3 className="mt-6 text-2xl font-black">{project.title}</h3>
                    <p className="mt-2 text-sm font-black text-white/80">{project.stack}</p>
                  </div>
                </div>

                <div className="p-5">
                  <p className="line-clamp-3 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-100"
                  >
                    Voir plus <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  const [loadedDiagram, setLoadedDiagram] = useState(false);

  useEffect(() => {
    setLoadedDiagram(false);
  }, [project?.title]);

  if (!project) return null;
  const ProjectIcon = project.icon;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/80 px-4 py-6 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="mx-auto max-w-6xl">
          <motion.article
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.98 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 text-white shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition duration-300 ease-out hover:bg-white/20"
              aria-label="Fermer"
            >
              <X className="h-6 w-6" />
            </button>

            <div className={`bg-gradient-to-br ${project.gradient} px-6 py-10 text-center md:px-12`}>
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-white/16 ring-1 ring-white/20">
                <ProjectIcon className="h-8 w-8" />
              </div>
              <h2 className="mt-5 text-4xl font-black tracking-tight">{project.title}</h2>
              <p className="mt-2 text-lg font-black text-white/80">{project.stack}</p>
            </div>

            <div className="space-y-10 px-6 py-8 md:px-12">
              <section className="text-center">
                <h3 className="text-2xl font-black">Introduction</h3>
                <p className="mx-auto mt-4 max-w-4xl text-lg font-semibold leading-9 text-slate-300">
                  {project.intro}
                </p>
              </section>

              <div className="h-px bg-white/10" />

              <section>
                <h3 className="text-center text-2xl font-black">Captures d’écran</h3>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {project.screenshots.map((screen) => (
                    <figure key={screen.label} className="rounded-3xl bg-white/5 p-4 ring-1 ring-white/10">
                      <div className="grid aspect-video place-items-center overflow-hidden rounded-2xl bg-slate-800">
                        <img
                          src={screen.src}
                          alt={screen.label}
                          className="h-full w-full object-cover"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                            event.currentTarget.parentElement.innerHTML = "<div class='px-6 text-center text-sm font-black text-slate-400'>Ajoute l’image dans public/projects</div>";
                          }}
                        />
                      </div>
                      <figcaption className="mt-3 text-center text-sm font-black text-slate-300">{screen.label}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <div className="h-px bg-white/10" />

              {project.laravelFeatures && (
                <section>
                  <h3 className="text-center text-2xl font-black">Fonctionnalités de Laravel utilisées</h3>
                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {project.laravelFeatures.map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 font-bold text-slate-200 ring-1 ring-white/10">
                        <Rocket className="h-5 w-5 shrink-0 text-amber-300" />
                        {item}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <section>
                <h3 className="text-center text-2xl font-black">Fonctionnalités</h3>
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {project.features.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 font-bold text-slate-200 ring-1 ring-white/10">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[2rem] bg-white/5 p-6 ring-1 ring-white/10">
                <h3 className="text-center text-2xl font-black">Technologies utilisées</h3>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-cyan-200 ring-1 ring-white/10">
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              {project.database && (
                <section className="rounded-[2rem] bg-white/5 p-6 ring-1 ring-white/10">
                  <h3 className="text-center text-2xl font-black">Base de données & modélisation</h3>

                  <div className="mt-6 grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
                    <div className="rounded-3xl bg-slate-950 p-5 ring-1 ring-white/10">
                      <p className="text-xs font-black uppercase tracking-wide text-cyan-300">Base</p>
                      <p className="mt-2 text-2xl font-black text-white">{project.database.name}</p>
                      <p className="mt-1 text-sm font-bold text-slate-400">{project.database.engine}</p>
                      <p className="mt-4 text-sm font-semibold leading-7 text-slate-300">
                        {project.database.summary}
                      </p>
                    </div>

                    <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
                      <p className="mb-4 text-xs font-black uppercase tracking-wide text-cyan-300">Tables principales</p>
                      <div className="flex flex-wrap gap-2">
                        {project.database.tables.map((table) => (
                          <span
                            key={table}
                            className="rounded-full bg-slate-950 px-4 py-2 text-xs font-black text-emerald-300 ring-1 ring-white/10"
                          >
                            {table}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {project.database.iframeSrc && (
                    <div className="mt-6 overflow-hidden rounded-[1.5rem] bg-slate-950 ring-1 ring-white/10">
                      <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-xs font-black uppercase tracking-wide text-cyan-300">Modélisation dbdiagram</p>
                          <p className="text-sm font-bold text-slate-300">
                            Le diagramme est chargé uniquement sur demande pour éviter de ralentir la modal.
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => setLoadedDiagram(true)}
                            className="rounded-full bg-blue-600 px-4 py-2 text-xs font-black text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-blue-500"
                          >
                            Charger le diagramme
                          </button>
                          <a
                            href={project.database.iframeSrc}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full bg-white/10 px-4 py-2 text-xs font-black text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/20"
                          >
                            Ouvrir dans dbdiagram
                          </a>
                        </div>
                      </div>

                      {loadedDiagram ? (
                        <iframe
                          title={`Modélisation ${project.title}`}
                          src={project.database.iframeSrc}
                          width="100%"
                          height="430"
                          className="block w-full border-0 bg-white"
                          loading="lazy"
                        />
                      ) : (
                        <div className="grid min-h-[260px] place-items-center bg-slate-900 px-6 py-10 text-center">
                          <div>
                            <div className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/20">
                              <Database className="h-8 w-8" />
                            </div>
                            <h4 className="mt-5 text-2xl font-black text-white">Diagramme prêt à charger</h4>
                            <p className="mx-auto mt-3 max-w-xl text-sm font-semibold leading-7 text-slate-400">
                              L’intégration dbdiagram peut prendre quelques secondes. Clique sur “Charger le diagramme”
                              ou ouvre-le dans un nouvel onglet pour une navigation plus fluide.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </section>
              )}

              <section>
                <h3 className="text-center text-2xl font-black">Prérequis</h3>
                <div className="mx-auto mt-5 grid max-w-3xl gap-3">
                  {project.prerequisites.map((item) => (
                    <div key={item} className="rounded-2xl bg-white/5 px-4 py-3 text-center font-bold text-slate-300 ring-1 ring-white/10">
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <div className="h-px bg-white/10" />

              <section>
                <h3 className="text-center text-2xl font-black">Déploiement</h3>
                <p className="mt-3 text-center font-semibold text-slate-300">Suivez ces étapes pour lancer ou déployer le projet :</p>
                <div className="mx-auto mt-6 grid max-w-4xl gap-4">
                  {project.deployment.map((step, index) => (
                    <div key={`${step}-${index}`} className="grid gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 md:grid-cols-[3rem_1fr] md:items-center">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-600 text-sm font-black text-white">{index + 1}</span>
                      <code className="overflow-x-auto rounded-xl bg-slate-950 px-4 py-3 text-sm font-black text-emerald-300">
                        {step}
                      </code>
                    </div>
                  ))}
                </div>
              </section>

              {project.usage && (
                <section className="rounded-[2rem] bg-white/5 p-6 ring-1 ring-white/10">
                  <h3 className="text-center text-2xl font-black">Utilisation</h3>
                  <p className="mt-3 text-center font-semibold text-slate-300">Pour démarrer le serveur local :</p>
                  <div className="mx-auto mt-5 grid max-w-3xl gap-3">
                    {project.usage.map((step) => (
                      <code key={step} className="overflow-x-auto rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-black text-emerald-300">
                        {step}
                      </code>
                    ))}
                  </div>
                </section>
              )}

              <div className="flex flex-col justify-center gap-3 pb-2 sm:flex-row">
                <a href={project.docsLink} className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-black text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-blue-500">
                  <BookOpen className="h-5 w-5" />
                  {project.docsLabel}
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 px-7 py-4 font-black text-white ring-1 ring-white/15 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/25">
                  <Github className="h-5 w-5" />
                  Voir sur GitHub
                </a>
              </div>
            </div>
          </motion.article>
        </div>
      </motion.div>
    </AnimatePresence>
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
                  <button onClick={() => setOpen(isOpen ? -1 : index)} className="mt-6 flex w-full items-center justify-between rounded-2xl bg-slate-50 px-5 py-4 font-black text-slate-900 ring-1 ring-slate-100 transition duration-300 ease-out hover:bg-blue-50 hover:text-blue-800 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:hover:bg-white/10 dark:hover:text-cyan-200">
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
          <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-black text-white shadow-xl shadow-slate-200 transition duration-300 ease-out hover:-translate-y-1 hover:bg-blue-700 dark:bg-white dark:text-slate-950 dark:shadow-none dark:hover:bg-cyan-100">Envoyer un email <Mail className="h-5 w-5" /></a>
          <a href={`tel:${profile.phoneHref}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-black text-slate-900 shadow-xl shadow-slate-100 transition duration-300 ease-out hover:-translate-y-1 hover:text-blue-800 dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-none dark:hover:text-cyan-200">Appeler <Phone className="h-5 w-5" /></a>
          <a href={profile.cv} download className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-black text-slate-900 shadow-xl shadow-slate-100 transition duration-300 ease-out hover:-translate-y-1 hover:text-blue-800 dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-none dark:hover:text-cyan-200">CV <Download className="h-5 w-5" /></a>
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





function MagicParticlesBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 26 }, (_, index) => ({
        id: index,
        left: (index * 37) % 100,
        top: (index * 53) % 100,
        size: 6 + (index % 5) * 3,
        duration: 7 + (index % 6),
        delay: (index % 8) * 0.35,
      })),
    []
  );

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-blue-400/20 blur-[1px] dark:bg-cyan-300/20"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-18, 18, -18],
            x: [-10, 10, -10],
            opacity: [0.08, 0.38, 0.08],
            scale: [0.8, 1.35, 0.8],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function CursorGlowTrail() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    let dotId = 0;

    const onMove = (event) => {
      const id = dotId++;
      const dot = {
        id,
        x: event.clientX,
        y: event.clientY,
      };

      setDots((current) => [...current.slice(-10), dot]);
      window.setTimeout(() => {
        setDots((current) => current.filter((item) => item.id !== id));
      }, 650);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[155] hidden sm:block">
      <AnimatePresence>
        {dots.map((dot) => (
          <motion.span
            key={dot.id}
            initial={{ opacity: 0.55, scale: 0.35 }}
            animate={{ opacity: 0, scale: 1.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="absolute h-4 w-4 rounded-full bg-cyan-300/50 blur-[2px]"
            style={{
              left: dot.x - 8,
              top: dot.y - 8,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

function MagicHeroHalo() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[3rem]">
      <motion.div
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-3xl"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-20 top-8 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl"
        animate={{
          y: [-12, 18, -12],
          x: [0, -14, 0],
          opacity: [0.2, 0.38, 0.2],
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          y: [10, -16, 10],
          x: [-8, 8, -8],
          opacity: [0.18, 0.34, 0.18],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function MagicDivider() {
  return (
    <div aria-hidden="true" className="px-5">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="h-px rounded-full bg-gradient-to-r from-transparent via-blue-400/50 to-transparent dark:via-cyan-300/40"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function SpotlightBackground() {
  const [position, setPosition] = useState({ x: 50, y: 20 });

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-70 dark:opacity-60"
      style={{
        background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(59,130,246,0.16), transparent 28rem)`,
      }}
    />
  );
}

function TypingHeroLine() {
  const words = ["Support IT N1/N2", "Helpdesk", "ITSM", "Applications métiers"];
  const [wordIndex, setWordIndex] = useState(0);
  const [letters, setLetters] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const delay = deleting ? 55 : 95;

    const timer = window.setTimeout(() => {
      if (!deleting && letters < current.length) {
        setLetters((value) => value + 1);
      } else if (!deleting && letters === current.length) {
        window.setTimeout(() => setDeleting(true), 900);
      } else if (deleting && letters > 0) {
        setLetters((value) => value - 1);
      } else if (deleting && letters === 0) {
        setDeleting(false);
        setWordIndex((value) => (value + 1) % words.length);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [letters, deleting, wordIndex]);

  return (
    <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white/80 px-5 py-3 text-sm font-black text-blue-800 shadow-xl shadow-blue-100 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-cyan-200 dark:shadow-none">
      <TerminalSquare className="h-4 w-4" />
      <span>{words[wordIndex].slice(0, letters)}</span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.9, repeat: Infinity }}
        className="h-4 w-0.5 bg-blue-700 dark:bg-cyan-200"
      />
    </div>
  );
}

function AnimatedCounter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 45;
    const start = performance.now();

    const animate = () => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (performance.now() - start < 1400 && progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function PortfolioStatsStrip() {
  const stats = [
    { value: 6, suffix: "", label: "projets documentés", icon: Rocket },
    { value: 2, suffix: "", label: "projets principaux", icon: Layers3 },
    { value: 10, suffix: "+", label: "outils & environnements", icon: Wrench },
    { value: 100, suffix: "%", label: "orienté support", icon: Headphones },
  ];

  return (
    <section className="px-5 py-10">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 text-center shadow-xl shadow-slate-100 backdrop-blur transition dark:border-white/10 dark:bg-white/5 dark:shadow-black/20"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100 dark:bg-cyan-400/10 dark:text-cyan-200 dark:ring-cyan-300/20">
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-4 text-4xl font-black text-slate-950 dark:text-white">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-black uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function ProjectFilterBar({ active, onChange, counts }) {
  const filters = [
    { id: "all", label: "Tout", count: counts.all },
    { id: "support", label: "Support / métier", count: counts.support },
    { id: "web", label: "Web", count: counts.web },
    { id: "desktop", label: "Desktop", count: counts.desktop },
    { id: "database", label: "Base de données", count: counts.database },
  ];

  return (
    <div className="mb-8 flex flex-wrap justify-center gap-3">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onChange(filter.id)}
          className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black transition duration-300 ease-out ${
            active === filter.id
              ? "bg-slate-950 text-white shadow-xl shadow-slate-200 dark:bg-white dark:text-slate-950 dark:shadow-none"
              : "bg-white text-slate-700 ring-1 ring-slate-200 hover:-translate-y-0.5 hover:bg-blue-50 dark:bg-white/5 dark:text-slate-200 dark:ring-white/10 dark:hover:bg-white/10"
          }`}
        >
          <Filter className="h-4 w-4" />
          {filter.label}
          <span className={`rounded-full px-2 py-0.5 text-xs ${active === filter.id ? "bg-white/20 dark:bg-slate-950/10" : "bg-slate-100 dark:bg-white/10"}`}>
            {filter.count}
          </span>
        </button>
      ))}
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const current = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(current);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[160] h-1 w-full bg-transparent">
      <motion.div
        className="h-full rounded-r-full bg-gradient-to-r from-blue-600 via-cyan-400 to-fuchsia-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 650);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          whileHover={{ y: -4 }}
          className="fixed bottom-24 right-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-slate-950 text-white shadow-2xl shadow-slate-300 ring-1 ring-white/10 transition dark:bg-white dark:text-slate-950 dark:shadow-black/30"
          aria-label="Retour en haut"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function SupportTerminalCard() {
  const lines = [
    "> analyse du ticket utilisateur...",
    "> diagnostic poste / compte / application",
    "> solution appliquée + suivi utilisateur",
    "> documentation prête pour l’équipe",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-200 dark:border-white/10 dark:shadow-black/30"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
        <span className="ml-3 text-xs font-black uppercase tracking-wide text-slate-400">
          support-it.sh
        </span>
      </div>

      <div className="space-y-3 p-6 font-mono text-sm font-bold text-cyan-200">
        {lines.map((line, index) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.14, duration: 0.35 }}
          >
            {line}
          </motion.p>
        ))}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="inline-block h-5 w-2 bg-cyan-300 align-middle"
        />
      </div>
    </motion.div>
  );
}

function RecruiterValueSection() {
  const values = [
    {
      title: "Support utilisateurs",
      text: "Accueil, qualification, diagnostic et résolution d’incidents N1/N2 avec une communication claire.",
      icon: Headphones,
    },
    {
      title: "Applications métiers",
      text: "Compréhension des outils internes, tests, remontées d’anomalies et accompagnement des utilisateurs.",
      icon: MonitorCog,
    },
    {
      title: "Documentation",
      text: "Rédaction de procédures, capitalisation des solutions et amélioration continue du support.",
      icon: ClipboardList,
    },
    {
      title: "Culture projet",
      text: "Capacité à concevoir, structurer et présenter des projets applicatifs avec base de données.",
      icon: Database,
    },
  ];

  return (
    <section id="apport" className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Ce que j’apporte"
          title="Un profil support IT qui comprend aussi les applications"
          subtitle="Cette section aide le recruteur à voir rapidement ta valeur en entreprise, au-delà de la liste d’outils."
          icon={Sparkles}
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.06, duration: 0.45, ease: "easeOut" }}
                  whileHover={{ y: -8, scale: 1.015 }}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-100 transition dark:border-white/10 dark:bg-white/5 dark:shadow-black/20"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100 dark:bg-cyan-400/10 dark:text-cyan-200 dark:ring-cyan-300/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <SupportTerminalCard />
        </div>
      </div>
    </section>
  );
}

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] grid place-items-center bg-slate-950 text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="px-6 text-center">
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto grid h-24 w-24 place-items-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 to-fuchsia-600 p-1 shadow-2xl shadow-blue-950/40"
        >
          <img
            src={profile.photo}
            alt="Samia Boutezrout"
            className="h-full w-full rounded-[1.75rem] object-cover"
          />
        </motion.div>

        <h1 className="mt-6 text-4xl font-black tracking-tight">Samia Boutezrout</h1>
        <p className="mt-2 font-black text-cyan-200">Portfolio Support IT</p>

        <div className="mx-auto mt-8 h-2 max-w-xs overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-300 to-fuchsia-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.35, ease: "easeInOut" }}
          />
        </div>

        <p className="mt-4 text-sm font-bold text-slate-400">Chargement du portfolio...</p>
      </div>
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-8 dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto flex max-w-[92rem] flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} {profile.name}. Portfolio support IT.</p>
        <div className="flex items-center gap-2 text-sm font-black text-blue-700 dark:text-cyan-300"><Sparkles className="h-4 w-4" /> Mode clair / sombre inclus</div>
      </div>
    </footer>
  );
}

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowLoader(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <main className={`${theme === "dark" ? "dark" : ""} min-h-screen scroll-smooth bg-white font-sans text-slate-900 selection:bg-cyan-100 selection:text-blue-950`}>
      <div className="relative min-h-screen overflow-x-hidden bg-white transition-colors duration-300 dark:bg-slate-950">
        <SpotlightBackground />
        <MagicParticlesBackground />
        <CursorGlowTrail />
        <ScrollProgress />
        <AnimatePresence>{showLoader && <LoadingScreen />}</AnimatePresence>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero theme={theme} toggleTheme={toggleTheme} />
        <PortfolioStatsStrip />
        <MagicDivider />
        <ValueSection />
        <RecruiterValueSection />
        <MagicDivider />
        <FutureSupportSection />
        <ProjectsSection />
        <MagicDivider />
        <RealisationsSection />
        <ExperienceSection />
        <StackSection />
        <EducationStrip />
        <ContactSection />
        <Footer />

        <BackToTopButton />

        <button onClick={toggleTheme} className="fixed bottom-5 left-5 z-40 hidden h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl shadow-slate-200 transition duration-300 ease-out hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:shadow-black/30 sm:inline-flex" aria-label="Changer le thème">
          {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </button>
        <a href={`mailto:${profile.email}?subject=Opportunité CDI Support IT - Samia Boutezrout`} className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-fuchsia-600 text-white shadow-2xl shadow-blue-200 transition duration-300 ease-out hover:-translate-y-1 dark:shadow-blue-950/30 sm:hidden" aria-label="Contacter Samia">
          <Mail className="h-6 w-6" />
        </a>
      </div>
    </main>
  );
}
