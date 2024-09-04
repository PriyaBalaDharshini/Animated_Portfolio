import './home.scss';
import { motion } from 'framer-motion';

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
}

function Home() {
    return (
        <div className="home">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>PRIYADHARSHINI</motion.h2>
                    <motion.p variants={textVariants}>A Budding 👩‍💻</motion.p>
                    <motion.h1 variants={textVariants}>Certified <br /> Full Stack Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>My Projects</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate='scrollButton' src="./scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVarients} initial="initial" animate="animate" >
                Full Stack Developer
            </motion.div>
            <motion.div className="imageContainer" variants={photoVarient} initial="initial" animate="animate" >
                <img src="./1.jpg" alt="" />
            </motion.div>
        </div>
    );
}

export default Home;
