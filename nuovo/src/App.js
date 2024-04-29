
import React from 'react';
import './App.css';
import FooterComponent from './components/footer/FooterComponent';
import NavComponent from './components/navbar/NavBarComponent';
import WelcomeAlert from './components/welcome/WelcomeAlert';
import AllTheBooks from './components/allthebooks/AllTheBooks';
import { Container } from 'react-bootstrap';







function App() {
  return (
    <>
 <NavComponent/>
 <Container/>
 <WelcomeAlert/>
 <AllTheBooks/>
 <Container/>
 <FooterComponent/>
 

 </>
  );
}

export default App;
