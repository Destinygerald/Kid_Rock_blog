import './style.css'
import './style.mobile.css'
import { Banner } from './Components/Banner'
import { FunFact } from './Components/FunFacts'
import { Gallery } from './Components/Gallery'
import { Section1 } from './Components/Section1'
import { Section2 } from './Components/Section2'
import { Section3 } from './Components/Section3'
import { Section4 } from './Components/Section4'
import { Section5 } from './Components/Section5'
import { Section6 } from './Components/Section6'
import { Section7 } from './Components/Section7'
import { Section8 } from './Components/Section8'
import { Section9 } from './Components/Section9'
import { Section10 } from './Components/Section10'
import { Contact } from './Components/Contact'


function Page () {
    return (
        <div className='homepage'>
            <Banner />
            <FunFact />
            <Section1 />
            <Section2 />
            <Gallery />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <Contact />
        </div>
    )
}

export default Page