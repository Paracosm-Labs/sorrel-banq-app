import React, { useState } from "react";
import {
  Col,
  Row,
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";

import classnames from "classnames";

import { addOnsTableData } from "../../common/data";
import CustomRows from "./CustomRows";

const Addon = () => {
  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };

  document.title = "Sorrel: Addons";
  return (
    <React.Fragment>
      {/* --------------------Main Content------------------*/}
      <div className="page-content">
        <Container fluid>

          <Row>
            <Col xm={0} md={3}></Col>
            <Col xm={12} md={6}>

              <h4 className="fs-16 mb-2">Addons</h4>
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
                    {addOnsTableData.map((item, key) => (
                      <CustomRows key={key} item={item} />
                    ))}
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <div className="d-flex">
                    <div className="flex-grow-1 ms-2 text-center mt-5">
                      Have an idea for an addon?<br/>Submit your proposal to expand Sorrel banq to be crowdfunded<br/><br/>
                      <button
                        type="button"
                        className="btn btn-secondary"
                      >
                        Get Started
                      </button>
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

export default Addon;
