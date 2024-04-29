import React from "react";
import { useState } from 'react';
import { Alert,Button } from "react-bootstrap";




export default function WelcomeAlert() {
    const [show, setShow] = useState(true);
    return (
        <>
        <Alert show={show} variant="success">
          <Alert.Heading>Welcome To EpiBook</Alert.Heading>
          <p>
         Benvenuto su EpiBook il miglior sito di libri al mondo,
          dove puoi trovare tutto quello che cerchi.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me
            </Button>
          </div>
        </Alert>
  
        
      </>
    );
  }
  
