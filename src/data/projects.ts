export interface Project {
  slug: string;
  title: string;
  heroTags: string[];
  cardTags: string[];
  cardDesc: string;
  lead: string;
  overview: string[];
  features: string[];
  tech: string[];
  role: string;
  bg: string;
  icon: string;
  preview: string;
  placeholder: string;
}

export const projects: Project[] = [
  {
    slug: "shopzilla",
    title: "Shopzilla",
    heroTags: ["Application", "Project", "Mobile / App"],
    cardTags: ["Application", "Project"],
    cardDesc:
      "A project application focused on delivering a smooth, modern shopping experience. Designed with clean flows, intuitive navigation, and a user-first mindset to make digital commerce feel effortless.",
    lead: "A project application focused on delivering a smooth, modern shopping experience — clean flows, intuitive navigation, and a user-first mindset.",
    overview: [
      "Shopzilla is a project application designed to make digital commerce feel effortless. The focus was on clear product discovery, simple checkout paths, and a polished interface that feels modern without overwhelming the user.",
      "Built as a hands-on learning project, it explores real-world app patterns: navigation structure, product cards, cart flow, and responsive layout thinking.",
    ],
    features: [
      "Clean product browsing experience",
      "Intuitive navigation & user flows",
      "Modern, readable UI design",
      "User-first interaction patterns",
      "Structured app architecture practice",
    ],
    tech: ["App Design", "UI / UX", "Prototyping", "Problem Solving"],
    role: "Solo project — concept, design direction, and implementation as a learning build.",
    bg: "bg-shopzilla.png",
    icon: "shopzilla.png",
    preview: "bg-shopzilla.png",
    placeholder: "🛒",
  },
  {
    slug: "registrack",
    title: "RegisTrack",
    heroTags: ["Web Project", "System", "Registration"],
    cardTags: ["Web Project", "System"],
    cardDesc:
      "A web-based registration and tracking system built for clarity and efficiency. Handles data flow, user management, and real-time status updates with a clean, understandable interface.",
    lead: "A web-based registration and tracking system built for clarity and efficiency — data flow, user management, and status updates in a clean interface.",
    overview: [
      "RegisTrack is a web system designed to handle registration processes and track records in an organized, reliable way. The goal was a clear interface that makes managing entries and viewing status simple for users.",
      "The project focuses on structured data handling, readable layouts, and practical workflows that mirror real registration and tracking needs.",
    ],
    features: [
      "Registration form & data capture",
      "Status tracking & record views",
      "User-friendly web interface",
      "Organized data flow design",
      "Clear, understandable UI",
    ],
    tech: ["HTML / CSS", "JavaScript", "Web Systems", "UI Design"],
    role: "Web project — design and development of the registration and tracking experience.",
    bg: "R-Background.png",
    icon: "RegisTrack.png",
    preview: "R-Background.png",
    placeholder: "📋",
  },
];
