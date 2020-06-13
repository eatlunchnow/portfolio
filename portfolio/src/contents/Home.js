import React from 'react';
import headshot from '../img/headshot.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home(props){
    return(
            <Container fluid={true}>
                <Row className='justify-content-center py-0'>
                    <Col lg={true} className='xs-6 auto px-0'>
                        <img className='img-fluid w-100' src={headshot} alt='Headshot' />
                         </Col>
                    <Col lg={true} className='xs-6 .text-left auto px-0' style={{ backgroundColor:'#6e8b3d'}}>
                    {props.title && <h1 className='display-1 font-weight-bolder'>{props.title}</h1>}
                    </Col>
                    <Col lg={true} className='xs-6 auto' style={{ backgroundColor:'#bdb76b'}}>
                         {props.subTitle && <h2 className='display-1'>{props.subTitle}</h2>}
                    </Col>
                </Row>
            </Container>
    )
}

export default Home;