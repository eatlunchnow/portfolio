import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Education(props){
    return(
        <Container fluid={true}>
            <Row className='row-education'>
            
            <Col lg={true} className='xs-6 auto rounded-lg' style={{ backgroundColor:'#bdb76b'}}>
                <div className='col-education'>
                <h5 className='display-7'>Associate In Applied Science - Programming</h5>
                <h7 className='display-5'>Seattle Central College</h7>
               <p>2015 - 2018</p>

               <h5 className='display-7'>Bachelor In Applied Science - Application Development</h5>
                <h7 className='display-5'>North Seattle College</h7>
               <p>2018 - present</p>
                    </div>
                </Col>
                <Col lg={true} className='xs-6 .text-right auto px-10'>
                {props.title && <h1 className='display-1'>{props.title}</h1>}
                </Col>
            </Row>
        </Container>
    )
}


export default Education;