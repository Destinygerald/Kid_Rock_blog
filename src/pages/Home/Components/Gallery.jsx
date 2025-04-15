import '../style.css'
import img1 from '/images/kid-rock-1.jpg'
import img2 from '/images/Kid-Rock-2.jpg'
import img3 from '/images/kid-rock-3.jpg'
import img4 from '/images/kid-rock-4.jpg'
import img5 from '/images/Kid-Rock-5.jpg'

export function Gallery () {
    return (
        <div className='gallery' id='gallery'>
            <div> <img src={img1} /> </div>
            <div> <img src={img2} /> </div>
            <div> <img src={img3} /> </div>
            <div> <img src={img4} /> </div>
            <div> <img src={img5} /> </div>
        </div>
    )
}