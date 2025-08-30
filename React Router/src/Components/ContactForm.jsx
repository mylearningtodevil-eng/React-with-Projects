import React from 'react'

function ContactForm() {
  return (
    <div>
        <label>Name</label>
        <input type="text" />
        <br/>
        <label>Email</label>
        <input type="email" />
        <br/>
        <label>Comment</label>
        <textarea></textarea>
        <br/>
        <button type="submit" onClick={(e)=>{
            e.preventDefault();
        }}></button>
    </div>
  )
}

export default ContactForm