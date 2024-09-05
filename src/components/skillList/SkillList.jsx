import './skillList.scss'
import { motion } from 'framer-motion'

function SkillList() {
  return (
    <motion.div className="skillList">
      <motion.div className="textContainer">
        <p>I'm actively honing and enhancing <br /> my web development skills daily.</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer"></motion.div>
      <motion.div className="listContainer"></motion.div>
    </motion.div>
  )
}

export default SkillList