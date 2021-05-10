import React, { useEffect } from "react";
import { motion } from "framer-motion";

import LeftArrow from "../common/LeftArrow";
import RightArrow from "../common/RightArrow";
import imgLogo from "../assets/img/others/21004063-new.png";
import "../assets/styles/pages/landing.css";

const animateContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 1.7,
        },
    },
    onExit: {
        opacity: 0,
    },
};

const animateGreetingsContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const animateGreetings = {
    hidden: {
        x: 50,
        y: 100,
        rotate: 0,
        opacity: 0,
    },
    visible: {
        x: 0,
        y: 0,
        rotate: 3600,
        opacity: 1,
    },
};

const animateNameContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const animateName = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

const animateRoleContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.02,
        },
    },
};

const animateRole = {
    hidden: {
        y: 400,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const animateBackgroundImg = {
    hidden: {
        x: 100,
        y: 50,
        zIndex: -1,
        scale: 0.5,
        opacity: 0,
    },
    visible: {
        x: 0,
        y: 0,
        zIndex: -1,
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1,
            delay: 5.9,
        },
    },
};

const Landing = (props) => {
    const greetingMessage = "Hello my name is";
    const firstName = "Joshua Michael";
    const lastName = "Jabor";
    const role = "I'm a Python Developer...";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{overflowY: 'hidden'}}>
            <LeftArrow {...props} route="contact" />

            <motion.div
                variants={animateContainer}
                initial="hidden"
                animate="visible"
                exit="onExit"
                className="landing-container"
            >
                <div className="landing-content-container">
                    <motion.div
                        variants={animateGreetingsContainer}
                        className="d-flex landing-message"
                    >
                        {[...greetingMessage].map((letter, index) => (
                            <motion.h3 key={index} variants={animateGreetings}>
                                {letter}
                            </motion.h3>
                        ))}
                    </motion.div>
                    <motion.div
                        variants={animateNameContainer}
                        className="d-flex landing-name"
                    >
                        {[...firstName].map((letter, index) => (
                            <motion.h3 key={index} variants={animateName}>
                                {letter}
                            </motion.h3>
                        ))}
                    </motion.div>
                    <motion.div
                        variants={animateNameContainer}
                        className="d-flex landing-name"
                    >
                        {[...lastName].map((letter, index) => (
                            <motion.h3 key={index} variants={animateName}>
                                {letter}
                            </motion.h3>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={animateRoleContainer}
                        className="d-flex landing-role"
                    >
                        {[...role].map((letter, index) => (
                            <motion.h3 key={index} variants={animateRole}>
                                {letter}
                            </motion.h3>
                        ))}
                    </motion.div>
                </div>
                <div className="landing-image-container">
                    <motion.img
                        alt="photo here"
                        src={imgLogo}
                        variants={animateBackgroundImg}
                    />
                </div>
            </motion.div>

            <RightArrow {...props} route="about" />
        </div>
    );
};

export default Landing;
