import './skills.scss'
import { motion, useScroll, useTransform } from 'framer-motion'

import React, { useRef } from 'react'

const Skills = () => {

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
            <motion.div className="mountains"></motion.div>
            <motion.div style={{ y: yBg }} className="planets"></motion.div>
            <motion.div style={{ x: yBg }} className="starts"></motion.div>

        </div>
    )
}

export default Skills

