import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { footerData } from "../store/data";
import { motion } from "framer-motion";

function Footer() {
  return (
    <Container fluid>
      <Row
        className="mt-5 g-4 text-light"
        style={{ backgroundColor: "#3AC05E" }}
      >
        {footerData.map((footDetail, index) => {
          return (
            <Col key={index} className="col-12 col-md-3">
              <h2>{footDetail.title}</h2>
              <ul className="list-unstyled">
                {footDetail.sections.map((section, index) => (
                  <li key={index}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Link
                        className="text-decoration-none text-light link-green-hover my-3"
                        to={section.link}
                      >
                        {section.text}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Footer;
