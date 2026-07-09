export interface SkillCategory {
  id: number;
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 1,
    title: "Backend",
    skills: [
      ".NET 10",
      "ASP.NET Core",
      "C#",
      "Entity Framework Core",
      "REST APIs",
      "SQL Server",
      "PostgreSQL"
    ]
  },

  {
    id: 2,
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript"
    ]
  },

  {
    id: 3,
    title: "Cloud & DevOps",
    skills: [
      "Docker",
      "Git",
      "GitHub Actions",
      "Render",
      "Vercel",
      "CI/CD"
    ]
  },

  {
    id: 4,
    title: "Currently Exploring",
    skills: [
      "OpenAI",
      "RAG",
      "AI Agents",
      "Prompt Engineering",
      "Vector Databases"
    ]
  }
];