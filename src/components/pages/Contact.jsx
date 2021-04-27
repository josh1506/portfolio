import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import LeftArrow from '../common/LeftArrow'
import RightArrow from '../common/RightArrow'
import imgLogo from '../assets/img/others/21004063.png'
import imgProg from '../assets/img/others/3964906.png'
import '../assets/styles/pages/contact.css'

const Contact = (props) => {
    return (
        <React.Fragment>
            <LeftArrow  {...props} route='projects' />
            <div style={{ width: '100%' }}>
                <div className='contact'>
                    <motion.h1
                        className='page-title'
                        initial={{
                            opacity: 0,
                            x: -100
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            delay: 0.5
                        }}
                       exit={{
                           opacity: 0
                       }}
                    >Contact Me:</motion.h1>
                    <motion.img 
                        alt="Image here"
                        src={imgProg}
                        initial={{
                            opacity: 0,
                            x: -100
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            type: 'spring',
                            delay: 1
                        }}
                    />
                </div>
                <div className='contact-container'>
                    <div className='contact-form'>
                        <div className="contact-image-container">
                            <motion.img
                                src={imgLogo}
                                alt="Image here"
                                initial={{
                                    scale: 0.5,
                                    opacity: 0
                                }}
                                animate={{
                                    scale: 1,
                                    opacity: 1
                                }}
                                transition={{
                                    delay: 1.5,
                                    duration: 2,
                                }}
                                drag
                                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            />
                        </div>
                        <form action="">
                            <motion.label
                                htmlFor="email"
                                initial={{
                                    x: 100,
                                    opacity: 0
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    delay: 2,
                                    duration: 1
                                }}
                            >Email:</motion.label>
                            <motion.input
                                type="email"
                                name="email"
                                id="email"
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
                                }}
                                transition={{
                                    delay: 2.5,
                                    duration: 1
                                }}
                            />
                            <motion.label
                                htmlFor="message"
                                initial={{
                                    x: 100,
                                    opacity: 0
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    delay: 3,
                                    duration: 1
                                }}
                            >Message:</motion.label>
                            <motion.textarea
                                type="text"
                                name="message"
                                id="message"
                                htmlFor="message"
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
                                }}
                                transition={{
                                    delay: 3.5,
                                    duration: 1
                                }}
                            />
                        </form>
                        <div className='contact-button-container'>
                            <div>
                                <motion.a
                                    target='_blank'
                                    href='https://traq.vercel.app/url/rmYJZ'
                                    initial={{
                                        opacity: 0,
                                        y: 100,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 4.6,
                                        duration: 1
                                    }}
                                >
                                    <FontAwesomeIcon icon={faLinkedin} className='icon-link' color='white' size='2x'/>
                                </motion.a>
                                <motion.a
                                    target='_blank'
                                    href='https://traq.vercel.app/url/IQTqM'
                                    initial={{
                                        opacity: 0,
                                        y: 100,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 4.9,
                                        duration: 1
                                    }}
                                >
                                    <FontAwesomeIcon icon={faGithub} className='icon-link' color='white' size='2x'/>
                                </motion.a>
                            </div>
                            <motion.button
                                    initial={{
                                        opacity: 0,
                                        y: 100,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    }}
                                    transition={{
                                        delay: 4,
                                        duration: 1
                                    }}
                            >Send</motion.button>
                        </div>
                    </div>
                </div>
            </div>
            <RightArrow {...props} route='' />
        </React.Fragment>
    )
}

export default Contact