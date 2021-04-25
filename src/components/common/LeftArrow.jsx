import React, { useState } from 'react'
import { motion } from 'framer-motion'

import '../assets/styles/common/arrow.css'

const arrowTop = {
    initial: {
        opacity: 0,
        rotate: 360
    },
    visible: {
        opacity: 1,
        rotate: 30, 
        y: 12,
        transition: {
            duration: 0.3
        }
    },
    onHover: {
        rotate: 50, 
        y: 18, 
        x: -5
    },
    onClick: {
        rotate: [65, 0, 0],  
        y: [22, 0, 0], 
        x: [0, 0, -90], 
        transition: {
            duration: 0.2
        }
    }
}

const arrowBottom = {
    initial: {
        rotate: -360
    },
    visible: {
        rotate: -30, 
        y: -12,
        transition: {
            duration: 0.3
        }
    },
    onHover: {
        rotate: -50, 
        y: -18, 
        x: -5
    },
    onClick: {
        rotate: [-65, 0, 0], 
        y: [-22, 0, 0], 
        x:[0, 0, -90], 
        transition: {
            duration: 0.2
        }
    }
}

const LeftArrow = (props) => {
    const [btnRightHover, setBtnRightHover] = useState(false)
    const [btnRightClick, setBtnRightClick] = useState(false)

    return (
        <div 
            className='arrow-container' 
            style={{left: 0, borderRight: '2px salmon solid'}}  
            onMouseEnter={() => setBtnRightHover(true)} 
            onMouseLeave={() => setBtnRightHover(false)}
            onClick={() => setBtnRightClick(true)}
        >
            <div>
                <motion.div
                    variants={arrowTop}
                    initial='hidden'
                    animate={btnRightClick ? 'onClick' : btnRightHover? 'onHover' : 'visible'}
                    className='arrow'
                    style={{left: 0}}
                />
                <motion.div
                    variants={arrowBottom}
                    initial='hidden'
                    animate={btnRightClick ? 'onClick' : btnRightHover? 'onHover' : 'visible'}
                    className='arrow'
                    style={{left: 0}}
                />
            </div>
        </div>
    )
}

export default LeftArrow