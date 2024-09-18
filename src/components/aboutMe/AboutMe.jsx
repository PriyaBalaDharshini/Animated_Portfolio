import './aboutMe.scss';
import { motion } from 'framer-motion';

const imageVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

function AboutMe() {
    return (
        <div className="about">
            <motion.img
                src="./about.jpg"
                alt="Profile"
                variants={imageVariant}
                initial="hidden"
                animate="visible"
            />
            <div className="wrapper">

                <motion.div
                    className="details"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p variants={item}>ABOUT ME</motion.p>
                    <motion.div variants={item}>
                        I am a dedicated professional with over 5 years of experience in Technical Editing. Now, I’m excited to switch to a career in software development. I recently completed a "MERN-Full Stack Development" course, where I learned how to build and manage websites and applications using MongoDB, Express.js, React.js, and Node.js.
                    </motion.div>
                    <motion.div variants={item}>
                        I am passionate about creating user-friendly and engaging digital experiences. With my background in technical editing and my new skills in full-stack development, I’m ready to take on roles as a Frontend Developer, Backend Developer, React Developer, or Full Stack Developer. I look forward to applying my skills and enthusiasm to new challenges and making a positive impact in the tech field.
                    </motion.div>
                    <motion.button className="button" variants={item}>
                        <a href="https://github.com/PriyaBalaDharshini/resume" target='_blank'>Resume</a>
                    </motion.button>
                </motion.div>

                <motion.div
                    className="education"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p className='education-title' variants={item}>EDUCATION</motion.p>
                    <div className="timeline">
                        <motion.div className="timeline-item" variants={item}>
                            <div className="timeline-content">
                                <p>B.Tech Chemical Engineering, 2017</p>
                                <p>Adhiyamaan College of Engineering, Hosur</p>


                            </div>
                        </motion.div>
                        <motion.div className="timeline-item" variants={item}>
                            <div className="timeline-content">
                                <p>Full Stack Development Certification, 2024</p>
                                <p>GUVI GEEK EDTECH, Chennai</p>
                            </div>
                        </motion.div>
                    </div>
                    <motion.button

                        variants={item}
                    >
                        <a href="https://github.com/PriyaBalaDharshini/Certifications" target='_blank'>Certification</a>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}

export default AboutMe;
