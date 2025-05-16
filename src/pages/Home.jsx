import React from "react";
import watertap from "../assets/watertap.jpg";
// import { motion } from "framer-motion";
import { motion } from "motion/react"

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <motion.div className="row"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}>
          <div
            className="col-md-12 animated-background "
            style={{
              backgroundImage: `url(${watertap})`,
              backgroundSize: "cover",
              height: "80vh",
              width: "100%",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1 className="text-white fw-bold">Water</h1>
            <p className="text-white fw-bold">The Essential Source of Life"</p>
            <p className="text-white">Water is the foundation of all life on Earth.It covers over 70% of the planet's surface,<br/>  yet only a small fraction of it is available for human consumption. Every living<br/> organism depends on water to survive—humans, animals, plants, and ecosystems.</p>
          </div>
      
        </motion.div>
      </div>
    </>
  );
};

export default Home;
