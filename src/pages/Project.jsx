import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Tourism Management System",
    description: "A MERN stack app for managing tours, bookings, and payments.",
    icon: <FaReact className="text-blue-500 text-4xl" />,
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "AI Chatbot",
    description: "An AI-powered chatbot that answers from a custom knowledge base.",
    icon: <FaNodeJs className="text-green-500 text-4xl" />,
    tech: ["Node.js", "Express", "OpenAI API"]
  },
  {
    id: 3,
    title: "E-commerce Dashboard",
    description: "Responsive admin panel with analytics and inventory management.",
    icon: <FaDatabase className="text-yellow-500 text-4xl" />,
    tech: ["MongoDB", "Express", "React"]
  }
];

export default function ProjectsShowcase() {
  return (
    <section className="py-12 my-2 rounded-lg px-4 ">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8"
        >
          🚀 Our Recent Projects
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className=" p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-4">{project.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-center gap-3 flex-wrap">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
