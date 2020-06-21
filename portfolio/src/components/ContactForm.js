import React, { useState } from 'react'
import { Axios, db } from '../firebase/firebaseConfig';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactForm = () => {
  const [formData, setFormData] = useState({})

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }
  const sendEmail = () => {
    Axios.post(
      'https://us-central1-contactform-c9028.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={updateInput}
          value={formData.name || ''}
          required
        />
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
        <Button type="submit">Submit</Button>
        
      </Form>
    </>
  )
}

export default ContactForm;