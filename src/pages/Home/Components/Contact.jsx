import '../style.css'
import '../style.mobile.css'

export function Contact () {

    function contact () {
        window.location.href = 'mailto:artistmanagementinquiries@gmail.com'
    }

    return (
        <div className='contact'>
            
            <div>
                For more Information?
            </div>

            <button onClick={contact}> Contact Us </button>
        </div>
    )
}