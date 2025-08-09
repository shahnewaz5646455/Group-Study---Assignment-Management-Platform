import { motion } from "framer-motion";
import { FaUsers, FaTasks, FaCalendarAlt } from "react-icons/fa";
import CountUp from "react-countup";

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-br  py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-blue-600">Us</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-300 font-semibold max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          We are committed to making assignment management easy, fast, and efficient
          for students and teachers. Our platform streamlines submissions, grading,
          and tracking in one place — so you can focus on what matters most.
        </motion.p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {/* Students */}
          <motion.div
            className=" rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaUsers className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold">
              <CountUp end={1500} duration={10} />+
            </h3>
            <p className="text-gray-300">Active Students</p>
          </motion.div>

          {/* Assignments */}
          <motion.div
            className=" rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaTasks className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold">
              <CountUp end={3200} duration={10} />+
            </h3>
            <p className="text-gray-300">Assignments Completed</p>
          </motion.div>

          {/* Deadlines Met */}
          <motion.div
            className=" rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaCalendarAlt className="text-4xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold">
              <CountUp end={98} duration={12} />%
            </h3>
            <p className="text-gray-300">Deadlines Met</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
