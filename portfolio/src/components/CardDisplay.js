import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import fon from '../img/fon.png';
import meal from '../img/mt.png';
import hownot from '../img/hownot.png';
import getapi from '../img/getapi.png';
import bd from '../img/bd.png';
import marssociety from '../img/marssociety.png';

import FONbutton from '../cardButton/FONbutton';
import MTbutton from '../cardButton/MTbutton';
import HowNotbutton from '../cardButton/HowNotbutton';
import POGbutton from '../cardButton/POGbutton';
import BDbutton from '../cardButton/BDbutton';
import MSbutton from '../cardButton/MSbutton';

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
               image={bd}
               title='Burlesque Directory'
               />
           <CardContent>
               <Typography gutterBottom varient='h5' component='h2'>Web Developer - Burlesque Directory</Typography>
               <Typography variant='body2' color='textSecondary'>April 2020 - present</Typography>
               <Typography variant='body2' color='textPrimary' component='p'>Web app for burlesque performers to network. </Typography>
               <BDbutton />
               </CardContent>   
           
       </Card>
       </Col>
                
                <Col>
       <Card className={classes.root}>
           
               <CardMedia
               className={classes.media}
               image={getapi}
               title="Pot O' Gold"
               />
           <CardContent>
               <Typography gutterBottom varient='h5' component='h2'>Database Administrator/Backend Engineer - Pot O' Gold</Typography>
               <Typography variant='body2' color='textSecondary'>March 2020 - April 2020</Typography>
               <Typography variant='body2' color='textPrimary' component='p'>Site re-built for Pot O' Gold, a company that 
               provides coffee based supplies and repair to businesses. </Typography>
               <POGbutton />
               </CardContent>   
           
       </Card>
       </Col>
       
       </Row>
            <Row className='card-info'>
            <Col>
       <Card className={classes.root}>
           
               <CardMedia
               className={classes.media}
               image={marssociety}
               title='The Mars Society'  
               />
           <CardContent>
               <Typography gutterBottom varient='h5' component='h2'>Android App Developer - The Mars Society</Typography>
               <Typography variant='body2' color='textSecondary'>April 2019 - June 2019</Typography>
               <Typography variant='body2' color='textPrimary' component='p'>App build for The Mars Society group. </Typography>
               <MSbutton />
               </CardContent>   
           
       </Card>
       </Col>
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
               <FONbutton />
               </CardContent>   
           
       </Card>
       </Col>
      
       </Row>
       <Row className='card-info'>
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
               <MTbutton />
               </CardContent>   
           
       </Card>
       </Col>
                <Col>
       <Card className={classes.root}>
           
               <CardMedia
               className={classes.media}
               image={hownot}
               title='How Not To Be A D*ck'  
               />
           <CardContent>
               <Typography gutterBottom varient='h5' component='h2'>Android App Developer - How Not To Be A D*ck</Typography>
               <Typography variant='body2' color='textSecondary'>April 2018 - June 2018</Typography>
               <Typography variant='body2' color='textPrimary' component='p'>Quiz game. </Typography>
               <HowNotbutton />
               </CardContent>   
           
       </Card>
       </Col>
       </Row>
       </Container>
    )
}

export default CardDisplay;