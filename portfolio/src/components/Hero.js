import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Hero(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col mid={8} sm={27}>
                        {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>

    )
}

export default Hero;