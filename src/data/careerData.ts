export interface CareerExperience {
  id: number;
  year: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  side: "left" | "right";
  highlights: string[];
}

export const careerData: CareerExperience[] = [
  {
    id: 1,
    year: "2025",
    title: "Senior Software Engineer",
    company: "Sparient Global LLP",
    location: "Chennai, India",
    duration: "Feb 2025 – Present",
    side: "left",
    highlights: [
      "Develop enterprise ASP.NET Core Web APIs supporting report generation workflows.",
      "Implement role-based access control and configuration-driven business modules.",
      "Map relational database schema changes into scalable C# backend services.",
      "Collaborate with internal teams to deliver production-ready enterprise features."
    ]
  },

  {
    id: 2,
    year: "2024",
    title: "Software Developer",
    company: "Ducen – Orion Innovation",
    location: "Chennai, India",
    duration: "Jan 2024 – Jan 2025",
    side: "right",
    highlights: [
      "Engineered scalable ASP.NET Core applications for enterprise clients.",
      "Optimised SQL queries and stored procedures, improving performance by 30%.",
      "Designed and integrated RESTful APIs supporting core business workflows.",
      "Enhanced Entity Framework data access and participated in Agile delivery and code reviews."
    ]
  },

  {
    id: 3,
    year: "2021",
    title: "Associate Software Developer",
    company: "Ducen – Orion Innovation",
    location: "Chennai, India",
    duration: "Nov 2021 – Dec 2023",
    side: "left",
    highlights: [
      "Developed ASP.NET Core applications alongside cross-functional engineering teams.",
      "Worked on schema design, SQL optimisation and backend business logic.",
      "Built Web APIs, document generation modules and automated email workflows.",
      "Collaborated with frontend developers to integrate backend services."
    ]
  },

  {
    id: 4,
    year: "2021",
    title: "Intern",
    company: "Ducen – Orion Innovation",
    location: "Chennai, India",
    duration: "May 2021 – Oct 2021",
    side: "right",
    highlights: [
      "Completed intensive training in SQL, HTML, CSS and JavaScript.",
      "Developed an Event Management System applying newly acquired skills.",
      "Assisted with stored procedure development for multiple business modules."
    ]
  }
];