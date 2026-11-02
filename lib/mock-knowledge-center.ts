
import type { Category } from "@/types/category";

export type Course = {
  id: string;
  title: string;
  description: string;
  type: "Guide" | "Tutorial" | "Documentation";
  level: string;
  duration: string;
  image: string;
  category: string;
};

export const MOCK_CATEGORIES: Category[] = [
  {
    id: "mock-frontend",
    name: "Frontend",
    resourceCount: 12,
    imageId: null,
    image: null,
  },
  {
    id: "mock-backend",
    name: "Backend",
    resourceCount: 10,
    imageId: null,
    image: null,
  },
  {
    id: "mock-database",
    name: "Database",
    resourceCount: 8,
    imageId: null,
    image: null,
  },
  {
    id: "mock-aiml",
    name: "AI & ML",
    resourceCount: 6,
    imageId: null,
    image: null,
  },
  {
    id: "mock-cloud",
    name: "Cloud Computing",
    resourceCount: 7,
    imageId: null,
    image: null,
  },
  {
    id: "mock-devops",
    name: "DevOps",
    resourceCount: 5,
    imageId: null,
    image: null,
  },
];

export const MOCK_COURSES: Course[] = [
  {
    id: "1",
    title: "HTML & CSS Fundamentals",
    description: "Learn HTML and CSS fundamentals.",
    type: "Tutorial",
    level: "Beginner",
    duration: "4 hours",
    image: "/images/frontend.png",
    category: "Frontend",
  },
  {
    id: "2",
    title: "JavaScript for Beginners",
    description: "Learn JavaScript and interactive websites.",
    type: "Guide",
    level: "Beginner",
    duration: "6 hours",
    image: "/images/javascript.png",
    category: "Frontend",
  },
  {
    id: "3",
    title: "React Complete Guide",
    description: "Learn React components, hooks and state.",
    type: "Tutorial",
    level: "Intermediate",
    duration: "8 hours",
    image: "/images/react.png",
    category: "Frontend",
  },
  {
    id: "4",
    title: "Database Management Basics",
    description: "Learn SQL and database concepts.",
    type: "Documentation",
    level: "Beginner",
    duration: "5 hours",
    image: "/images/database.png",
    category: "Database",
  },
  {
    id: "5",
    title: "Node.js Fundamentals",
    description: "Understand server-side development.",
    type: "Guide",
    level: "Intermediate",
    duration: "5 hours",
    image: "/images/backend.png",
    category: "Backend",
  },
  {
    id: "6",
    title: "Machine Learning Introduction",
    description: "Understand machine learning concepts.",
    type: "Documentation",
    level: "Beginner",
    duration: "4 hours",
    image: "/images/aiml.png",
    category: "AI & ML",
  },
  {
    id: "7",
    title: "Cloud Computing Essentials",
    description: "Learn cloud infrastructure and services.",
    type: "Tutorial",
    level: "Beginner",
    duration: "5 hours",
    image: "/images/cloud.png",
    category: "Cloud Computing",
  },
  {
    id: "8",
    title: "DevOps Fundamentals",
    description: "Learn CI/CD and DevOps workflows.",
    type: "Guide",
    level: "Beginner",
    duration: "3 hours",
    image: "/images/devops.png",
    category: "DevOps",
  },
];


export type RecentResource = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  added: string;
  type: string;
  content: string;
};

export const MOCK_RECENT_RESOURCES: RecentResource[] = [
  {
    id: "resource-1",
    title: "Getting Started with React",
    description: "Learn the fundamentals of React and modern UI development.",
    category: "Frontend",
    image: "/images/frontend.png",
    added: "2 hours ago",
    type: "Guide",
    content: "React is a JavaScript library for building user interfaces. It uses components, props, state and hooks to create interactive applications."
  },
  {
    id: "resource-2",
    title: "Node.js Backend Fundamentals",
    description: "Understand backend development using Node.js and APIs.",
    category: "Backend",
    image: "/images/backend.png",
    added: "5 hours ago",
    type: "Documentation",
    content: "Node.js allows developers to execute JavaScript outside the browser. It is commonly used to build APIs and server-side applications."
  },
  {
    id: "resource-3",
    title: "Database Design Basics",
    description: "Learn database design and relationships.",
    category: "Database",
    image: "/images/database.png",
    added: "Yesterday",
    type: "Guide",
    content: "Database design involves organizing data into tables, defining relationships and maintaining data integrity."
  },
  {
    id: "resource-4",
    title: "Introduction to Machine Learning",
    description: "A beginner-friendly introduction to machine learning.",
    category: "AI & ML",
    image: "/images/aiml.png",
    added: "Yesterday",
    type: "Tutorial",
    content: "Machine learning is a field of AI where systems learn patterns from data to make predictions or decisions."
  },
  {
    id: "resource-5",
    title: "Cloud Computing Essentials",
    description: "Explore cloud computing and deployment models.",
    category: "Cloud Computing",
    image: "/images/cloud.png",
    added: "2 days ago",
    type: "Documentation",
    content: "Cloud computing provides computing services such as storage, servers and databases over the internet."
  },
  {
    id: "resource-6",
    title: "Introduction to DevOps",
    description: "Understand DevOps practices and continuous delivery.",
    category: "DevOps",
    image: "/images/devops.png",
    added: "3 days ago",
    type: "Guide",
    content: "DevOps combines development and operations practices to improve collaboration, automation and software delivery."
  }
];
