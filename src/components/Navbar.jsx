import { useState } from 'react'
import './style.css'
import './style.mobile.css'
import { useLocation } from 'react-router-dom'
import { CgMenuGridO } from 'react-icons/cg'
import { BsX } from 'react-icons/bs'
import { motion, AnimatePresence, animate, delay } from 'framer-motion'

const variants = {
    initial: {
        scaleY: '0%'
    },

    animate: {
        scaleY: `100%`,
        transition: {
            duration: .4
        }
    }, 
    
    exit: {
        scaleY: '0%',
        transition: {
            delay: .2,
            duration: .4
        }
    }
}

const variants_2 = {
    initial: {
        opacity: 0
    },

    animate: {
        opacity: 1,
        transition: {
            delay: .4,
            duration:  .4
        }
    },

    exit: {
        opacity: 0,
        transition: {
            duration: .2
        }
    }
}

function NavSlider ({ menuOn, setMenuOn }) {
    return (
        <div className='navbar-slider'>
            <AnimatePresence key='slider' mode='wait'>
            {
                menuOn
                ?
                
                    <motion.div 
                        className='navbar-slider-main'
                        variants={variants}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                    >
                        <span className='exit' onClick={() => setMenuOn(false)}> <BsX /> </span>
                        
                        <a href='#early-life' onClick={() => setMenuOn(false)}>Kid Rock Early Life</a>
                        <a href='#albums' onClick={() => setMenuOn(false)}>Albums</a>
                        <a href='#culture' onClick={() => setMenuOn(false)}>Cultural Impact</a>
                        <a href='#values' onClick={() => setMenuOn(false)}>Personal Values and Quotes</a>
                        <a href='#fun-facts' onClick={() => setMenuOn(false)}>Fun Facts</a>

                    </motion.div>
                :
                <></>
            }
            
            </AnimatePresence>
        </div>
    )
}

export function Navbar () {
    const [ menuOn, setMenuOn ] = useState(false)
    const { hash } = useLocation()

    function contact () {
        // location.href = 'mailto:artistmanagementinquiries@gmail.com'
        window.open("mailto:artistmanagementinquiries@gmail.com")
        // window.location.href = 'mailto:artistmanagementinquiries@gmail.com'
    }


    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                KID ROCK
            </div>


            <div className='navbar-nav' onClick={() => setMenuOn(true)}>
                <div> <CgMenuGridO /> </div>

                <div className='navbar-nav-active'>Menu</div>
            </div>

            <div className='navbar-btn' onClick={contact}>
                Contact
            </div>

            <NavSlider menuOn={menuOn} setMenuOn={setMenuOn} />
        </div>
    )
}