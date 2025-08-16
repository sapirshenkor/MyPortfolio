import { useState, useEffect } from "react";

const API_BASE_URL = "https://myportfolio-production-c06f.up.railway.app";

export const useApi = (endpoint, options = {}) => {
  /**
     Custom hook for making API requests with loading, error, and success states.
     Automatically handles Railway deployment status and provides fallback data.
     */
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
          headers: {
            "Content-Type": "application/json",
            ...options.headers,
          },
          ...options,
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("API Error:", error);
        setError(error);

        console.log("using fallback data");

        if (endpoint === "/api/projects") {
          setData([
            {
              id: 1,
              title: "E-Commerce Platform",
              description:
                "Full-stack e-commerce solution with FastAPI backend and React frontend",
              tech_stack: ["Python", "FastAPI", "React", "PostgreSQL"],
              github_url: "https://github.com/sapirshenkor",
              live_url: "https://ecommerce-demo.vercel.app",
              featured: true,
              image_url:
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
            },
            {
              id: 2,
              title: "Task Management App",
              description:
                "Real-time task management with user authentication and notifications",
              tech_stack: ["FastAPI", "React", "WebSockets", "MongoDB"],
              github_url: "https://github.com/sapirshenkor",
              live_url: "https://taskapp-demo.vercel.app",
              featured: true,
              image_url:
                "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
            },
            {
              id: 3,
              title: "Weather Dashboard",
              description:
                "Beautiful weather dashboard with forecasts and location search",
              tech_stack: ["React", "TypeScript", "Weather API", "Chart.js"],
              github_url: "https://github.com/sapirshenkor",
              live_url: "https://weather-demo.vercel.app",
              featured: false,
              image_url:
                "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
            },
          ]);
        } else if (endpoint === "/api/skills") {
          setData([
            {
              category: "Backend",
              items: ["Python", "FastAPI", "PostgreSQL", "Railway", "Redis"],
            },
            {
              category: "Frontend",
              items: [
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
              ],
            },
            {
              category: "Design",
              items: ["UI/UX", "Figma", "Responsive Design", "Accessibility"],
            },
          ]);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);
  return { data, loading, error };
};
