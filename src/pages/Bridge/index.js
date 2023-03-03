import React, { useState } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import { Col, Row, Container, Input } from "reactstrap";
import Select from "react-select";

//SimpleBar
import SimpleBar from "simplebar-react";

import reloadimg from "../../assets/images/reload.svg";

const Bridge = () => {
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
  const [dissortrampBy, setdissortrampBy] = useState(null);
  const dissortrampbyname = [
    {
      options: [
        { label: "Sorrel P2P - Coming Soon", value: "1" },
        { label: "Western Union", value: "2" },
        { label: "Moneygram", value: "3" },
        { label: "RIA", value: "4" },
        { label: "Local Bank Transfer", value: "5" },
        { label: "Mastercard", value: "6" },
        { label: "Visa", value: "7" },
      ],
    },
  ];
  const [exchangeLoadingCanvas, setExchangeLoadingCanvas] = useState(false);
  const toggleExchangeLoadingCanvas = () => {
    setExchangeLoadingCanvas(!exchangeLoadingCanvas);
  };
  document.title = "Sorrel: Bridge";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div>
            <Offcanvas
              isOpen={exchangeLoadingCanvas}
              toggle={toggleExchangeLoadingCanvas}
              direction="end"
              className="offcanvas-end border-0"
            >
              <OffcanvasHeader
                className="d-flex align-items-center bg-gradient p-3 offcanvas-header-dark"
                toggle={toggleExchangeLoadingCanvas}
              >
                <span className="m-0 me-2 text-white">P2P Sources</span>
              </OffcanvasHeader>
              <OffcanvasBody className="p-4">
                <SimpleBar className="h-100">
                  <div>
                    <h5 className="card-title ">Loading...</h5>
                  </div>
                </SimpleBar>
              </OffcanvasBody>
            </Offcanvas>
          </div>
          {/* --------------------Main Content------------------*/}
          <Row>

            <Col xm={0} md={3}></Col>
            <Col xm={12} md={6}>
            <h4 className="fs-16 mb-2">Bridge</h4>
            <p className="lead">Convert your stablecoins into real world.</p>
              <Row className="align-items-end g-0  mt-5 mb-3">
                <Col xs={6}>
                  <h5 className="card-title ">Source</h5>
                  <Select
                    value={dissortBy}
                    onChange={(sortBy) => {
                      setdissortBy(sortBy);
                    }}
                    options={dissortbyname}
                    className="js-example-disabled"
                  />
                </Col>
                <Col xs={6}>
                  <h5 className="card-title ">Currency</h5>
                  <Select
                    value={dissortBy}
                    onChange={(sortBy) => {
                      setdissortBy(sortBy);
                    }}
                    options={dissortbyname}
                    className="js-example-disabled"
                  />
                </Col>
              </Row>
              <div>
                <Input
                  type="text"
                  className="form-control mt-2 mb-4"
                  id="placeholderInput"
                  placeholder="Enter Amount"
                />
              </div>

              <Row className="margin1rem mt-4 mb-4">
                <img src={reloadimg} alt="" height="30" />
              </Row>

              <h5 className="card-title">Destination</h5>
              <div className="vstack gap-3 mt-2 mb-2">
                <Select
                  value={dissortrampBy}
                  onChange={(sortBy) => {
                    setdissortrampBy(sortBy);
                  }}
                  options={dissortrampbyname}
                  className="js-example-disabled"
                />
              </div>
              <p className="text-center">
                Rate: 1 USDD ≈ 6.7598 gTTD Fee 0.4%: ≈ 0.80
              </p>
              <Row>
                <Col xs={4} sm={3}>
                  <button
                    type="button"
                    className="js-programmatic-enable btn btn-primary w-100"
                  >
                    <i className="fa-light fa-arrow-left fs-12"></i>
                    Previous
                  </button>
                </Col>
                <Col xs={4} sm={6}></Col>
                <Col xs={4} sm={3}>
                  <button
                    type="button"
                    className="js-programmatic-disable btn btn-secondary w-100"
                    onClick={toggleExchangeLoadingCanvas}
                  >
                    Next
                    <i className="fa-light fa-arrow-right fs-12"></i>
                  </button>
                </Col>
              </Row>
            </Col>
            <Col xm={0} md={3}></Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Bridge;
