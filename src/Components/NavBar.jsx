import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Assets/JasmineWuLogoLong.svg";
import { motion } from "framer-motion";
function NavBar() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const projects = [
    { id: 1, name: "Dispatch" },
    { id: 2, name: "Nasa" },
  ];

  return (
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
      <div className="navbar">
        <ul>
          {" "}
          <li className={activePath === "/" ? "active" : ""}>
            <Link to="/" onClick={() => setActivePath("/")}>
              <img src={Logo} alt="Logo" />
            </Link>
          </li>
        </ul>
        <ul>
          <li className={activePath === "/about" ? "active" : ""}>
            <Link to="/about" onClick={() => setActivePath("/about")}>
              About
            </Link>
          </li>
          <li className={activePath === "/play" ? "active" : ""}>
            <Link to="/play" onClick={() => setActivePath("/play")}>
              Play
            </Link>
          </li>
          {projects.map((project) => (
            <li
              key={project.id}
              className={
                activePath === `/project/${project.id}` ? "active" : ""
              }
            >
              <Link
                to={`/project/${project.id}`}
                onClick={() => setActivePath(`/project/${project.id}`)}
              >
                {project.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default NavBar;
