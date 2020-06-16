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

                <p>Nunc enim erat, rutrum eget aliquet a, rhoncus a leo. Proin blandit, urna at vehicula maximus, felis 
                    libero mollis sapien, sit amet hendrerit quam eros ut ante. Fusce euismod erat quis blandit pretium. 
                    Sed sagittis, ante vel egestas suscipit, augue odio tincidunt risus, ut rhoncus dui tortor mollis erat.
                    Vestibulum bibendum est id faucibus porttitor. Praesent dignissim dui non blandit eleifend. Etiam 
                    pulvinar aliquam velit, et ultrices nisl dictum congue. Etiam elementum dolor quis magna rutrum dictum. 
                    Suspendisse potenti. Proin eget lacus leo.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default About;