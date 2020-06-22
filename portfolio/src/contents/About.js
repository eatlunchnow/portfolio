import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(props){
    return(
        <Container fluid={true}>
            <Row className='row-about'>
            <Col lg={true} className='xs-6 .text-right auto px-10'>
                {props.title && <h1 className='display-1'>{props.title}</h1>}
                </Col>
            <Col lg={true} className='xs-6 auto rounded-lg' style={{ backgroundColor:'#6e8b3d'}}>
                <div className='col-about'>
               <p>I have over 5 years experience in a wide variety of languages, platforms, and technologies. </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default About;