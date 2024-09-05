import React from 'react'
import "./app.scss"
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import AboutMe from './components/aboutMe/AboutMe'
import Skills from './components/skills/Skills'
import SkillList from './components/skillList/SkillList'
import Projects from './components/projects/Projects'
import Contact from './components/sidebar/contact/Contact'
import Cursor from './components/cursor/Cursor'


function App() {
  return (
    <div>
      <Cursor />
      <section id='Home'>
        <Navbar />
        <Home />
      </section>

      <section id='About'>
        <AboutMe />
      </section>

      <section id='Skills'>
        <Skills />
      </section>

      <section>
        <SkillList />
      </section>

      <Projects />

      <section id='Contact'>
        <Contact />
      </section>

    </div>
  )
}

export default App