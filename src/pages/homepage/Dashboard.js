import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { BsArrowDownSquareFill, BsCalculatorFill } from "react-icons/bs";
import { GrCurrency } from "react-icons/gr";
import { FaTools } from "react-icons/fa";
import Slide from "./Slide";

function Dashboard() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Slide />
        </Col>
      </Row>

      <Row className="mt-5 g-4">
        <h2 className="text-center fw-bold">Useful Tool</h2>
        <Col>
          <Card style={{border: "none"}}>
            <Card.Body className="text-center">
              <div className="d-flex justify-content-center mb-5">
                <BsArrowDownSquareFill color="#3AC05E" size={50} />
              </div>
              <Card.Title className="fw-bold">Import Classification Tool</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{border: "none"}}>
            <Card.Body className="text-center">
              <div className="d-flex justify-content-center mb-5">
                <BsCalculatorFill color="#3AC05E" size={50} />
              </div>
              <Card.Title className="fw-bold">Duty Calculator</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{border: "none"}}>
            <Card.Body className="text-center">
              <div className="d-flex justify-content-center mb-5">
                <GrCurrency color="#3AC05E" size={50} />
              </div>
              <Card.Title className="fw-bold">Currency converter</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{border: "none"}}>
            <Card.Body className="text-center">
              <div className="d-flex justify-content-center mb-5">
                <FaTools color="#3AC05E" size={50} />
              </div>
              <Card.Title className="fw-bold">Customs Procedure Codes</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <h2 className="text-center fw-bold">Organizations</h2>
      </Row>
    </Container>
  );
}

export default Dashboard;
