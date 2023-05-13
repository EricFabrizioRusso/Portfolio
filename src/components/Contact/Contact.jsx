import React from 'react'
import ContactStyles from './Contact.module.css'
const Contact = () => {
  return (
    <div className={ContactStyles.Contact} id='Contact'>
      <h1 className={ContactStyles.Contact__Title}>Contact</h1>
        <p className={ContactStyles.Contact__Des}>Feel free to contact me for job opportunities
        using my social links on the top of the page, or fill in this form that
        I've built and I will get back at you as soon as possible.</p>
        <form className={ContactStyles.Contact__form} method='form'>
            <label className={ContactStyles.form__label} htmlFor='Name'>Name</label>
            <input className={ContactStyles.form__input} type="text" id='Name' name='name' placeholder="John Doe" autoComplete='Unknown'/>
            <label className={ContactStyles.form__label} htmlFor="email">E-mail</label>
            <input className={ContactStyles.form__input}  type="email" id='email' name='email' placeholder="john@company.com" autoComplete='Unknown'/>
            <label className={ContactStyles.form__label} htmlFor="subject">Subject</label>
            <input className={ContactStyles.form__input} type="text" id='subject' name='subject' placeholder="Work Opportunity"/>
            <label className={ContactStyles.form__label} htmlFor="message">Message</label>
            <textarea className={ContactStyles.form__textarea} id='message' name="message" cols="30" rows="10" placeholder="Hi! I'm John Doe from Company and we want to work with you."></textarea>
            <input className={ContactStyles.form__btn} type="submit" value="Send" />
        </form>
    </div>
  )
}

export default Contact