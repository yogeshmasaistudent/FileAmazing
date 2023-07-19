import React from 'react'

const Mailer =()=> {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendEmail()
    }
  return (
    <div>
        <h1>Contact Form</h1>
        <form>
            <lable>Name:</lable>
            <input type='text' name='name'/>
            <label>Email</label>
            <input type='email' name='user-email'/>
            <label>Message</label>
            <textarea name='message'/>
            <input type='submit'value="send"/>
        </form>
    </div>
  )
}

export default Mailer