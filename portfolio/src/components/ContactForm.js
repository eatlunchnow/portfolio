import React, { useState } from 'react'
import { Axios } from '../firebase/firebaseConfig';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactForm = () => {
  const [formData, setFormData] = useState({})
  const [validated, setValidated] = useState(false)

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  })

  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    })
    if (ok) {
      formData({
        name: '',
        email: '',
        message: '',
        
      })
    }
  }

  const handleSubmit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }  
    setValidated(true) 
    event.preventDefault()
    setServerState({ submitting: true })
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }
  const sendEmail = () => {
    Axios.post(
      'https://us-central1-contactform-c9028.cloudfunctions.net/submit',
      formData
    )
      /* .then(res => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        })
      }) */
      .then(res => {
        handleServerResponse(true, "Thank you! We will be in touch soon.")
      })
      .catch(res => {
        handleServerResponse(false, res.response.data.error)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
   
      <Form noValidate validated={validated} onSubmit={handleSubmit} className='contact-form'>
        <Form.Group controlId="validationName">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={updateInput}
          value={formData.name || ''}
          required
        />
        <Form.Control.Feedback type="invalid">
              Please provide your name
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={updateInput}
          value={formData.email || ''}
          required
        />
        </Form.Group>
        <Form.Group>
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          onChange={updateInput}
          value={formData.message || ''}
          required
        ></textarea>
        </Form.Group>
        <Button type="submit" disabled={serverState.submitting}>Submit</Button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
        
      </Form>
      
    </>
  )
}

export default ContactForm;