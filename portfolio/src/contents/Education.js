import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Education(props){
    return(
        <Container fluid={true}>
           <Row className='justify-content-center'>
               <Col lg={true}> {props.title && <h1 className='display-1 font-weight-bolder'>{props.title}</h1>}</Col>
           </Row>
        </Container>
    )
}


export default Education;