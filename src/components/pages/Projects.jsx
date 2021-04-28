import React, { useState } from 'react'
import { motion } from 'framer-motion'

import LeftArrow from '../common/LeftArrow'
import RightArrow from '../common/RightArrow'
import projInstaGive from '../assets/img/projects/project_instagive.PNG'
import projTodoApp from '../assets/img/projects/project_todo.PNG'
import projPortfolio from '../assets/img/projects/project_portfolio.PNG'
import projTraq from '../assets/img/projects/project_traq.PNG'
import '../assets/styles/pages/project.css'

const animatePage = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 1.6
        }
    },
    onHover: {},
    onExit: {
        opacity: 0
    }
}

const animateTitle = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 1,
        }
    }
}

const animateProjectList = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 1
        }
    }
}

const animateProject = {
    hidden: {
        opacity: 0,
        y: -100,
        scale: 0
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 1
        }
    },
}

const animateProjectDetail = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.3
        }
    },
    onExit: {
        opacity: 0,
        transition: {
            duration: 1
        }
    }
}

const animateTechStack = {
    hidden: {
        opacity: 0,
        y: 100,
        scale: 0
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5
        }
    },
    onHover: {
        scale: 1.1
    },
    onExit: {
        opacity: 0
    }
}

const Projects = (props) => {
    const [projectList, setProjectList] = useState([
        {
            id: 4,
            img: projPortfolio,
            name: 'Portfolio',
            description: 'My portfolio',
            onHover: false,
            link: 'https://traq.vercel.app/url/qZNmZ',
            techStack: [
                {id: 1, name: 'React'},
            ]
        },
        {
            id: 3,
            img: projTraq,
            name: 'Traq',
            description: 'A URL tracker for measure the success of your marketing campaigns, helping you to track the number of visitors of your link.',
            onHover: false,
            link: 'https://traq.vercel.app/url/AesHz',
            techStack: [
                {id: 1, name: 'Django'},
                {id: 2, name: 'React'},
                {id: 3, name: 'Redux'},
                {id: 4, name: 'PostgreSQL'},
            ]
        },
        {
            id: 2,
            img: projTodoApp,
            name: 'Todo App',
            description: 'A todo application inspired with Samsung Remind app ',
            onHover: false,
            link: 'https://traq.vercel.app/url/uBh0i',
            techStack: [
                {id: 1, name: 'Django'},
                {id: 2, name: 'React'},
                {id: 3, name: 'Redux'},
                {id: 4, name: 'PostgreSQL'},
            ]
        },
        {
            id: 1,
            img: projInstaGive,
            name: 'InstaGive (Thesis)',
            description: 'A web base donation platform for the province of Pampanga.',
            onHover: false,
            link: 'https://traq.vercel.app/url/uaw2C',
            techStack: [
                {id: 1, name: 'MongoDB'},
                {id: 2, name: 'Express'},
                {id: 3, name: 'React'},
                {id: 4, name: 'Node'},
                {id: 5, name: 'Redux'},
            ]
        },
    ])
    
    const handleMouseEnter = selectedProject => {
        const projectListDisableHover = projectList.map(project => { return {...project, onHover: false} })
        const newProjectList = projectListDisableHover.map(project => project.id === selectedProject.id ? {...project, onHover: true} : project)
        setProjectList(newProjectList)
    }
    
    const handleMouseLeave = () => {
        const newProjectList = projectList.map(project => { return {...project, onHover: false} })
        setProjectList(newProjectList)
    }

    return (
        <React.Fragment>
            <LeftArrow {...props} route='about' />
            <motion.div
                variants={animatePage}
                initial='hidden'
                animate='visible'
                whileHover='onHover'
                exit='onExit'
                style={{ width: '100%', height: '100vh' }}
            >
                <motion.h1 className='page-title' variants={animateTitle}>Projects</motion.h1>
                <motion.div 
                    className='project-list-container' 
                    variants={animateProjectList}
                >
                    {projectList.map(project =>
                        <motion.div 
                            className='project-container'
                            onMouseEnter={() => handleMouseEnter(project)}
                            onMouseLeave={() => handleMouseLeave(project)}
                            key={project.id}
                            variants={animateProject}
                        >
                            <a href={project.link} rel="noopener noreferrer" target='_blank'><img src={project.img} alt={`${project.name}_img.png`} width='350px'/></a>
                            <div className="project-detail-container">
                                    {!project.onHover && <motion.div variants={animateProjectDetail}>
                                        <p className='project-title'>{project.name}</p>
                                        <p>{project.description}</p>
                                    </motion.div>}
                                    {project.onHover && <motion.div className='techstack-container' variants={animateProjectDetail}>
                                        {project.techStack.map(tech =>
                                            <motion.p variants={animateTechStack} key={tech.id} style={{cursor: 'default'}}>{tech.name}</motion.p>
                                        )}
                                    </motion.div>}
                            </div>
                        </motion.div>    
                    )}
                </motion.div>
            </motion.div>
            <RightArrow {...props} route='contact' />
        </React.Fragment>
    )
}

export default Projects