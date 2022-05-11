import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import './Body.css'

function Body() {
  return (
    <div >
      <Container>
      <CardGroup >
        <Card>
          <Card.Img variant="top" src="mobile.jpg" />
        </Card>
        <Card>
          <Card.Img variant="top" src="machine.jpg" />
        </Card>
        <Card>
          <Card.Img variant="top" src="quipments.jpg" />
        </Card>
      </CardGroup>

      <CardGroup>
        <Card>
          <Card.Img variant="top" src="watch.jpg" />
        </Card>
        <Card>
          <Card.Img variant="top" src="laptop.jpg" />
        </Card>
        <Card>
          <Card.Img variant="top" src="tv.jpg" />
        </Card>
      </CardGroup>
      </Container>
    </div>
  );
}

export default Body;
