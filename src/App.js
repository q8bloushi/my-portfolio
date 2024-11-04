import "./App.scss"
import { Navbar } from "./components/navbar/Navbar";
import {Hero} from "./components/hero/Hero"
import {Parallax} from "./components/parallax/Parallax"
import {Skills} from "./components/skills/Skills"
import { Portfolio } from "./components/portfolio/Portfolio";
import {Contact} from "./components/contact/Contact"
// import { Cursor } from "./components/contact/cursor/Cursor";

function App() {
  return (
    <div>
      {/* <Cursor/> no need to open*/}
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Skills"><Parallax type="skills"/></section>
    <section>
      <Skills/>
      </section>
    <section id="Portfolio"><Parallax type="Portfolio"/></section>
    <Portfolio />
    <section id="Contact">
      <Contact />
    </section>
    </div>
  );
}

export default App;
