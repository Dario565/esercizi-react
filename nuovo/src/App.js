
import React from 'react';
import './App.css';
import FooterComponent from './components/footer/FooterComponent';
import NavComponent from './components/navbar/NavBarComponent';
import WelcomeAlert from './components/welcome/WelcomeAlert';
import AllTheBooks from './components/allthebooks/AllTheBooks';







function App() {
  return (
    <>
 <NavComponent/>
 <WelcomeAlert/>
 <AllTheBooks/>
 <FooterComponent/>
 </>
  );
}

export default App;
