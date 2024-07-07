import NavBar from "../Components/NavBar";
import { motion } from "framer-motion";
function About() {
  return (
    <div>
      <NavBar />
      <h1>About Page</h1>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          type: "spring",
          stiffness: 60,
          damping: 15,
        }}
        className="dashboard-contain-left"
      >
        Dashboard Contain Left
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          type: "spring",
          stiffness: 60,
          damping: 15,
        }}
        className="dash-left"
      >
        Dash Left
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          type: "spring",
          stiffness: 60,
          damping: 15,
        }}
        className="memories"
      >
        <h3>Memories</h3>
        <p>Some description</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.5,
          type: "spring",
          stiffness: 60,
          damping: 15,
        }}
        className="prev-contain"
      >
        Previous Contain
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 3, ease: "easeOut" }}
        className="dash-header-contain"
      >
        <p>Dash Header Contain</p>
        <img src="image.jpg" alt="Memories" />
      </motion.div>
    </div>
  );
}

export default About;
