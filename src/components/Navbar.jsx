import { useState } from 'react'
import './style.css'
import './style.mobile.css'
import { useLocation } from 'react-router-dom'

export function Navbar () {
    const [ menuOn, setMenuOn ] = useState(false)
    const { hash } = useLocation()

    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                KID ROCK
            </div>


            <div className='navbar-nav'>
                <div>Menu</div>

                <div className='navbar-nav-active'>Home</div>
            </div>

            <div className='navbar-btn'>
                Contact
            </div>
        </div>
    )
}