import React from 'react'
import "./app.scss"
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'


function App() {
  return (
    <>
      <section id='Home'>
        <Navbar />
        <Home />
      </section>
      <section id='Education'>Education</section>
      <section id='Skills'>Skills</section>
      <section>Project 1</section>
      <section>Project 2</section>
      <section>Project 3</section>
      <section>Project 4</section>
      <section id='Experience'>Experience</section>
      <section id='Contact'>Contact</section>
    </>
  )
}

export default App