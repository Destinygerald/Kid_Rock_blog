import './style.css'
import './style.mobile.css'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'
import { RiInstagramFill } from 'react-icons/ri'


export function Footer () {
    return (
        <div className='footer'>
            <div className='footer-main'>

                <div className='footer-main-head'>
                    <span> Stay Connected with Kid Rock </span>

                    <div className='footer-input'>
                        <input placeholder='Email Address' />
                        <button>Subscribe</button>
                    </div>

                    <span>Join the Kid Rock Fan Club for VIP experiences and one-of-a-kind memories.</span>
                </div>

                <div className='footer-nav'>
                    <div>
                        <a>Home</a>
                        <a>About</a>
                        <a>Home</a>
                        <a>Home</a>
                        <a>Home</a>
                    </div>

                    <div>
                        <a>Home</a>
                        <a>About</a>
                        <a>Home</a>
                        <a>Home</a>
                        <a>Home</a>
                    </div>

                    <div>
                        <a>Home</a>
                        <a>Home</a>
                        <a>Home</a>
                    </div>
                </div>


                <div className='footer-contacts'>
                    <div>Follow for the latest updates.</div>
                    <div>
                        <span> <FaFacebook /> </span>
                        <span> <RiInstagramFill /> </span>
                        <span> <RiTwitterXFill /> </span>
                        <span> <FaYoutube />  </span>
                    </div>
                </div>
            
            </div>

            <div className='footer-copyrights'></div>
        </div>
    )
}