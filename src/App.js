import React, { useState } from 'react';
// Bootstrap Imports Below
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

import './App.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">Notification</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

const App = () => (
  <Container fluid className="p-3">
    <Jumbotron>
      <h1 className="header">Chris Rutledge</h1>
      <ExampleToast className="toast">
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
      <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
    </Jumbotron>
  </Container>
);

export default App;
