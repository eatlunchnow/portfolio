import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Home from './contents/Home';
import About from './contents/About';
import Experience from './contents/Experience';
import Education from './contents/Education';
import Contact from './contents/Contact';
import Resume from './contents/Resume';  
import Footer from './components/Footer';
 
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      title: 'KM',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Experience', path: '/experience'},
        { title: 'Education', path: '/education'},
        { title: 'Contact', path: '/contact'},
        { title: 'Resume' , path: '/resume'}

      ],
      home: {
        title: "Hello, I'm Kiara!",
        subTitle: 'Welcome to my portfolio'
      },
      about: {
        title: 'About Me'
      },
      experience: {
        title: 'Experience'
      },
      education: {
        title: 'Education'
      },
      contact: {
        title: 'Contact'
      },
      resume: {
        title: 'Resume'
      } 
    }

  }
  render() {
    return(
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar  bg='tranparent' expand='lg' >
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'/>
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='mx-auto h4 py-4'>
                <Link className='nav-link' to='/'>Home</Link> 
                <Link className='nav-link'  to='/about'>About</Link>
                <Link className='nav-link'  to='/experience'>Experience</Link>
                <Link className='nav-link'  to='/education'>Education</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
                <Link className='nav-link' to='/resume'>Resume</Link>
              </Nav>
            </Navbar.Collapse>

          </Navbar>

         <Route path='/' exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} />} /> 
          <Route path='/about' exact render={() => <About title={this.state.about.title} />} />
          <Route path='/experience' exact render={() => <Experience title={this.state.experience.title} />} />
          <Route path='/education' exact render={() => <Education title={this.state.education.title} />} />
          <Route path='/contact' exact render={() => <Contact title={this.state.contact.title} />} />
          <Route path='/resume' exact render={() => <Resume title={this.state.resume.title}/>} />  

          <Footer /> 

        </Container>

      </Router>
    )
  }
}

export default App;
