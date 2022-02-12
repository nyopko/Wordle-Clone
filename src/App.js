import './App.css';
import { Container, Row, Col } from 'react-grid';

import Title from "./Components/Title/index.js"

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md><Title /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
