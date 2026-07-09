export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;

  technologies: string[];

  github: string;
  live: string;

  image: string;
}

export const projects: Project[] = [
  {
    id: 1,

    title: "Vendor Risk Lens",

    subtitle: "Enterprise Vendor Risk Management Platform",

    description:
      "A full-stack enterprise platform for managing vendor risks, incidents, users and audit logs with JWT authentication, dashboards and AI-powered insights.",

    technologies: [
      ".NET 10",
      "React",
      "PostgreSQL",
      "Docker",
      "JWT",
      "EF Core"
    ],

    github:
      "https://github.com/anusharajeshdev-design/vendor-risk-lens",

    live:
      "",

    image:
      "/projects/vrl.png"
  },

  {
    id: 2,

    title: "ReqIntel AI",

    subtitle: "AI Requirement Intelligence",

    description:
      "An AI-powered platform that analyses requirement documents, extracts insights and enables intelligent Q&A using Retrieval Augmented Generation (RAG).",

    technologies: [
      ".NET 10",
      "React",
      "OpenAI",
      "RAG",
      "Vector Search"
    ],

    github:
      "https://github.com/anusharajeshdev-design/reqintel-ai",

    live:
      "",

    image:
      "/projects/reqintel.png"
  }
];