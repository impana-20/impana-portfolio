import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  python,
  PubSub,
  gcp,
  BigQuery,
  cloudstorage,
  sql,
  s3,
  IAM,
  git,
  EC2,
  machinelearning,
  PizzaHub,
  EnHanz,
  pythonwebdata,
  webdev,
  os,
  ethicalhacking,
  Dataflow,
  CloudCostAI,
  Earvan,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Cloud Engineer",
    icon: web,
  },
  {
    title: "Data Engineer",
    icon: mobile,
  },
  {
    title: "AI / ML Enthusiast",
    icon: backend,
  },
  {
    title: "ETL Pipeline Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Google Cloud Platform",
    icon: gcp,
  },
  {
    name: "BigQuery",
    icon: BigQuery,
  },
  {
    name: "Pub/Sub",
    icon: PubSub,
  },
  {
    name: "Dataflow (Apache Beam)",
    icon: Dataflow,
  },
  {
    name: "Cloud Storage",
    icon: cloudstorage,
  },
  {
    name: "AWS S3",
    icon: s3,
  },
  {
    name: "AWS EC2",
    icon: EC2,
  },
  {
    name: "IAM",
    icon: IAM,
  },
  {
    name: "Machine Learning",
    icon: machinelearning,
  },
  {
    name: "Git & GitHub",
    icon: git,
  },
];

const experiences: TExperience[] = [
 {
  title: "AI-Powered Cloud Cost Anomaly Detection System",
  role: "AI-Driven Cloud Analytics Developer",
  icon: CloudCostAI,
  iconBg: "#E6DEDD",
  date: "2026",
  points: [
    "Developed an intelligent system to monitor and analyze cloud billing data for detecting unusual cost spikes using machine learning techniques.",
    "Implemented cost anomaly classification into risk levels (low, medium, high) to enable proactive cloud budget monitoring.",
    "Designed interactive dashboards and visualizations to provide actionable insights for optimizing cloud resource usage and spending.",
    "Built predictive models to estimate future cloud costs based on historical billing trends.",
    "Created a simulation feature to support proactive decision-making and cost optimization strategies in cloud environments."
  ],
},
 {
    title: "Earvan",
    role: "Full Stack & AI Developer",
    icon: Earvan,
    iconBg: "#E6DEDD",
    date: "Jan 2026",
    points: [
     "Developed a Flutter application to detect and manage dysgraphia in children using handwriting analysis and IQ testing.",
    "Integrated Firebase services including Authentication, Firestore database, and Storage for secure data management.",
    "Implemented an AI-powered handwriting analysis system using a FastAPI backend with Python.",
    "Built interactive learning features such as letter tracing, dot joining, and word copying practice games.",
    "Designed an AI chatbot (HandyBot) to guide users and provide support within the application.",
  ],
  },
  {
    title: "En-HanZ - Dysgraphia Detection System",
    role: "Mobile App & AI Developer",
    icon: EnHanz,
    iconBg: "#383E56",
    date: "November 2025",
    points: [
      "Developed a Flutter application to detect and manage dysgraphia in children using handwriting analysis and IQ testing.",
    "Integrated Firebase services including Authentication, Firestore database, and Storage for secure data management.",
    "Implemented an AI-powered handwriting analysis system using a FastAPI backend with Python.",
    "Built interactive learning features such as letter tracing, dot joining, and word copying practice games.",
    "Designed an AI chatbot (HandyBot) to guide users and provide support within the application.",
  ],
  },
  
  {
    title: "Pizza-Hub (FoodieHub)",
    role: "Frontend Developer",
    icon: PizzaHub,
    iconBg: "#1d1818",
    date: "Jan 2024",
    points: [
     "Developed a responsive food ordering website for a fast-food or pizza delivery service using HTML5 and CSS3.",
    "Designed multiple pages including About, Cart, and Checkout to simulate a real online food ordering experience.",
    "Implemented a clean and user-friendly UI with responsive layouts that work across desktop, tablet, and mobile devices.",
    "Structured the project with organized assets and product images to enhance visual appeal and usability.",
    "Built the project as a frontend prototype that can later be extended with backend integration and payment gateway support."
  ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    role: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    role: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    role: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
 {
  name: "Introduction to Web Development with HTML, CSS, JavaScript",
  description:
    `Completed an IBM-authorized Coursera course covering core web development fundamentals including HTML, CSS, and JavaScript for building modern responsive web applications.`,
  tags: [
    {
      name: "web-development",
      color: "blue-text-gradient",
    },
    {
      name: "ibm",
      color: "green-text-gradient",
    },
    {
      name: "coursera",
      color: "pink-text-gradient",
    },
  ],
  image: webdev,
  sourceCodeLink: "https://www.coursera.org/account/accomplishments/verify/KWZ9D6B36HO7",
},

{
  name: "Operating Systems Fundamentals",
  description:
    `Completed Akamai Technical Academy's Operating Systems Fundamentals course covering process management, memory handling, system architecture, and OS-level resource management concepts.`,
  tags: [
    {
      name: "operating-systems",
      color: "blue-text-gradient",
    },
    {
      name: "akamai",
      color: "green-text-gradient",
    },
    {
      name: "systems",
      color: "pink-text-gradient",
    },
  ],
  image: os,
  sourceCodeLink: "https://www.coursera.org/account/accomplishments/verify/0OXFLCDFFPKE",
},

{
  name: "Ethical Hacking Fundamentals",
  description:
    `Completed Ethical Hacking Fundamentals training covering cybersecurity principles, vulnerability awareness, and foundational penetration testing concepts.`,
  tags: [
    {
      name: "cybersecurity",
      color: "blue-text-gradient",
    },
    {
      name: "ethical-hacking",
      color: "green-text-gradient",
    },
    {
      name: "security",
      color: "pink-text-gradient",
    },
  ],
  image: ethicalhacking,
  sourceCodeLink: "https://www.coursera.org/account/accomplishments/verify/PEE0Q7P0AD0X",
},

{
  name: "Using Python to Access Web Data",
  description:
    `Completed University of Michigan's Coursera course focused on extracting, processing, and analyzing web-based data using Python for real-world data engineering workflows.`,
  tags: [
    {
      name: "python",
      color: "blue-text-gradient",
    },
    {
      name: "data-processing",
      color: "green-text-gradient",
    },
    {
      name: "coursera",
      color: "pink-text-gradient",
    },
  ],
  image: pythonwebdata,
  sourceCodeLink: "https://www.coursera.org/account/accomplishments/verify/EL8JVA8L5M40",
},
];

export { services, technologies, experiences, testimonials, projects };
