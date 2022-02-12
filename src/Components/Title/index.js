import React from 'react';
import { Container, Row, Col } from 'react-grid';
import './style.css';

function Header() {
    return (
        <div id="headerText">
            <Container>
                <Row>
                    <Col sm><h1 className="header">Yopkodle</h1></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;