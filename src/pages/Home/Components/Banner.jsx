import '../style.css'
import '../style.mobile.css'
import { IoMusicalNotes } from 'react-icons/io5'

export function Banner () {

    function explore () {
        window.location.href = `#early-life`
    }

    return (
        <div className='homepage-banner'>
            <div>
                Welcome to the Official Kid Rock <span className='music-icon'> <IoMusicalNotes /> </span> Website.
            </div>

            <div>
                Kid Rock: American Rebel with a Cause. Robert James Ritchie, famously known as Kid Rock, embodies the true spirit of American freedom and individuality. From spinning records in Detroit to selling out stadiums around the world, Kid Rock’s career is a rare story of resilience, reinvention, and raw authenticity.

                With a career spanning over three decades, Kid Rock has become one of music’s boldest and most unpredictable icons. Mixing rock, hip-hop, country, and blues, he’s built a sound—and a legacy—that’s entirely his own.
            </div>

            <button onClick={explore}>Explore</button>
        </div>
    )
}