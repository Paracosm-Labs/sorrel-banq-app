import React from "react";
import { Col, Container, Row } from "reactstrap";
import Widget from "./Widgets";
import Revenue from "./Revenue";
import Exchange from "./Exchange";
import AccountSection from "./AccountSection";
import TrendSection from "./TrendSection";

const Accounts = () => {
  document.title = "Sorrel: Accounts";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col>
              <div className="h-100">
                <AccountSection />
                <Row>
                  <Widget />
                </Row>
                <TrendSection />
                <Row>
                  <Col xl={8}>
                    <Revenue />
                  </Col>
                  <Exchange />
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Accounts;
