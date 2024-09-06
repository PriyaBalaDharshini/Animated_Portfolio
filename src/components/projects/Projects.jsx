import { useRef } from 'react';
import './projects.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: "Project 1",
        image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo cumque, nulla iste labore sit odio quis omnis, fugit inventore tempore modi corporis adipisci nobis quia veritatis. Quibusdam, voluptatem quisquam?"
    },
    {
        id: 2,
        title: "Project 2",
        image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo cumque, nulla iste labore sit odio quis omnis, fugit inventore tempore modi corporis adipisci nobis quia veritatis. Quibusdam, voluptatem quisquam?"
    },
    {
        id: 3,
        title: "Project 3",
        image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo cumque, nulla iste labore sit odio quis omnis, fugit inventore tempore modi corporis adipisci nobis quia veritatis. Quibusdam, voluptatem quisquam?"
    },
    {
        id: 4,
        title: "Project 4",
        image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo cumque, nulla iste labore sit odio quis omnis, fugit inventore tempore modi corporis adipisci nobis quia veritatis. Quibusdam, voluptatem quisquam?"
    }
];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <div className='project-container'>
            <div className="container">
                <div className="wrapper">
                    <motion.div className="imageContainer" ref={ref}>
                        <img src={item.image} alt={item.title} />
                    </motion.div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
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