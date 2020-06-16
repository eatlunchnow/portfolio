import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import fon from '../img/memberpage.png';
import meal from '../img/mealticket1.png';

const useStyles = makeStyles({
    root: {
        maxWidth: 545,
    },
    media: {
        height: 240,
    },
})

function CardDisplay(){
    const classes = useStyles();
    return(
        <Container>
            <Row className='card-info'>
                <Col>
       <Card className={classes.root}>
           
               <CardMedia
               className={classes.media}
               image={fon}
               title='Friends Of Noise'  
               />
           <CardContent>
               <Typography gutterBottom varient='h5' component='h2'>Web Developer - Friends of Noise</Typography>
               <Typography variant='body2' color='textSecondary'>April 2019 - June 2019</Typography>
               <Typography variant='body2' color='textPrimary' component='p'>Site re-built for Friends of Noise, 
               a non-profit focused on providing safe spaces for youth develop art and leadership skills. </Typography>
               </CardContent>   
           
       </Card>
       </Col>
       <Col>
       <Card className={classes.root}>
          
               <CardMedia
               className={classes.media}
               image={meal}
               title='Meat Ticket'  
               />
           <CardContent>
               <Typography gutterBottom varient='h5' component='h2'>Web Developer - Meal Ticket</Typography>
               <Typography variant='body2' color='textSecondary'>January 2019 - March 2019</Typography>
               <Typography variant='body2' color='textPrimary' component='p'>Grocery store list app Meal Ticket.  </Typography>
               </CardContent>   
           
       </Card>
       </Col>
       </Row>
       </Container>
    )
}

export default CardDisplay;