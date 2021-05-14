import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import LeftArrow from "../common/LeftArrow";
import RightArrow from "../common/RightArrow";
import imgLogo from "../assets/img/others/21004063.png";
import imgProg from "../assets/img/others/3964906.png";
import "../assets/styles/pages/contact.css";

const Contact = (props) => {
    const [disableButton, setDisableButton] = useState(true);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [form, setForm] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const handleValueChage = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };

    useEffect(() => {
        if (form.email === "") return setDisableButton(true);
        if (form.subject === "") return setDisableButton(true);
        if (form.message === "") return setDisableButton(true);
        setDisableButton(false);
    }, [form]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        emailjs
            .sendForm(
                "service_ocq554t",
                "template_o44l6gi",
                e.target,
                "user_MndqP5y0rcoeTQOKzmcd7"
            )
            .then(
                (result) => {
                    setError("");
                    setSuccess("Email Sent");
                },
                (error) => {
                    const errorMessage = error.text.split(".");
                    setError(errorMessage[0]);
                    setSuccess("");
                }
            );
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            <LeftArrow {...props} route="projects" />
            <div
                style={{
                    width: "100%",
                    overflow: "hidden",
                    paddingBottom: 120,
                }}
            >
                <div className="contact">
                    <motion.h1
                        className="page-title"
                        initial={{
                            opacity: 0,
                            x: -100,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            delay: 0.3,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                    >
                        Contact Me:
                    </motion.h1>
                    <motion.img
                        className="contact-left-img"
                        alt="Image here"
                        style
                        src={imgProg}
                        initial={{
                            opacity: 0,
                            x: -100,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            type: "spring",
                            delay: 0.6,
                        }}
                    />
                </div>
                <div className="contact-container">
                    <div className="contact-form">
                        <div className="contact-image-container">
                            <motion.img
                                src={imgLogo}
                                alt="Image here"
                                initial={{
                                    scale: 0.5,
                                    opacity: 0,
                                }}
                                animate={{
                                    scale: 1,
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: 0.3,
                                    duration: 2,
                                }}
                                drag
                                dragConstraints={{
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                }}
                            />
                        </div>
                        {error !== "" && (
                            <motion.p
                                style={{
                                    color: "#f08080",
                                    fontSize: 13,
                                    textAlign: "center",
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                *{error}
                            </motion.p>
                        )}
                        {success !== "" && (
                            <motion.p
                                style={{
                                    color: "#60d394",
                                    fontSize: 13,
                                    textAlign: "center",
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                *{success}
                            </motion.p>
                        )}
                        <form onSubmit={handleSubmit}>
                            <motion.label
                                htmlFor="email"
                                initial={{
                                    x: 100,
                                    opacity: 0,
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: 1,
                                    duration: 1,
                                }}
                            >
                                Your email:
                            </motion.label>
                            <motion.input
                                type="email"
                                name="email"
                                id="email"
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: 1.5,
                                    duration: 1,
                                }}
                                onChange={handleValueChage}
                            />

                            <motion.label
                                htmlFor="subject"
                                initial={{
                                    x: 100,
                                    opacity: 0,
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: 2,
                                    duration: 1,
                                }}
                            >
                                Subject:
                            </motion.label>
                            <motion.input
                                type="text"
                                name="subject"
                                id="subject"
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: 2.5,
                                    duration: 1,
                                }}
                                onChange={handleValueChage}
                            />

                            <motion.label
                                htmlFor="message"
                                initial={{
                                    x: 100,
                                    opacity: 0,
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: 3,
                                    duration: 1,
                                }}
                            >
                                Message:
                            </motion.label>
                            <motion.textarea
                                type="text"
                                name="message"
                                id="message"
                                htmlFor="message"
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: 3.5,
                                    duration: 1,
                                }}
                                onChange={handleValueChage}
                            />

                            <div className="contact-button-container">
                                <div>
                                    <motion.a
                                        target="_blank"
                                        href="https://traq.vercel.app/url/rmYJZ"
                                        initial={{
                                            opacity: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                        }}
                                        transition={{
                                            delay: 4.6,
                                            duration: 1,
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faLinkedin}
                                            className="icon-link"
                                            color="white"
                                            size="2x"
                                        />
                                    </motion.a>
                                    <motion.a
                                        target="_blank"
                                        href="https://traq.vercel.app/url/IQTqM"
                                        initial={{
                                            opacity: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                        }}
                                        transition={{
                                            delay: 4.9,
                                            duration: 1,
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            className="icon-link"
                                            color="white"
                                            size="2x"
                                        />
                                    </motion.a>
                                </div>
                                <motion.button
                                    initial={{
                                        opacity: 0,
                                        x: 100,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        scale: 1,
                                    }}
                                    transition={{
                                        delay: 4,
                                        duration: 1,
                                        type: "spring",
                                        stiffness: 100,
                                    }}
                                    disabled={disableButton}
                                >
                                    Send
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <RightArrow {...props} route="" />
        </React.Fragment>
    );
};

export default Contact;
