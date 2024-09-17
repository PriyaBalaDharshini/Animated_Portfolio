import './skills.scss'
import { motion, useScroll, useTransform } from 'framer-motion'


import React, { useRef } from 'react'

const Skills = () => {
    const bgStyle1 = {
        backgroundImage: `url('/mountains.png')`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: "3"
    }
    const bgStyle2 = {
        backgroundImage: `url('/planets.png')`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: "2"
    }
    const bgStyle3 = {
        backgroundImage: `url('/stars.png')`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: "1"
    }

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className="skills" ref={ref}>
            <motion.h1 style={{ y: yText }}>My Skills</motion.h1>
            <motion.div style={{ ...bgStyle1, y: yBg }} className="mountains"></motion.div>
            <motion.div style={{ ...bgStyle2, y: yBg }} className="planets"></motion.div>
            <motion.div style={{ ...bgStyle3, x: yBg }} className="starts"></motion.div>

        </div>
    )
}

export default Skills

