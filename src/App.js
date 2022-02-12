import './App.css';
import { Container, Row, Col } from 'react-grid';

import Title from "./Components/Title/index.js"
import PlayArea from "./Components/PlayArea/index.js"
import React from 'react';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md><Title /></Col>
        </Row>
        <Row>
          <Col md><PlayArea /></Col>
        </Row>
      </Container>
    </div>
  );
}
}

export default App;
