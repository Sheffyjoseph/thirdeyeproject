import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import './Footer.css'

function Footer() {
  return (
    <div>
      <Container className="main">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="first.png" />
          </Card>
          <Card>
            <Card.Img variant="top" src="2.png" />
          </Card>
          <Card>
            <Card.Img variant="top" src="3.png" />
          </Card>
          <Card>
            <Card.Img variant="top" src="4.png" />
          </Card>
          <Card>
            <Card.Img variant="top" src="5.png" />
          </Card>
          <Card>
            <Card.Img variant="top" src="6.png" />
          </Card>
          <Card>
            <Card.Img variant="top" src="7.png" />
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}

export default Footer;
