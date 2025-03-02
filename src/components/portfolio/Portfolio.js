import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import {useRef} from 'react'

const items = [
    {
        id:1,
        title:"Smart Brain (React)",
        img:"./smartbrain.png",
        desc:"Smart brain is an app that allow the user to upload images and receive instant feedback on the faces detected within those images ",
        link: "https://smart-brain-ypx0.onrender.com/",
        source: "https://github.com/q8bloushi/smart-brain",
    },

    {
        id:2,
        title:"Room Checker (vanilla js)",
        img:"./roomchecker.png",
        desc:"A room checker app is a tool for verifying room availability and occupancy status in hotels or rental properties",
        link: "https://room-checker.onrender.com/",
        source: "https://github.com/q8bloushi/room-checker",
    },

    {
        id:3,
        title:"Data Visualization (D3.js)",
        img:"./infovisual.png",
        desc:"A  JavaScript web application that extracts data from a CSV file (such as an Excel sheet) and transforms it into visual representations.",
        link: "https://global-sales-videogames.onrender.com/",
        source: "https://github.com/q8bloushi/Global-Sales-Videogames/",
    },

    {
        id:4,
        title:"UX using (MockPlus)",
        img:"./UI.png",
        desc:"A UX design similar to social media apps but made for students.",
        link: "https://youtu.be/SyZuHndDNkE",
        source: "https://youtu.be/SyZuHndDNkE",
    },

    {
      id:5,
      title:"UI/UX using (Figma)",
      img:"./UI2.png",
      desc:"A UI/UX design similar to shop media apps.",
      link: "https://www.figma.com/design/DB1XV2KCyuyyayS9EuAzlN/Project%3A-Alpha?node-id=0-1&t=pcLtf97YCcOw1UDC-1",
      source: "https://www.figma.com/design/DB1XV2KCyuyyayS9EuAzlN/Project%3A-Alpha?node-id=0-1&t=pcLtf97YCcOw1UDC-1",
  }
]

const Single = ({item}) => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
      });

      const y = useTransform(scrollYProgress, [0,1], [-300,300])

    return (
        <section >
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <ai>
              <motion.button whileHover={{background:"yellow"} } onClick={() => window.open(item.link, '_blank')}>See Demo</motion.button>
              <span>&nbsp; &nbsp;</span>
              <div className="space-tag">
              </div>
              <motion.button whileHover={{background:"yellow"} } onClick={() => window.open(item.source, '_blank')}>See the Code</motion.button>
              </ai>
              
              {/* <button onClick={() => window.location.href = item.link}>See Demo</button> */}
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

export const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });
  
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}
