
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
