export const siteConfig = {
  name: "Abhinav Kumar",
  title: "Abhinav Kumar",
  description:
    "Abhinav Kumar is a Computer Science and Engineering undergraduate specializing in AI & Machine Learning at Sreyas Institute of Engineering and Technology, Hyderabad. Focused on Artificial Intelligence, Machine Learning, Deep Learning, Data Analytics, and Bioinformatics.",
  url: "https://abhinavkumar.dev",
  location: "Hyderabad, India",
  email: "pathiabhinavkumar@gmail.com",
  altEmail: "abhinavkumar4902@gmail.com",
  tagline: "Building intelligent systems. Following questions.",
  descriptor: "AI · ML · DL · Data Analytics · Bioinformatics",
  intro:
    "I build predictive models, explore deep learning and data analytics, and engineer systems connecting computational intelligence with bioinformatics and real-world data.",
  availability: "Open to AI/ML internships, jobs, freelancing & research collaborations",
  portrait: "/images/abhinav.jpg",
  portraitAlt: "Abhinav Kumar",
};

export const corePillars = [
  { label: "AI", tag: "Artificial Intelligence", color: "from-teal-400 to-emerald-400" },
  { label: "ML", tag: "Machine Learning", color: "from-sky-400 to-blue-500" },
  { label: "DL", tag: "Deep Learning", color: "from-indigo-400 to-purple-500" },
  { label: "Data Analytics", tag: "Predictive & Exploratory", color: "from-emerald-400 to-teal-500" },
  { label: "Bioinformatics", tag: "Computational Life Sciences", color: "from-teal-300 to-cyan-400" },
];

export const socialLinks = {
  github: "https://github.com/abhinavkumar-15",
  linkedin: "https://www.linkedin.com/in/pathiabhinavkumar/",
  leetcode: "https://leetcode.com/u/abhinavkumar_15/",
  email: `mailto:${siteConfig.email}`,
  altEmail: `mailto:${siteConfig.altEmail}`,
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Milestones", href: "#milestones" },
  { label: "Beyond", href: "#beyond" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  dataAndML: {
    title: "AI & Machine Learning",
    items: [
      { name: "Scikit-learn", status: "applied" },
      { name: "Random Forests & Trees", status: "applied" },
      { name: "Model Evaluation & LOBO CV", status: "applied" },
      { name: "SHAP Explainability", status: "applied" },
    ],
  },
  deepLearning: {
    title: "Deep Learning & Neural Architectures",
    items: [
      { name: "Neural Network Modeling", status: "applied" },
      { name: "Multi-Horizon Time-Series", status: "applied" },
      { name: "Deep Learning Architectures", status: "learning" },
      { name: "Physics-Informed ML", status: "applied" },
    ],
  },
  dataAnalytics: {
    title: "Data Analytics & Numerical Computing",
    items: [
      { name: "Pandas", status: "core" },
      { name: "NumPy", status: "core" },
      { name: "Matplotlib & Visualization", status: "core" },
      { name: "Exploratory Data Analysis (EDA)", status: "applied" },
    ],
  },
  bioinformatics: {
    title: "Bioinformatics & Computational Biology",
    items: [
      { name: "BioPython", status: "learning" },
      { name: "Biological Data Analysis", status: "learning" },
      { name: "Healthcare AI Diagnostics", status: "applied" },
      { name: "Genomic Sequence Exploration", status: "learning" },
    ],
  },
  languages: {
    title: "Core Programming",
    items: [
      { name: "Python", status: "core" },
      { name: "SQL", status: "core" },
      { name: "Java", status: "core" },
      { name: "C", status: "core" },
    ],
  },
  databases: {
    title: "Databases & Data Stores",
    items: [
      { name: "PostgreSQL", status: "applied" },
      { name: "MySQL", status: "applied" },
      { name: "Aurora PostgreSQL", status: "internship" },
      { name: "Relational Indexing", status: "internship" },
    ],
  },
  cloudAndRobotics: {
    title: "Cloud & Intelligent Systems",
    items: [
      { name: "AWS RDS & CloudWatch", status: "internship" },
      { name: "ROS 2 & Autonomous Nav", status: "internship" },
      { name: "Gazebo & SLAM", status: "internship" },
      { name: "NetworkX Graph Analysis", status: "project" },
    ],
  },
  tools: {
    title: "Tooling & Workflow",
    items: [
      { name: "Git & Version Control", status: "core" },
      { name: "VS Code", status: "core" },
      { name: "n8n Workflow Automation", status: "applied" },
      { name: "Anti-Gravity", status: "applied" },
    ],
  },
};

export const projects = [
  {
    id: "smart-grid",
    number: "01",
    title: "Smart Grid Energy Distribution System",
    category: "Graph Analytics · Algorithmic Optimization",
    type: "Data & Systems Project",
    summary:
      "A graph-based optimization model routing power through dynamic constraints to minimize transmission losses.",
    details: [
      "Modeled electrical grids with NetworkX, dynamically balancing power between generation buses, substations, and critical nodes.",
      "Applied constrained shortest-path algorithms, reducing peak transmission losses by an estimated 18%.",
    ],
    technologies: ["Python", "NetworkX", "Matplotlib", "Graph Analytics"],
    github: "https://github.com/abhinavkumar-15/Smart-Grid-Energy-DIstribution-System",
  },
  {
    id: "ev-battery-degradation",
    number: "02",
    title: "EV Battery Degradation & RUL Prediction",
    subtitle: "VoltGuard AI",
    category: "Machine Learning · Deep Analytics · Diagnostics",
    type: "Machine Learning System",
    summary:
      "An end-to-end ML framework predicting battery State of Health (SOH) and Remaining Useful Life (RUL).",
    details: [
      "Trained on empirical cycler aging telemetry with LOBO cross-validation, predicting degradation across 5 to 50 future cycles.",
      "Integrated SHAP explainability and deployed a live FastAPI backend with responsive analytics dashboard.",
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "FastAPI",
      "React",
      "Tailwind CSS",
      "SHAP",
      "Degradation Telemetry",
    ],
    github: "https://github.com/abhinavkumar-15/ev-battery-degradation",
    demo: "https://ev-battery-degradation.vercel.app",
  },
  {
    id: "thryve-blog",
    number: "03",
    title: "Thryve",
    subtitle: "Custom Digital Publishing Platform & Essays on Life",
    category: "Web Application · Digital Publishing · Self-Authored Writing",
    type: "Web Application & Personal Platform",
    summary:
      "A custom web publishing platform engineered to host my self-authored essays exploring life and the human experience.",
    details: [
      "Built and deployed on Firebase with dedicated author/reader workspaces, search, and dynamic multi-tag filtering.",
      "Hosts self-authored reflective essays on the soul, love, morals, and growth including 'Searching The Soul'.",
    ],
    technologies: ["Web Platform", "Firebase", "Reader Architecture", "Content Indexing", "Self-Authored Essays"],
    demo: "https://thryve-blog.web.app/",
  },
];

export const milestones = [
  {
    year: "2026",
    items: [
      {
        title: "Cloud & Data Intern",
        organization: "Core Defender AI",
        period: "June 2026 – August 2026",
        type: "internship" as const,
        description:
          "Contributed to the data pipeline and cloud infrastructure for a Wearable Devices Platform. Designed relational database schemas, optimized indexing strategies, and validated PostgreSQL migrations for scalable data ingestion.",
        technologies: [
          "AWS RDS",
          "Aurora PostgreSQL",
          "Amazon CloudWatch",
          "Amazon SNS",
          "AWS CLI",
        ],
      },
      {
        title: "Robotics & Autonomous Systems Intern",
        organization: "Yotzeron",
        period: "July 2026 – October 2026",
        type: "internship" as const,
        description:
          "Developed an autonomous mobile robot using ROS 2. Built and tested a complete robotics pipeline involving Gazebo simulation, sensor integration, SLAM localization, Nav2 path planning, and autonomous movement.",
        technologies: ["ROS 2", "Gazebo", "SLAM", "Nav2"],
      },
      {
        title: "Scopus Research Publication (In Pipeline)",
        organization: "International Journal of Engineering Management (IJEM)",
        period: "2026",
        type: "research" as const,
        description:
          "Research paper in Scopus-indexed journal (IJEM). Currently in pipeline; verified links and citations to be added upon formal indexing.",
        technologies: [],
      },
      {
        title: "Honoured at Green Growth Economic Summit",
        organization: "HICC, Hyderabad",
        period: "2026",
        type: "certification" as const,
        description:
          "Conferred student honour for active participation and dialogue amongst multiple colleges, recognized by international delegates.",
        technologies: ["Green Economics", "Inter-Collegiate Leadership"],
      },
      {
        title: "Certification in Modern AI",
        organization: "Cisco Learning Academy",
        period: "February 2026",
        type: "certification" as const,
        description: "Completed certification in Introduction to Modern AI.",
        technologies: [],
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "B.Tech in Computer Science & Engineering (AI/ML)",
        organization: "Sreyas Institute of Engineering and Technology",
        period: "September 2024 – June 2028",
        type: "education" as const,
        description:
          "Undergraduate specializing in Artificial Intelligence and Machine Learning.",
        technologies: [],
      },
    ],
  },
];

export const achievements = [
  {
    title: "Student Honour — Green Growth Economic Summit 2026",
    description:
      "Conferred student honour at HICC, Hyderabad for active inter-collegiate engagement, recognized by international delegates.",
  },
  {
    title: "Ideathon Winner — StockPro",
    description: "Led team winning ideathon for the market analytics architecture of StockPro.",
  },
  {
    title: "Event Manager — Sreyas Developers Conference",
    description: "Managed logistics and scheduling for the flagship technical conference.",
  },
  {
    title: "TEDx & Campus Events Organizer",
    description:
      "Core organizing team member for major campus events, including the official TEDx conference.",
  },
];

export const beyondTheCode = [
  {
    title: "Athletics & Racket Sports",
    subtitle: "Tennis · Table Tennis · Tactical Discipline",
    description:
      "Competitive table tennis player with college tournament podium finishes, honing rapid reflexes and composure. Avid lawn tennis follower and huge Novak Djokovic fan, drawn to his unmatched mental grit and baseline precision.",
    badge: "Award-Winning Competitor",
    icon: "racquet" as const,
  },
  {
    title: "Creative Writing & Thryve",
    subtitle: "Custom Platform & Essays on Life",
    description:
      "Engineered Thryve as an independent publishing platform for my self-authored essays on life, purpose, and growth—bridging modern web engineering with reflective creative inquiry.",
    badge: "thryve-blog.web.app",
    link: "https://thryve-blog.web.app/",
    icon: "pen" as const,
  },
  {
    title: "Indian Classical Music & Arts",
    subtitle: "Sitar · Live Performances · Heritage Tradition",
    description:
      "Devoted admirer of the sitar, live classical recitals, and traditional Indian arts. Classical music provides a meditative rhythm that deepens patience, nuance, and focus in technical work.",
    badge: "Patron of Classical Arts",
    icon: "music" as const,
  },
];
