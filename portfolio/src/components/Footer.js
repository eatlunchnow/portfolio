import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function Footer(){
    return(
    <footer className='mt-5'>
        <Container fluid={true}>
            <Row className='justify-content-between p-3'>
                <Col className='p-0' md={3} sm={12}>
                    <a href='https://github.com/eatlunchnow/' target="_blank" rel="noopener noreferrer">
                        <AiFillGithub />
                    </a>
                    <a href='https://www.linkedin.com/in/kiara-mcmorris-she-her-024550164/' target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
                </a>
                </Col>
                <Col className='p-0 d-flex justify-content-end' md={3}>
                    Made by Kiara McMorris 
               <span dangerouslySetInnerHTML={{ '__html': '&copy; 2020 ' }} />  
                </Col>
            </Row>
        </Container>
    </footer>
    )

}

export default Footer;