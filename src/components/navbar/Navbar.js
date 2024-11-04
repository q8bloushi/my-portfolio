import Sidebar from "../navbar/sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

export const Navbar = () => {
  return (
    <div className="navbar">
        {/* sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span
            initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}} 
            transition={{duration:0.5}}
            >
              Mohammad Ahmed</motion.span>
            <div className='social'>
                <a href="https://github.com/q8bloushi"><img src="/github-mark-white.png" alt=""></img></a>
                <a href="https://www.linkedin.com/in/mohammad-ahmed-3a160b214/"><img src="/LinkedIn.png" alt=""></img></a>
                <a href="https://wa.me/19022205432"><img src="/whatsapp.png" alt=""></img></a>
                {/* <a href="#w"><img src="/dribbble.png" alt=""></img></a> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar