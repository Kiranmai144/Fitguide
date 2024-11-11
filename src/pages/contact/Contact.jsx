import { useState, useRef } from "react"
import { db } from "../../firebase-config"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import PageHead from "../../components/pageHead/PageHead"
import { validateForm } from "../../utils/validateForm"
import { FaPaperPlane } from 'react-icons/fa'
import "./contact.css"

const Contact = () => {

    const initialValues = { name: "", email: "", message: "", isSuccess: false}
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const refName = useRef()
    const refEmail = useRef()
    const refMessage= useRef()

    const handleChange = (e) => {
        e.persist()
        let name = e.target.name
        let value = e.target.value
        validateForm(name, value, errors, setErrors, refName, refEmail, refMessage )
        setValues({...values, [name]:value, isSuccess: false})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, "messages"), {
                name: values.name,
                email: values.email,
                message: values.message,
                timeStamp: serverTimestamp()
            })
            setValues({...initialValues, isSuccess: true})
            {
                [refName, refEmail, refMessage].map((refItem) => {
                    return refItem.current.classList.remove("contact__form-input--valid")
                })
            }
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <>
        <PageHead title="Contact us" paragraph="A short paragraph goes here."/>
        <div className="contact__form-container container">
            <form className="contact__form" method="" onSubmit={(e) => handleSubmit(e) } >
                <div className="contact__form-name">
                    <label className="contact__form-label" htmlFor="name">Full name</label>
                    <input className="contact__form-input"
                        ref={refName} 
                        value={values.name}
                        id="name" 
                        type="text" 
                        placeholder="Enter your full name" 
                        name="name" 
                        onChange={handleChange}
                        autoComplete="off"
                        required />
                    {errors.name && <span className="contact__form-error">{errors.name}</span>}
                </div>
                <div className="contact__form-email">
                    <label className="contact__form-label" htmlFor="email">Email</label>
                    <input className="contact__form-input"
                        ref={refEmail}
                        value={values.email}
                        id="email"
                        type="email" 
                        placeholder="Enter your email" 
                        name="email"
                        onChange={handleChange}
                        autoComplete="off"
                        required />
                    {errors.email && <span className="contact__form-error">{errors.email}</span>}
                </div>
                <div className="contact__form-message">
                    <label className="contact__form-label" htmlFor="message">Message</label>
                    <textarea className="contact__form-input"
                        ref={refMessage}
                        value={values.message}
                        id="message" 
                        placeholder="Enter your message" 
                        rows="10" 
                        name="message"
                        onChange={handleChange} 
                        autoComplete="off"
                        required>
                    </textarea>
                    {errors.message && <span className="contact__form-error">{errors.message}</span>}
                </div>
                {values.isSuccess && (
                    <div className="contact__form-success">
                        Your message has been sent successfully!
                    </div>
                )}
                <div className="primary-btn__container">
                    <button className="primary-btn btn" type="submit" id="submit" value="submit" name="Submit">Submit<FaPaperPlane /></button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Contact