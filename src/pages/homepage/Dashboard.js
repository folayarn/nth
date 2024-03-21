import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Slide from "./Slide";
import { toolsData, newsData } from "../../store/data";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";

function Dashboard() {
  //function to handle shortening of text to display
  const shortenText = (str, maxLen, separator = " ") => {
    if (str.length <= maxLen) return str;
    return str.substr(0, str.lastIndexOf(separator, maxLen)) + " ...";
  };

  const boxVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.07,
      transition: {
        duration: 15,
        type: "spring",
        bounce: 2,
      },
    },
  };

  return (
    <Container fluid>
      <Row>
        <Col className="p-0 ">
          <Slide />
        </Col>
      </Row>

      <Row className="mt-5 g-4">
        <h2 className="fw-bold d-flex justify-content-center align-items-center">
          <div className="triangle-left"></div>Latest News
          <div className="triangle-right"></div>
        </h2>
        {newsData.map((news) => {
          return (
            <Col>
              <motion.div
                variants={boxVariants}
                initial="initial"
                whileHover="hover"
              >
                <Card
                  style={{
                    width: "18rem",
                    padding: 0,
                    border: "1px solid #3AC05E",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={news.newsImg}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">{news.title}</Card.Title>
                    <Card.Text>{shortenText(news.text, 40)}</Card.Text>
                    <Button className="button-color">Read More</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          );
        })}
        <div className="d-flex justify-content-center">
          <Button variant="outline" className="button-color-more" size="lg">
            More
          </Button>
        </div>
      </Row>

      <Row
        className="mt-5 g-4"
        style={{ backgroundColor: "rgba(58, 192, 94, 0.1)" }}
      >
        <h2 className="d-flex justify-content-center align-items-center fw-bold">
          <div className="triangle-left"></div>Useful Tool
          <div className="triangle-right"></div>
        </h2>

        {toolsData.map((tool, index) => (
          <Col key={index}>
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.7 }}
              transition={{
                duration: 0.5,
              }}
            >
              <Card
                className="shadow rounded"
                style={{ border: "1px solid #3AC05E", height: "100%" }}
              >
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center mb-5">
                    {tool.icon}
                  </div>
                  <Card.Title className="fw-bold">{tool.title}</Card.Title>
                  <Card.Text>{tool.text}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Dashboard;
