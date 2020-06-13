import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(props){
    return(
        <Container fluid={true}>
            <Row className='justify-center-content'>
            <Col lg={true} className='xs-6 auto py-10'>
                {props.title && <h1 className='display-1 font-weight-bolder'>{props.title}</h1>}
                </Col>
            <Col lg={true} className='xs-6 auto .p-10' style={{ backgroundColor:'#6e8b3d'}}>
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

                <p>Donec sed urna purus. Suspendisse sed tincidunt metus. Pellentesque habitant morbi tristique senectus et 
                    netus et malesuada fames ac turpis egestas. Aliquam ultrices consequat porttitor. Sed pellentesque felis
                     et vehicula scelerisque. Duis eget metus magna. Cras congue sed nibh et egestas. Sed quis felis diam. 
                     Sed sit amet consectetur ligula. Aliquam scelerisque bibendum odio quis consequat. Donec fringilla metus 
                     erat, quis imperdiet massa posuere vulputate. Mauris consectetur purus quis mauris sodales tempus. Cras 
                     ullamcorper magna mauris. Cras lacus mauris, interdum sed est eget, sodales suscipit enim.</p>

                <p>Sed nulla enim, tristique eget odio et, tristique varius nibh. Curabitur et ipsum luctus, convallis elit 
                    vitae, fringilla lacus. Etiam dictum orci in blandit pharetra. Class aptent taciti sociosqu ad litora torquent
                     conubia nostra, per inceptos himenaeos. Fusce laoreet rhoncus eros eget tristique. Quisque malesuada euismod 
                     purus, mollis varius augue blandit sodales. Integer justo est, interdum tincidunt est eget, vestibulum viverra
                      est. </p>
                </Col>
            </Row>
        </Container>
    )
}


export default About;