import { useState } from 'react'
import Style from './Pages.module.css'

function Contact () {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }


    return (
        <div id={Style.contact}>
            <h2>Contact Me</h2>
            <form>
                <div className={Style.formSec}>
                    <label>Name</label>
                    <input 
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}/>
                </div>
                <div className={Style.formSec}>
                    <label>Email</label>
                    <input 
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    />
                </div>
                <div className={Style.formSec} id={Style.contact_message}>
                    <label>Message</label>
                    <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Contact