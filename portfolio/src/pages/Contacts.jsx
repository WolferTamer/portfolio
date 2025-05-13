import github from '/github.png'
import linkedin from '/linkedin.png'
import emailim from '/email.png'
import './Contacts.css'
import { useState } from 'react'

function Contacts() {

    const [email, setEmail] = useState('')
    const [fname, setfName] = useState('')
    const [lname, setlName] = useState('')
    const [message, setMessage] = useState('')
    const [emailError, setEmailError] = useState('');
    
    const  validateEmail = () => {
        if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Please enter a valid email so I can contact you.')
            return false;
          }
          setEmailError('')
          return true;
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(validateEmail()) {
            console.log('wow')
        }
    }

    return (<div className='grid'>
        <div className='grid-item'>
            <a className='styled-link' href="https://github.com/WolferTamer" target='_blank'>
                <p>GitHub</p> <img src={github}/>
            </a>
            <a className='styled-link' href="https://www.linkedin.com/in/caleb-cassin/" target='_blank'>
                <p>LinkedIn</p> <img src={linkedin}/> 
            </a>
            <a className='styled-link' href="mailto:calebbcassin@gmail.com" target='_blank'>
                <p>calebbcassin@gmail.com</p> <img src={emailim}/> 
            </a>
        </div>
        <form className='grid-item' onSubmit={submitHandler}>

            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." onChange={(e) => setfName(e.target.value)} required/>

            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" onChange={(e) => setlName(e.target.value)} placeholder="Your last name.."/>

            <label htmlFor="email">Contact Info</label>
            <input type="text" id="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Your Email..." required/>

            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" onChange={(e) => setMessage(e.target.value)} placeholder="Write something.." required/>
            
            <input type="submit" value="Submit"/>
            {emailError && <p>{emailError}</p>}
        </form>
    </div>)
}

export default Contacts