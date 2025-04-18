import '../style.css'
import '../style.mobile.css'
import { GiGuitar, GiPianoKeys, GiDrumKit } from 'react-icons/gi'
import { SiWwe } from 'react-icons/si'
import { IoCarSportSharp } from 'react-icons/io5'
import { MdCameraOutdoor } from 'react-icons/md'

function Nascar () {
    return (
        <>
            <svg viewBox="0 0 192.756 192.756">
                <g fill-rule="evenodd" clip-rule="evenodd">
                    <path 
                        fill="transparent" 
                        d="M0 0h192.756v192.756H0V0z"
                    />
                    <path 
                        fill='#fff'
                        d="M63.181 80.512h121.071l-9.275 31.732H53.906l9.275-31.732zM54.638 80.512h4.638l-9.032 31.732h-4.882l9.276-31.732zM46.583 80.512h4.394l-9.276 31.732h-4.15l9.032-31.732zM39.016 80.512h3.906l-9.032 31.732h-4.15l9.276-31.732zM31.693 80.512h3.417l-9.031 31.732h-3.662l9.276-31.732zM24.615 80.512h3.417l-9.276 31.732h-3.173l9.032-31.732zM17.78 80.512h3.173l-9.032 31.732H8.504l9.276-31.732z"
                    />
                    
                    <path 
                        d="M101.748 87.347l4.639-4.394h10.496l2.195 3.173-.976 3.662h-5.125l.732-2.686h-6.346l-1.709 5.859h7.323l2.929 3.904-2.685 10.01-3.174 2.928H99.062l-1.953-2.684 1.223-4.883h4.637l-.977 3.418h6.59l1.709-6.592h-7.078l-3.418-4.637 1.953-7.078zM124.449 82.953h9.764l2.685 3.661-1.464 4.638h-5.127l1.22-4.15h-5.613l-5.371 18.552h5.859l1.953-7.568h5.125l-2.197 7.812-4.637 3.905h-9.519l-2.197-3.172 5.857-20.505 3.662-3.173zM157.158 82.953h13.912l2.686 2.685-2.442 8.299-3.416 2.685 1.709 3.417-2.685 9.764h-5.371l3.174-10.741h-6.59l-3.174 10.741h-10.252l.244-5.369h-5.371l-2.439 5.369h-6.104l12.205-26.85h8.299l-.977 23.922 6.592-23.922zM96.622 109.803l1.22-26.85h-7.078l-11.717 21.969 6.347-21.969h-5.37l-3.906 13.669-1.464-13.669h-6.347l-7.811 26.85h5.614l3.662-13.181 1.464 13.181h11.961l2.685-5.369h5.37l-.244 5.369h5.614zM169.85 107.85c-.082-1.266.992-2.242 2.197-2.195 1.322-.047 2.396.93 2.441 2.195-.045 1.396-1.119 2.373-2.441 2.441-1.205-.068-2.279-1.045-2.197-2.441z"/><path d="M172.047 109.803c1.109.035 1.932-.783 1.953-1.953-.021-1.033-.844-1.857-1.953-1.951-.99.094-1.816.918-1.707 1.951-.11 1.17.717 1.988 1.707 1.953z"/><path d="M171.559 109.314h-.244v-2.684h.977c.57-.047.883.186.977.732-.094.455-.393.662-.732.732l.732 1.219h-.488l-.732-1.219h-.488v1.22h-.002z" fill="#fff"/><path d="M172.047 107.85c.4-.1.705-.125.732-.486-.027-.377-.326-.438-.488-.488h-.732v.975h.488v-.001zM161.551 87.102h6.592l-1.709 5.859h-6.59l1.707-5.859zM88.811 99.062h2.685l.245-5.613-2.93 5.613zM145.197 99.062h-2.929l3.418-7.566-.489 7.566z"                            
                    />
                </g>
            </svg>
        </>

    )
}

function FunFactCard ({ icon, hdr, cnt }) {
    return (
        <div className='fun-facts-card' id='fun-facts'>
            <div className='fun-facts-card-cnt'>
                <div className='fun-facts-card-front'>
                    <div>{icon}</div>

                    <div>{hdr}</div>
                </div>

                <div className='fun-facts-card-back'>{cnt}</div>
            </div>
        </div>
    )
}

function FunFactCard_v2 ({ icon, hdr, cnt }) {
    return (
        <div className='fun-facts-card-v2'>
            <div className='fun-facts-card-cnt'>
                <div className='fun-facts-card-front-v2'>
                    <div>
                        <span> <GiGuitar /> </span>
                        <span> <GiPianoKeys /> </span>
                        <span> <GiDrumKit /> </span>
                    </div>

                    <div>{hdr}</div>
                </div>

                <div className='fun-facts-card-back'>{cnt}</div>
            </div>
        </div>
    )
}

export function FunFact () {
    return (
        <div className='fun-facts'>
            <div className='fun-facts-1'>
                <FunFactCard_v2 hdr='Multi-Instrumentalist' cnt='He can play over five instruments, often switching mid-show.' />
                <FunFactCard hdr='NASCAR Fan' cnt='A regular at major races, and friends with many top drivers.' icon={<Nascar/> }  />
                <FunFactCard hdr='WWE Hall of Fame' cnt='Inducted in 2018, honoring his contributions to wrestling culture.' icon={<SiWwe />}  />
            </div>

            <div className='fun-facts-2'>
                <FunFactCard hdr='Classic Car Collector' cnt='Owns a legendary collection of vintage American muscle cars.' icon={<IoCarSportSharp />} />
                <FunFactCard hdr='Outdoor Enthusiast' cnt='Loves hunting, fishing, and life in the great outdoors.' icon={<MdCameraOutdoor />} />
            </div>
        </div>
    )
}