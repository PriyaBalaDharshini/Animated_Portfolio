import React from 'react';
import { motion } from 'framer-motion';
import './projects.scss';
import ChatAppImage from "../../../public/chatapp.png";
import BloodDonation from "../../../public/blooddonation.png";

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
};

const Projects = () => {
    return (
        <>
            <motion.section
                className="projects"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <div className="wrapper">
                    <motion.div
                        className="project-description"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Chat Application</h1>
                        <ul>
                            <li><strong>Frontend:</strong> Built with React ⚛️</li>
                            <li><strong>UI Components:</strong> Chakra UI 🧩</li>
                            <li><strong>Styling:</strong> SCSS 🎨</li>
                            <li><strong>Responsiveness:</strong> Fully Responsive Design 📱💻</li>
                            <li><strong>Authentication:</strong> JWT Tokens 🔑</li>
                            <li><strong>Real-time Messaging:</strong> Sockets for Instant Communication 💬</li>
                            <li><strong>Chat Support:</strong> Group Chats and Personal Messages 👥💬</li>
                            <li><strong>Backend:</strong> Node.js and Express 🛠️</li>
                            <li><strong>Database:</strong> MongoDB for Efficient Data Storage 🗄️</li>
                            <li><strong>State Management:</strong> Context State Management 🧠</li>
                            <li><strong>API Calls:</strong> Axios for Smooth API Interactions 🌐</li>
                            <li><strong>Code Quality:</strong> Structured and Maintainable Code. Followed MVC pattern 📚</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="project-display"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="project-image">
                            <img src={ChatAppImage} alt="Chat Application Screenshot" />
                        </div>
                        <div className="project-source-code">
                            <a href="https://github.com/PriyaBalaDharshini/MERN-ChatApp" target="_blank" rel="noopener noreferrer" aria-label="View Source Code">
                                <button>Source Code</button>
                            </a>
                            <a href="https://chatapplication-mernstack.netlify.app/chat" target="_blank" rel="noopener noreferrer" aria-label="View Demo">
                                <button>Demo</button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                className="projects"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <div className="wrapper">
                    <motion.div
                        className="project-description"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Blood Donation Application</h1>
                        <ul>
                            <li><strong>Frontend:</strong> Built with React ⚛️</li>
                            <li><strong>UI Components:</strong> Material-UI 🧩</li>
                            <li><strong>Styling:</strong> SCSS and Tailwind CSS 🎨</li>
                            <li><strong>Responsiveness:</strong> Need to Add 📱💻</li>
                            <li><strong>Support:</strong> Donor and Prospect Management 👥💬</li>
                            <li><strong>Backend:</strong> Node.js and Express 🛠️</li>
                            <li><strong>Database:</strong> MongoDB for Efficient Data Storage 🗄️</li>
                            <li><strong>State Management:</strong> Redux Toolkit and React-Redux 🧠</li>
                            <li><strong>API Calls:</strong> Axios for Smooth API Interactions 🌐</li>
                            <li><strong>Code Quality:</strong> Structured and Maintainable Code. Followed MVC pattern 📚</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="project-display"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="project-image">
                            <img src={BloodDonation} alt="Blood Donation Application Screenshot" />
                        </div>
                        <div className="project-source-code">
                            <a href="https://github.com/PriyaBalaDharshini/MERN-BloodDonationApp" target="_blank" rel="noopener noreferrer" aria-label="View Source Code">
                                <button>Source Code</button>
                            </a>
                            <a href="https://blood-donation-app-admin.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="View Demo">
                                <button>Demo</button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                className="mini-projects"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <div className="wrapper">
                    <h1>Mini Projects</h1>
                    <div className="projects-list">
                        <motion.div
                            className="project"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3>React Projects:</h3>
                            <ul>
                                <li><a href="https://enchanting-salamander-48c975.netlify.app/" target="_blank" rel="noopener noreferrer">QR Code Generator</a></li>
                                <li><a href="https://zippy-pony-12690a.netlify.app/" target="_blank" rel="noopener noreferrer">Advise App</a></li>
                                <li><a href="https://starlit-arithmetic-0dce32.netlify.app/" target="_blank" rel="noopener noreferrer">BMI Calculator</a></li>
                                <li><a href="https://famous-axolotl-0ce551.netlify.app/" target="_blank" rel="noopener noreferrer">Currency Convertor</a></li>
                                <li><a href="https://resplendent-monstera-ee1434.netlify.app/" target="_blank" rel="noopener noreferrer">Notes App-Redux</a></li>
                                <li><a href="https://stirring-douhua-2e80a8.netlify.app/" target="_blank" rel="noopener noreferrer">Notes App-Context</a></li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="project"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3>Created UI using React:</h3>
                            <ul>
                                <li>Social Media App</li>
                                <li>Blog App</li>
                                <li>Hotel Booking App</li>
                                <li>Resetting Password</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="project"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3>RESTful API using Node and Express:</h3>
                            <ul>
                                <li>Social Media App</li>
                                <li>Blog App</li>
                                <li>Hotel Booking App</li>
                                <li>Resetting Password</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="project"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3>Simple Full Stack Apps:</h3>
                            <ul>
                                <li>Gold Rate Calculator</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default Projects;
