import "./skills.scss"
import {motion} from "framer-motion"
import React, { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const Skills = () => {
  
  const ref = useRef()

  // const isInView = useInView(ref, {margin:"-100px"})

  return (
    <motion.div
     className="skills"
      variants={variants}
       initial="initial"
        whileInView="animate"
        ref={ref}
        animate={"animate"}
        >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping you 
          <br/>to move forward
        </p>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>

        <div className="title">
          <img src="/people.webp" alt=""/>
          <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
        </div>

        <div className="title">
          <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business</h1>
          <button>What I Do?</button>
        </div>

      </motion.div>
      <motion.div className="listContainer" variants={variants}>

        <div className="box">
          <h2>Web Devlopment</h2>
          <p>
            Managing to create a Full-stack web app using various frameworks
            such as vanilla javascript, React, and PHP.
          </p>
          <motion.button whileHover={{background:"yellow"}}>Go</motion.button>
        </div>

        <div className="box">
          <h2>UI/UX Design</h2>
          <p>
          I’m a passionate UI/UX designer dedicated to crafting intuitive and engaging user experiences.
          I transform complex ideas into elegant designs that resonate with users
          </p>
          <motion.button whileHover={{background:"yellow"}}>Go</motion.button>
        </div>

        <div className="box">
          <h2>Data Visualization</h2>
          <p>
          Experienced in using D3.js library to create interactive web data visualizations that improve user engagement by converting CSV files into visual data.
          </p>
          <motion.button onClick={() => window.location.href = 'https://github.com/q8bloushi/Global-Sales-Videogames/'} whileHover={{background:"yellow"}}>Go</motion.button>
        </div>

        <div className="box">
          <h2>Database</h2>
          <p>
          Skilled in SQL and PostgreSQL for managing and optimizing databases.
          </p>
          <motion.button  onClick={() => window.location.href = 'https://github.com/q8bloushi/smart-brain-api/'} whileHover={{background:"yellow"}}>Go</motion.button>
        </div>       
      </motion.div>
    </motion.div>
  )
}
