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
               <p>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique massa non odio semper, id ultrices 
                libero cursus. Pellentesque sed eros purus. Aenean ultrices, lorem vitae commodo lobortis, lacus odio 
                vestibulum lorem, ut convallis quam purus ac mi. Quisque mollis eu mauris eu tempor. Morbi porttitor 
                ipsum varius tristique blandit. Phasellus rutrum tempus pretium. Sed ullamcorper, eros at pretium 
                sollicitudin, lectus massa lacinia lorem, interdum scelerisque mi magna quis nisi. Donec id tellus ac 
                risus fermentum semper vitae nec est.</p>

                <p>In arcu lectus, commodo sed ligula vel, sollicitudin semper metus. Fusce et neque vitae diam ornare 
                    posuere vitae pellentesque mauris. In hac habitasse platea dictumst. Donec ac mi mauris. Nulla 
                    facilisi. Maecenas consectetur quam a rutrum faucibus. Nulla facilisi. Vestibulum ante ipsum primis 
                    in faucibus orci luctus et ultrices posuere cubilia curae; Sed et orci id ipsum dapibus posuere ut a 
                    felis.</p>
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