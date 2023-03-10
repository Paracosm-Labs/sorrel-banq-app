import React, { useState } from "react";
import {
  Col,
  Row,
  Container,
  Input,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  CardHeader,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";

import CustomRows from "./CustomRows";
//SimpleBar

import rightArrow from "../../assets/images/rightArrow.svg";
const Vaults = () => {
  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };

  document.title = "Sorrel: Vaults";
  return (
    <React.Fragment>
      {/* --------------------Main Content------------------*/}
      <div className="page-content">
        <Container fluid>

          <Row>
            <Col xm={0} md={3}></Col>
            <Col xm={12} md={6}>
            <h4 className="fs-16 mb-2">Vaults</h4>
            <p className="lead">
              Crowdfund and Activate new features to enhance your Sarrel
              Experience.
            </p>
              <Nav
                tabs
                className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3 mt-5"
              >
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: customActiveTab === "1",
                    })}
                    onClick={() => {
                      toggleCustom("1");
                    }}
                  >
                    Core
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: customActiveTab === "2",
                    })}
                    onClick={() => {
                      toggleCustom("2");
                    }}
                  >
                    Community
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={customActiveTab} className="text-muted">
                <TabPane tabId="1" id="home1">
                  <div>
                    <CustomRows></CustomRows>
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <div className="d-flex">
                    <div className="flex-grow-1 ms-2 mt-5 text-center">
                      Coming Soon!
                    </div>
                  </div>
                </TabPane>
              </TabContent>
            </Col>
            <Col xm={0} md={3}></Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Vaults;
