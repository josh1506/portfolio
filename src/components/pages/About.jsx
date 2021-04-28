import React from 'react'
import { motion } from 'framer-motion'
import {useWindowScroll} from 'react-use';

import LeftArrow from '../common/LeftArrow'
import RightArrow from '../common/RightArrow'
import symph_logo from '../assets/img/company/symph_logo.png'
// import ccs_logo from '../assets/img/university/CCS_logo.png'
import jcfc_logo from '../assets/img/university/jcfc_logo.png'
import olfu_logo from '../assets/img/university/OLFU_official_logo.png'
import '../assets/styles/pages/about.css'

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

const animateMessage = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    },
}

const animateMessageContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.02
        }
    }
}

const animateSkillTitle = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 4.5,
        }
    }
}

const animateTopSkillContainer = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 5, 
            staggerChildren: 0.5,
            when: 'beforeChildren'
        }
    }
}

const animateOtherSkillContainer = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 7, 
            staggerChildren: 0.2,
            when: 'beforeChildren'
        }
    }
}

const animateSkillItem = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: {
        opacity: 1,
        y: 0,
    }
}

const animateExpEducContainer = {
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            when: 'beforeChildren'
        }
    }
}

const animateExpEducTitle = {
    hidden: {
        opacity: 0,
        x: 100
    },
    visible: {
        opacity: 1,
        x: 0,
    }
}

const animateExpEducItem = {
    hidden: {
        opacity: 0,
        y: -100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

const About = (props) => {
    const aboutMe = "I'm a graduate student from Our Lady of Fatima University with a bachelor of Science degree in Information Technology"
    const topSkills = [
        'Python',
        'Django',
        'JavaScript',
        'React'
    ]

    const otherSkills = [
        'Redux',
        'PostgreSQL',
        'Django Template Language',
        'Amazon Web Services',
        'Amazon RDS',
        'Amazon S3',
        'Git',
        'GitHub',
        'Bitbucket',
        'HTML',
        'CSS',
        'React Bootstrap',
        'Bootstrap',
        'SQL',
        'NoSQL',
        'MongoDB',
        'Firebase',
        'Jinja',
        'Heroku',
        'Varcel',
        'Netlify',
        'Dialogflow',
    ]

    const expereince = [
        {
            id: 1,
            img: symph_logo,
            name: 'Symph - Mobile, Web Design and Development Studio Philippines',
            role: 'Web and Mobile App Development Intern',
            date: 'Feb, 2021 - May, 2021'
        }
    ]

    const education = [
        {   
            id: 1,
            img: olfu_logo,
            name: 'Our Lady of Fatima University Pampanga',
            course: 'Bachelor of Science Information Technology',
            year: 'June. 2018 – June. 2021'
        },
        {   
            id: 2,
            img: jcfc_logo,
            name: 'Jose C. Feliciano College',
            course: 'Bachelor of Science Marine Transportation',
            year: 'Sep. 2016 - March. 2017'
        },
        {   
            id: 3,
            img: olfu_logo,
            name: 'Our Lady of Fatima University Pampanga',
            course: 'Bachelor of Science Information Technology',
            year: 'June. 2014 – March.  2016'
        },
    ]

    const {y} = useWindowScroll();

    return (
        <React.Fragment>
            <LeftArrow {...props} route='' />
            <motion.div
                variants={animatePage}
                initial='hidden'
                animate='visible'
                exit='onExit'
                className='about-container'
            >
                <motion.h1
                    variants={animateTitle}
                    className='page-title'
                >About Me:</motion.h1>
                    <div className="about-details-container">
                        <motion.div className="d-flex center box-container about-me-container" variants={animateMessageContainer}>
                            <motion.div
                                variants={animateMessageContainer}
                                className='d-flex page-normal-text about-content-container'
                            >
                                {[...aboutMe].map((letter, index) =>
                                    <motion.p
                                    style={{float: 'left'}}
                                        key={index}
                                        variants={animateMessage}
                                        className='about-content'
                                    >{letter}</motion.p>
                                )}
                            </motion.div>
                        </motion.div>
                    </div>
                <div>
                    <motion.h3
                        variants={animateSkillTitle}
                        className='page-subtitle'
                    >Skills</motion.h3>
                    <div>
                        <motion.div 
                            className='box-container about-skill-container'
                            variants={animateTopSkillContainer}
                        >
                            {topSkills.map(skill => 
                                <motion.p 
                                key={skill}
                                className='d-flex box-container'
                                variants={animateSkillItem}
                                >{skill}</motion.p>
                            )}
                        </motion.div>

                        <motion.div 
                            className='box-container about-skill-container'
                            variants={animateOtherSkillContainer}
                        >
                            {otherSkills.map(skill => 
                                <motion.p 
                                    key={skill}
                                    className='d-flex box-container'
                                    variants={animateSkillItem}
                                >{skill}</motion.p>)}
                        </motion.div>
                    </div>
                </div>
                {y >= 340 && <motion.div variants={animateExpEducContainer}>
                    <motion.h3 className='page-subtitle' variants={animateExpEducTitle}>Experience</motion.h3>
                    <div>
                        {expereince.map(company => 
                            <motion.div 
                                className='box-container d-flex about-exp-educ-container'
                                key={company.id}
                                variants={animateExpEducItem}
                            >
                                <img src={company.img} alt="company_logo" className='about-img' />
                                <div className='company-detail'>
                                    <p className='company-name'>{company.name}</p>
                                    <p className='company-role'>{company.role}</p>
                                    <p className='company-date'>{company.date}</p>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>}
                {y >= 550 && <motion.div variants={animateExpEducContainer}>
                    <motion.h3 className='page-subtitle' variants={animateExpEducTitle}>Education</motion.h3>
                    <div>
                        {education.map(school => 
                            <motion.div 
                                className='box-container d-flex about-exp-educ-container'
                                key={school.id} 
                                variants={animateExpEducItem}
                            >
                                <img src={school.img} alt="school_logo" className='about-img' />
                                <div className='school-detail'>
                                    <p className='school-name'>{school.name}</p>
                                    <p className='school-course'>{school.course}</p>
                                    <p className='school-year'>{school.year}</p>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>}
            </motion.div>
            <RightArrow {...props} route='projects' />
        </React.Fragment>
    )
}

export default About