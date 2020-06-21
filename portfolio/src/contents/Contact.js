import React  from 'react';
import ContactForm from '../components/ContactForm';
import Content from '../components/Content';


function Contact(props) {
    return (
        <div>
             <div className='justify-content-center'>
           {props.title && <h1 className='display-1' style={{textAlign: 'center'}}>{props.title}</h1>}</div>
            <Content>
                <p style={{textAlign: 'center'}}>You can get in touch with me by filling out the form below</p>
        <ContactForm/>
        </Content>
        </div>
        )
    }


export default Contact;