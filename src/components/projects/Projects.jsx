import { useRef } from 'react';
import './projects.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import ChatAppImage from "../../../public/chatapp.png"
import BloodDonationImage from "../../../public/blooddonation.png"

const items = [
    {
        id: 1,
        title: "Chat Application",
        image: ChatAppImage,
        desc: "This chat application features real-time communication using React and Chakra UI for a sleek, responsive design. It supports one-on-one and group chats, includes a typing indicator to show when users are typing, and provides a seamless user experience. Built with Node.js and Express, it ensures smooth backend operations and efficient data handling. Additionally, users receive email notifications when they register, enhancing engagement and communication.",
        link: "https://chatapplication-mernstack.netlify.app/"

    },
    {
        id: 2,
        title: "Blood Donation Application",
        image: BloodDonationImage,
        desc: "This Blood Donation Application is developed using Tailwind CSS to create a visually appealing and user-friendly interface. Allowing users to register their details.  After registering, users receive email confirmations, ensuring they stay informed about their appointments and contributions. Credentials: admin1@gmail.com, admin123 ",
        link: "https://blood-donation-app-admin.netlify.app/"
    }
];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    const handleDemoClick = () => {
        if (item.link) {
            window.open(item.link, '_blank'); // Opens the link in a new tab
        }
    };

    return (
        <div className='project-container'>
            <div className="container">
                <div className="wrapper">

                    <motion.div className="textContainer" style={{ y }}>
                        <div className='project-image'>
                            <img onClick={handleDemoClick} src={item.image} alt={item.title} style={{ height: "300px", width: "300px", cursor: "pointer" }} />
                        </div>
                        <div className='project-content'>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <button onClick={handleDemoClick}>See Demo</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

function Projects() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <div className="projects" ref={ref} id='Projects'>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX: scaleX }} className="progressBar"></motion.div>
            </div>
            <div className="projectsContainer">
                {items.map((item) => (
                    <Single item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default Projects;