import './home.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const textVariants = {
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
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
};

const sliderVarients = {
    initial: {
        x: 0
    },
    animate: {
        x: '-220%',
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 10
        }
    }
};

const photoVarient = {
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
    },
};

function Home() {
    return (
        <div className="home">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>PRIYADHARSHINI</motion.h2>

                    <motion.h1 variants={textVariants}>Certified  Full Stack Developer</motion.h1>
                    <motion.h2 variants={textVariants}>MERN Stack</motion.h2>
                    <motion.div variants={textVariants} className="buttons">
                        <Link to="/projects" smooth={true} duration={500} offset={-50}>
                            <motion.button variants={textVariants}>My Projects</motion.button>
                        </Link>
                        <Link to="/contact" smooth={true} duration={500} offset={-50}>
                            <motion.button variants={textVariants}>Contact Me</motion.button>
                        </Link>
                    </motion.div>
                    {/* <motion.img variants={textVariants} animate='scrollButton' src="./scroll.png" alt="" /> */}
                </motion.div>
                <motion.div className="imageContainer" variants={photoVarient} initial="initial" animate="animate">
                    <img src="./1.jpg" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVarients} initial="initial" animate="animate">
                Full Stack Developer
            </motion.div>
        </div>
    );
}

export default Home;
