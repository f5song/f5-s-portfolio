import { NextResponse, NextRequest } from "next/server";

interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  challenges: string[];
  learnings: string[];
  futureImprovements: string[];
}

const projectsData: Record<string, Project> = {
  Connextra: {
    title: "Connextra",
    description:
      "An online chat web application supporting real-time messaging with a responsive UI. The system utilizes AWS services, including EC2 for hosting and RDS for database management, ensuring scalability and efficiency.",
    images: ["/images/connextra/1.png", "/images/connextra/2.png", "/images/connextra/3.png","/images/connextra/4.png","/images/connextra/5.png","/images/connextra/6.png"],
    technologies: ["TypeScript", "JavaScript", "Node.js", "React", "Socket.IO", "AWS", "RDS"],
    githubLink: "https://github.com/Chinjuku/ConnextrA-Server",
    challenges: [
      "Implementing real-time communication with WebSockets",
      "Managing complex state across multiple users and chat rooms",
      "Ensuring data consistency and handling race conditions",
    ],
    learnings: [
      "Deepened understanding of WebSocket protocol and real-time applications",
      "Improved state management techniques in complex React applications",
      "Enhanced skills in building scalable backend architectures",
    ],
    futureImprovements: [
      "Implement end-to-end encryption for enhanced privacy",
      "Add voice and video call features",
      "Develop mobile applications for iOS and Android",
    ],
  },
  Job4All: {
    title: "Job4All",
    description:
      "An Android application designed to help individuals with disabilities find jobs. The platform provides job recommendations, filters for job searches, and an easy application process.",
    images: ["/images/job4all/1.png", "/images/job4all/2.png", "/images/job4all/3.png", "/images/job4all/4.png", "/images/job4all/5.png", "/images/job4all/6.png", "/images/job4all/7.png", "/images/job4all/8.png"],
    technologies: ["React Native (Expo)", "Node.js", "MongoDB"],
    githubLink: "https://github.com/f5song/Job4All",
    challenges: [
      "Ensuring accessibility and usability for people with disabilities",
      "Optimizing job recommendation algorithms",
    ],
    learnings: [
      "Improved knowledge of mobile development with React Native",
      "Gained experience in building accessible applications",
    ],
    futureImprovements: [
      "Expand job matching algorithm for better recommendations",
      "Integrate AI for skill-based job suggestions",
    ],
  },
  Shopdee: {
    title: "Shopdee",
    description:
      "An e-commerce web application for buying and selling new and second-hand products. The system features user authentication, secure payment integration, and an interactive shopping experience.",
    images: ["/images/shopdee/1.png", "/images/shopdee/2.png", "/images/shopdee/3.png", "/images/shopdee/4.png", "/images/shopdee/5.png", "/images/shopdee/6.png"],
    technologies: ["Python (Django)", "HTML", "CSS", "Tailwind", "PostgreSQL"],
    githubLink: "https://github.com/Pisol00/shopdee/tree/branch-2",
    challenges: [
      "Managing transactions securely",
      "Optimizing product recommendation and search features",
    ],
    learnings: [
      "Improved knowledge of e-commerce system architecture",
      "Gained experience in integrating third-party payment systems",
    ],
    futureImprovements: [
      "Implement AI-driven product recommendations",
      "Enhance search and filtering capabilities",
    ],
  },
  RodRudee: {
    title: "RodRudee",
    description:
      "A restaurant management web application allowing users to place orders, track order statuses, and manage menus via an admin panel.",
    images: ["/images/rodrudee/1.png", "/images/rodrudee/2.png", "/images/rodrudee/3.png", "/images/rodrudee/4.png", "/images/rodrudee/5.png", "/images/rodrudee/6.png", "/images/rodrudee/7.png"],
    technologies: ["PHP", "HTML", "CSS", "Bootstrap", "MySQL"],
    githubLink: "https://github.com/f5song/rodrudee",
    challenges: [
      "Implementing real-time order tracking",
      "Managing database relations efficiently",
    ],
    learnings: [
      "Improved database design and query optimization",
      "Enhanced knowledge of backend development in PHP",
    ],
    futureImprovements: [
      "Add real-time notifications for order updates",
      "Integrate POS system for better restaurant management",
    ],
  },
  ILandedAirline: {
    title: "I Landed Airline",
    description:
      "An airline ticket booking website that allows users to search for flights, compare ticket prices, book tickets, and select their seats.",
    images: ["/images/ilandedairline/1.png", "/images/ilandedairline/2.png", "/images/ilandedairline/3.png", "/images/ilandedairline/4.png", "/images/ilandedairline/5.png", "/images/ilandedairline/6.png", "/images/ilandedairline/7.png", "/images/ilandedairline/8.png"],
    technologies: ["PHP", "HTML", "CSS", "MySQL"],
    githubLink: "https://github.com/sStoowie/ISAD-ilal",
    challenges: [
      "Implementing an efficient flight search system",
      "Handling seat selection and availability updates",
    ],
    learnings: [
      "Improved knowledge of relational database management",
      "Enhanced understanding of building reservation systems",
    ],
    futureImprovements: [
      "Add real-time flight tracking integration",
      "Improve user experience with a more dynamic UI",
    ],
  },
}

export async function GET(req: NextRequest, context: { params: { slug?: string } }) {
  const slug = context.params?.slug; // ✅ ตรวจสอบ params ก่อนใช้

  if (!slug || !projectsData[slug]) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(projectsData[slug]);
}

