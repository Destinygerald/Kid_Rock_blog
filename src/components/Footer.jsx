import './style.css'
import './style.mobile.css'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'
import { RiInstagramFill } from 'react-icons/ri'
import { useState } from 'react'


export function Footer () {

    const [ email, setEmail ] = useState('')
    const [ msg, setMsg ] = useState('')
    
    function submit () {

        if (!email) return;

        setTimeout(() => {
            setEmail('')

            setMsg('Successfully Suscribed')

            setTimeout(() => {
                setMsg('')
            }, 1200)
        }, 1200)
        
    }

    
    function socials (link) {
        window.location.href = link
    }

    return (
        <div className='footer' id='contact'>
            <div className='footer-main'>

                <div className='footer-main-head'>
                    <span> Stay Connected with Kid Rock </span>

                    <div className='footer-input'>
                        <input placeholder='Email Address' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button onClick={submit}>Subscribe</button>
                    </div>

                    <span>Join the Kid Rock Fan Club for VIP experiences and one-of-a-kind memories.</span>
                </div>

                <div className='footer-nav'>
                    <div>
                        <a href='#early-life'>Kid-Rock's Life</a>
                        <a href='#albums'>Albums</a>
                        <a href='#culture'>Cultural Impact</a>
                    </div>

                    <div>
                        <a href='#legacy'>Kid-Rock's Legacy</a>
                        <a href='#philanthropy'>Philanthropy</a>
                        <a href='#shows'>Life Shows</a>
                    </div>

                    <div>                
                        <a href='#values'>Values and Quotes</a>
                        <a href='#fun-facts'>Fun Facts</a>
                    </div>
                </div>


                <div className='footer-contacts'>
                    <div>Follow for the latest updates.</div>
                    <div>
                        <span onClick={() => socials('http://facebook.com/kidrock')}> <FaFacebook /> </span>
                        <span onClick={() => socials('http://instagram.com/kidrock')}> <RiInstagramFill /> </span>
                        <span onClick={() => socials('http://twitter.com/kidrock')}> <RiTwitterXFill /> </span>
                        <span onClick={() => socials('http://youtube.com/c/kidrock')}> <FaYoutube />  </span>
                    </div>
                </div>
            
            </div>

            <div className='footer-copyrights'>
                CopyRight © 2025. All rights reserved.
            </div>

            {
                msg
                ?
                <div className='footer-msg'>
                    {msg}
                </div>
                :
                <></>
            }
        </div>
    )
}