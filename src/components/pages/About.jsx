import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useWindowScroll } from "react-use";

import LeftArrow from "../common/LeftArrow";
import RightArrow from "../common/RightArrow";
import skillImg from "../assets/img/others/2555355.png";
import symph_logo from "../assets/img/company/symph_logo.png";
import jcfc_logo from "../assets/img/university/jcfc_logo.png";
import olfu_logo from "../assets/img/university/OLFU_official_logo.png";
import "../assets/styles/pages/about.css";

const animatePage = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        },
    },
    onExit: {
        opacity: 0,
    },
};

const animateTitle = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {},
    },
};

const animateMessage = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const animateMessageContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.02,
        },
    },
};

const animateSkillTitle = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 3.5,
        },
    },
};

const animateSkillItem = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

const animateSkillListContainer = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            when: "beforeChildren",
        },
    },
};

const animateSkillContainer = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            when: "beforeChildren",
        },
    },
};

const animateOtherSkillContainer = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 4.5,
            staggerChildren: 0.2,
            when: "beforeChildren",
        },
    },
};

const animateSkillGraphContainer = {
    hidden: {
        opacity: 0,
        width: 0,
    },
    visible: {
        opacity: 1,
        width: "96%",
        transition: {
            duration: 1,
            when: "beforeChildren",
        },
    },
};

const animateSkillGraph = {
    hidden: {
        opacity: 0,
        width: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};

const animateSkillType = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

const animateSkillImg = {
    hidden: {
        opacity: 0,
        x: -200,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 4,
            type: "spring",
        },
    },
};

const animateExpEducContainer = {
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            when: "beforeChildren",
        },
    },
};

const animateExpEducTitle = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visible: {
        opacity: 1,
        x: 0,
    },
};

const animateExpEducItem = {
    hidden: {
        opacity: 0,
        y: -100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const About = (props) => {
    const { y } = useWindowScroll();
    const aboutMe =
        "I'm a graduate student from Our Lady of Fatima University with a bachelor of Science degree in Information Technology";
    const [skillPage, setSkillPage] = useState(0);
    const skillList = [
        {
            title: "Primary Skills",
            list: [
                { name: "Python", knowledge: 82 },
                { name: "Django", knowledge: 74 },
                { name: "JavaScript", knowledge: 78 },
                { name: "React", knowledge: 72 },
            ],
        },
        {
            title: "Programming Language",
            list: [
                { name: "Python", knowledge: 82 },
                { name: "JavaScript", knowledge: 78 },
            ],
        },
        {
            title: "Web/Mobile Development",
            list: [
                { name: "Django", knowledge: 74 },
                { name: "React", knowledge: 72 },
                { name: "Redux", knowledge: 57 },
                { name: "React Native", knowledge: 34 },
                { name: "HTML", knowledge: 93 },
                { name: "CSS", knowledge: 87 },
                { name: "Bootstrap", knowledge: 86 },
                { name: "React Bootstrap", knowledge: 73 },
                { name: "Material UI", knowledge: 46 },
                { name: "Jinja", knowledge: 62 },
                { name: "Django Template Language", knowledge: 65 },
            ],
        },
        {
            title: "Cloud/Database",
            list: [
                { name: "PostgreSQL", knowledge: 73 },
                { name: "MongoDB", knowledge: 62 },
                { name: "Amazon Web Services", knowledge: 30 },
                { name: "Amazon RDS", knowledge: 27 },
                { name: "Amazon S3", knowledge: 26 },
                { name: "SQL", knowledge: 73 },
                { name: "NoSQL", knowledge: 62 },
                { name: "Firebase", knowledge: 68 },
            ],
        },
        {
            title: "Other Skills",
            list: [
                { name: "GitHub", knowledge: 84 },
                { name: "Git", knowledge: 78 },
                { name: "Heroku", knowledge: 75 },
                { name: "Vercel", knowledge: 73 },
                { name: "Netlify", knowledge: 70 },
                { name: "Bitbucket", knowledge: 79 },
                { name: "Dialogflow", knowledge: 34 },
            ],
        },
    ];

    const expereince = [
        {
            id: 1,
            img: symph_logo,
            name: "Symph - Mobile, Web Design and Development Studio Philippines",
            role: "Web and Mobile App Development Intern",
            date: "Feb, 2021 - May, 2021",
        },
    ];

    const education = [
        {
            id: 1,
            img: olfu_logo,
            name: "Our Lady of Fatima University Pampanga",
            course: "Bachelor of Science Information Technology",
            year: "June. 2018 – June. 2021",
        },
        {
            id: 2,
            img: jcfc_logo,
            name: "Jose C. Feliciano College",
            course: "Bachelor of Science Marine Transportation",
            year: "June. 2016 - March. 2017",
        },
        {
            id: 3,
            img: olfu_logo,
            name: "Our Lady of Fatima University Pampanga",
            course: "Bachelor of Science Information Technology",
            year: "June. 2014 – March.  2016",
        },
    ];

    const skillContainerRef = React.useRef();

    useEffect(() => {
        window.scrollTo(0, 0);
        setSkillPage(0);
    }, []);

    useEffect(() => {
        skillContainerRef.current.scrollTo(0, 0);
    }, [skillPage]);

    const handleSkillPrev = () => {
        const page = skillPage - 1;
        setSkillPage(page);
        // skillContainerRef.current.scroll(0, 0);
    };
    const handleSkillNext = () => {
        const page = skillPage + 1;
        setSkillPage(page);
        // skillContainerRef.current.scroll(0, 0);
    };

    return (
        <React.Fragment>
            <LeftArrow {...props} route="" />
            <motion.div
                variants={animatePage}
                initial="hidden"
                animate="visible"
                exit="onExit"
                className="about-container"
            >
                <motion.h1 variants={animateTitle} className="page-title">
                    About Me:
                </motion.h1>
                <div className="about-details-container">
                    <motion.div
                        className="d-flex center box-container about-me-container"
                        variants={animateMessageContainer}
                    >
                        <motion.div
                            variants={animateMessageContainer}
                            className="d-flex page-normal-text about-content-container"
                        >
                            {[...aboutMe].map((letter, index) => (
                                <motion.p
                                    style={{ float: "left" }}
                                    key={index}
                                    variants={animateMessage}
                                    className="about-content"
                                >
                                    {letter}
                                </motion.p>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
                <div>
                    <motion.h3
                        variants={animateSkillTitle}
                        className="page-subtitle"
                    >
                        Skills
                    </motion.h3>
                    <div className="skill-content-container">
                        <motion.div variants={animateSkillImg}>
                            <motion.img
                                src={skillImg}
                                alt="skill-icon"
                                className="skill-img"
                                drag
                                dragConstraints={{
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                }}
                            />
                        </motion.div>
                        <motion.div
                            className="skill-list-container"
                            variants={animateOtherSkillContainer}
                        >
                            <motion.h1
                                className="page-subtitle"
                                variants={animateSkillType}
                            >
                                {skillList[skillPage].title}
                            </motion.h1>
                            <motion.div
                                className="skill-list"
                                variants={animateSkillListContainer}
                            >
                                <div className="skill-list-button">
                                    {skillPage > 0 && (
                                        <p onClick={handleSkillPrev}>{"<"}</p>
                                    )}
                                </div>
                                <motion.div
                                    ref={skillContainerRef}
                                    className="skills-container"
                                    variants={animateSkillContainer}
                                >
                                    {skillList[skillPage].list.map(
                                        (skill, index) => (
                                            <React.Fragment key={index}>
                                                <motion.div
                                                    className="skill-item"
                                                    variants={animateSkillItem}
                                                >
                                                    <p>{skill.name}</p>
                                                    <p>{skill.knowledge}%</p>
                                                </motion.div>
                                                <motion.div
                                                    className="skill-graph-container"
                                                    variants={
                                                        animateSkillGraphContainer
                                                    }
                                                >
                                                    <motion.div
                                                        className="skill-graph"
                                                        variants={
                                                            animateSkillGraph
                                                        }
                                                        animate={{
                                                            opacity: 1,
                                                            width: `${skill.knowledge}%`,
                                                            transition: {
                                                                duration: 1,
                                                            },
                                                        }}
                                                    ></motion.div>
                                                </motion.div>
                                            </React.Fragment>
                                        )
                                    )}
                                </motion.div>
                                <div className="skill-list-button">
                                    {skillPage <= 3 && (
                                        <p onClick={handleSkillNext}>{">"}</p>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
                {y >= 340 && (
                    <motion.div
                        variants={animateExpEducContainer}
                        style={{ overflow: "hidden" }}
                    >
                        <motion.h3
                            className="page-subtitle"
                            variants={animateExpEducTitle}
                        >
                            Experience
                        </motion.h3>
                        <div>
                            {expereince.map((company) => (
                                <motion.div
                                    className="box-container d-flex about-exp-educ-container"
                                    key={company.id}
                                    variants={animateExpEducItem}
                                >
                                    <img
                                        src={company.img}
                                        alt="company_logo"
                                        className="about-img"
                                    />
                                    <div className="company-detail">
                                        <p className="company-name">
                                            {company.name}
                                        </p>
                                        <p className="company-role">
                                            {company.role}
                                        </p>
                                        <p className="company-date">
                                            {company.date}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
                {y >= 550 && (
                    <motion.div
                        variants={animateExpEducContainer}
                        style={{ overflow: "hidden" }}
                    >
                        <motion.h3
                            className="page-subtitle"
                            variants={animateExpEducTitle}
                        >
                            Education
                        </motion.h3>
                        <div>
                            {education.map((school) => (
                                <motion.div
                                    className="box-container d-flex about-exp-educ-container"
                                    key={school.id}
                                    variants={animateExpEducItem}
                                >
                                    <img
                                        src={school.img}
                                        alt="school_logo"
                                        className="about-img"
                                    />
                                    <div className="school-detail">
                                        <p className="school-name">
                                            {school.name}
                                        </p>
                                        <p className="school-course">
                                            {school.course}
                                        </p>
                                        <p className="school-year">
                                            {school.year}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </motion.div>
            <RightArrow {...props} route="projects" />
        </React.Fragment>
    );
};

export default About;
