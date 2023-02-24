import React, { useState } from "react";
import { Col, Container, Row, Input } from "reactstrap";
import jumbotronSm from "../../assets/images/jumbotron-sm.svg";
import jumbotron from "../../assets/images/jumbotron.svg";
import Select from "react-select";
import { SlideOnlyExample } from "./UiCarouselCode";
import Slide from "./slide";
import SlideSm from "./slideSm";

const Home = () => {
  const [dissortBy, setdissortBy] = useState(null);
  const dissortbyname = [
    {
      options: [
        { label: "Trinidad & Tobago", value: "gTTD" },
        { label: "Bahamas", value: "gBSD" },
        { label: "Barbados", value: "gBBD" },
        { label: "Cayman Islands", value: "gKYD" },
        { label: "Cuba", value: "gCOP" },
        { label: "Eastern Caribbean", value: "gXCD" },
        { label: "Haiti", value: "gHTG" },
        { label: "Dominica", value: "gDOP" },
        { label: "Jamaica", value: "gJMD" },
      ],
    },
  ];
  document.title = "Home";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={8}>
              <div className="jumbotron">
                <h4 className="fs-16 mb-1">Getting Started</h4>
                <p className="lead">What can you do with Sorrel.</p>
                <div className="logo-sm">
                  <div id="jumbotron">
                    <div
                      style={{ height: "20rem", overflow: "hidden" }}
                      className="jumbotron-lg"
                    >
                      <div className="live-preview">
                        <Slide />
                      </div>
                      <div className="d-none code-view">
                        <pre className="language-markup">
                          <code>
                            <SlideOnlyExample />
                          </code>
                        </pre>
                      </div>
                    </div>
                    <div
                      style={{
                        height: "20rem",
                        overflow: "hidden",
                        border: "0px",
                        borderRadius: "15px",
                      }}
                      className="jumbotron-sm"
                    >
                      <div className="live-preview">
                        <SlideSm />
                      </div>
                      <div className="d-none code-view">
                        <pre className="language-markup">
                          <code>
                            <SlideOnlyExample />
                          </code>
                        </pre>
                      </div>
                    </div>
                    <div
                      style={{ height: "25rem", overflow: "hidden" }}
                      className="jumbotron-xl"
                    >
                      <div className="live-preview">
                        <Slide />
                      </div>
                      <div className="d-none code-view">
                        <pre className="language-markup">
                          <code>
                            <SlideOnlyExample />
                          </code>
                        </pre>
                      </div>
                    </div>
                    {/*<img
                      className="jumbotron-sm w-80"
                      src={jumbotronSm}
                      alt=""
                    />
                    <img
                      className="jumbotron-lg w-80"
                      src={jumbotron}
                      alt=""
  />*/}
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt-1"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Col xs={12} sm={8} md={6}>
              <h5 className="card-title text-center mt-4">
                Select Your Home Country
              </h5>
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Col xs={9} sm={7} md={5}>
              <Select
                value={dissortBy}
                onChange={(sortBy) => {
                  setdissortBy(sortBy);
                }}
                options={dissortbyname}
                className="js-example-disabled mt-2"
              />
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Col xs={8} sm={6} md={4}>
              <button
                type="button"
                className="js-programmatic-enable btn btn-secondary w-100 mt-2"
              >
                Create Account
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Home;
