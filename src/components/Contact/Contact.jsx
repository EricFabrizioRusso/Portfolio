import React, { useState } from 'react';
import ContactStyles from './Contact.module.css'

const initialForm= {

  name:"",
  email:"",
  subject:"",
  message:"",
  




}








const Contact = () => {

  const [form, setForm] = useState(initialForm);

 const handleSubmit= async (e)=>{

  console.log("entra funcion")
  try{

    console.log("entra al try")
    const response= await fetch("https://formsubmit.co/ajax/erickfernusg1@gmail.com",{
  
      method: "POST",
  
      body: form,
  
      headers: {
  
        "Content-Type": "application/json",
        Accept: "application/json",
  
      },
  
  
    })
    const json= await response.json(); 
    console.log(json)

    setForm(initialForm)

  

  }catch(err){


    console.log(err.message);

  }



 }


  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setForm({
      ...form,
      [name]: value,
    });
  };


  return (
    <div className={ContactStyles.Contact} id='Contact'>
      <h1 className={ContactStyles.Contact__Title}>Contact</h1>
        <p className={ContactStyles.Contact__Des}>Feel free to contact me for job opportunities
        using my social links on the top of the page, or fill in this form that
        I've built and I will get back at you as soon as possible.</p>
        <form target='_blank' className={ContactStyles.Contact__form} method='post' onSubmit={handleSubmit}>
            <label className={ContactStyles.form__label} htmlFor='Name'>Name</label>
            <input className={ContactStyles.form__input} type="text" id='Name' name='name' placeholder="John Doe" autoComplete='Unknown' onChange={handleChange} value={form.name} required/>
            <label className={ContactStyles.form__label} htmlFor="email">E-mail</label>
            <input className={ContactStyles.form__input}  type="email" id='email' name='email' placeholder="john@company.com" autoComplete='Unknown'  onChange={handleChange} value={form.email} required/>
            <label className={ContactStyles.form__label} htmlFor="subject">Subject</label>
            <input className={ContactStyles.form__input} type="text" id='subject' name='subject' placeholder="Work Opportunity"  onChange={handleChange} value={form.subject} required/>
            <label className={ContactStyles.form__label} htmlFor="message">Message</label>
            <textarea className={ContactStyles.form__textarea} id='message' name="message" cols="30" rows="10" placeholder="Hi! I'm John Doe from Company and we want to work with you." onChange={handleChange} required value={form.message}></textarea>
            <input className={ContactStyles.form__btn} type="submit" value="Send"/>
        </form>
    </div>
  )
}

export default Contact