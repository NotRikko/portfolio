import Style from './Pages.module.css'

function Contact () {
    return (
        <div id={Style.contact}>
            <h2>Contact Me</h2>
            <form>
                <div className={Style.formSec}>
                    <label>Name</label>
                    <input type='text'/>
                </div>
                <div className={Style.formSec}>
                    <label>Email</label>
                    <input type='email'/>
                </div>
                <div className={Style.formSec} id={Style.contact_message}>
                    <label>Message</label>
                    <textarea/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Contact