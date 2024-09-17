import './skillList.scss'

import { motion } from 'framer-motion'


const textVariant1 = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  }
};

const textVariant2 = {
  initial: {
    x: 500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  }
};

const textVariant3 = {
  initial: {
    y: -500,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  }
};


const textVariant4 = {
  initial: {
    y: 500,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  }
};

const SkillList = () => {
  return (
    <div className="skillslist">

      <div className="wrapper">
        <motion.div className="list" variants={textVariant1} initial='initial' animate='animate'>
          <div className="item">
            <p>HTML</p>
            <img src="./html.png" alt="" />

          </div>
          <div className="item">
            <p>CSS</p>
            <img src="./css.png" alt="" />

          </div>
          <div className="item">
            <p>Bootstrap</p>
            <img src="./bootstrap.png" alt="" />
          </div>

        </motion.div>

        <motion.div className="list" variants={textVariant4} initial='initial' animate='animate'>
          <div className="item">
            <p>Tailwind CSS</p>
            <img src="./tailwind-css.png" alt="" />

          </div>
          <div className="item">
            <p>JavaScript</p>
            <img src="./javascript.png" alt="" />

          </div>
          <div className="item">
            <p>ReactJS</p>
            <img src="./react.png" alt="" />

          </div>

        </motion.div>

        <motion.div className="list" variants={textVariant3} initial='initial' animate='animate'>
          <div className="item">
            <p>NodeJS</p>
            <img src="./nodejs.png" alt="" />

          </div>
          <div className="item">
            <p>ExpressJS</p>
            <img src="./express.png" alt="" />

          </div>
          <div className="item">
            <p>MongoDB</p>
            <img src="./mongo-db.png" alt="" />

          </div>

        </motion.div>

        <motion.div className="list" variants={textVariant2} initial='initial' animate='animate'>
          <div className="item">
            <p>GitHub</p>
            <img src="./github.png" alt="" />
          </div>
          <div className="item">
            <p>Netlify</p>
            <img src="./netlify.png" alt="" />
          </div>
          <div className="item">
            <p>Render</p>
            <img src="./render.jpg" alt="" />

          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default SkillList