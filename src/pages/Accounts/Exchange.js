import React, { useState } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import { Col, Row, Card, CardBody, CardHeader, Label, Input } from "reactstrap";
import Select from "react-select";
import { components } from "react-select";

//SimpleBar
import SimpleBar from "simplebar-react";

import dollar from "../../assets/images/svg/usdd.svg";
import europeanUnion from "../../assets/images/european-union.svg";
import Trinidad from "../../assets/images/trinidad-and-tobago.svg";

import reloadimg from "../../assets/images/reload.svg";
import UnitedKingdom from "../../assets/images/united-kingdom.svg";

const Exchange = () => {
  const [dissortBy, setdissortBy] = useState(null);
  const dissortbyname = [
    {
      options: [
        { label: "Trinidad & Tobago Dollar", value: "gTTD" },
        { label: "Bahamas Dollar", value: "gBSD" },
        { label: "Barbados Dollar", value: "gBBD" },
        { label: "Cayman Islands Dollar", value: "gKYD" },
        { label: "Cuban Peso", value: "gCOP" },
        { label: "Eastern Caribbean Dollar", value: "gXCD" },
        { label: "Haitian Gourde", value: "gHTG" },
        { label: "Dominican Peso", value: "gDOP" },
        { label: "Jamaican Dollar", value: "gJMD" },
      ],
    },
  ];
  const [exchangeCanvas, setexchangeCanvas] = useState(false);
  const toggleexchangeCanvas = () => {
    setexchangeCanvas(!exchangeCanvas);
  };
  const options = [
    {
      label: "",
      value: 0,
      image: europeanUnion,
    },
    {
      label: "",
      value: 1,
      image: Trinidad,
    },
    {
      label: "",
      value: 2,
      image: UnitedKingdom,
    },
    {
      label: "",
      value: 3,
      image: dollar,
    },
  ];
  const { SingleValue, Option } = components;
  const IconSingleValue = (props) => (
    <SingleValue {...props}>
      <img
        src={props.data.image}
        style={{
          height: "30px",
          width: "30px",
          borderRadius: "50%",
          marginRight: "10px",
        }}
        alt=""
      />
      {props.data.label}
    </SingleValue>
  );

  const IconOption = (props) => (
    <Option {...props}>
      <img
        src={props.data.image}
        style={{
          height: "30px",
          width: "30px",
          borderRadius: "50%",
          marginRight: "10px",
        }}
        alt=""
      />
      {props.data.label}
    </Option>
  );

  return (
    <React.Fragment>
      <Col xl={4}>
        <div>
          <Offcanvas
            isOpen={exchangeCanvas}
            toggle={toggleexchangeCanvas}
            direction="end"
            className="offcanvas-end border-0"
          >
            <OffcanvasHeader
              className="d-flex align-items-center bg-gradient p-3 offcanvas-header-dark"
              toggle={toggleexchangeCanvas}
            >
              <span className="m-0 me-2 text-white">Exchange</span>
            </OffcanvasHeader>
            <OffcanvasBody className="p-4">
              <SimpleBar className="h-100">
                <h5 className="card-title ">Currency</h5>
                <div className="vstack gap-3 mt-2 mb-2">
                  <Select
                    value={dissortBy}
                    onChange={(sortBy) => {
                      setdissortBy(sortBy);
                    }}
                    options={dissortbyname}
                    className="js-example-disabled"
                  />
                </div>

                <h5 className="card-title">Enter Amount</h5>
                <Row className="align-items-end g-0  mt-2 mb-4">
                  <Col xs={8}>
                    <Input
                      type="text"
                      className="form-control "
                      id="placeholderInput "
                      placeholder="400"
                    />
                  </Col>
                  <Col xs={4}>
                    <Select
                      components={{
                        SingleValue: IconSingleValue,
                        Option: IconOption,
                      }}
                      options={options}
                    />
                  </Col>
                </Row>
                <Row className="margin1rem mt-4 mb-4">
                  <img src={reloadimg} alt="" height="30" />
                </Row>
                <h5 className="card-title mt-4">Currency</h5>
                <div className="vstack gap-3 mt-2 mb-2">
                  <Select
                    value={dissortBy}
                    onChange={(sortBy) => {
                      setdissortBy(sortBy);
                    }}
                    options={dissortbyname}
                    className="js-example-disabled"
                  />
                </div>

                <h5 className="card-title">Enter Amount</h5>
                <Row className="align-items-end g-0  mt-2">
                  <Col xs={8}>
                    <Input
                      type="text"
                      className="form-control"
                      id="placeholderInput "
                      placeholder="400"
                    />
                  </Col>
                  <Col xs={4}>
                    <Select
                      components={{
                        SingleValue: IconSingleValue,
                        Option: IconOption,
                      }}
                      options={options}
                    />
                  </Col>
                </Row>
                <p className="text-center">
                  Rate: 1 USDD ≈ 6.7598 gTTD Fee 0.4%: ≈ 0.80
                </p>
                <Row>
                  <Col xs={5}>
                    <button
                      type="button"
                      className="js-programmatic-enable btn btn-secondary w-100"
                    >
                      Exchange
                    </button>
                  </Col>
                  <Col xs={2}></Col>
                  <Col xs={5}>
                    <button
                      type="button"
                      className="js-programmatic-disable btn btn-primary w-100"
                      onClick={toggleexchangeCanvas}
                    >
                      Cancle
                    </button>
                  </Col>
                </Row>
              </SimpleBar>
            </OffcanvasBody>
          </Offcanvas>
        </div>
        {/* ------------- Main Body ------------ */}
        <Card className="card-height-100">
          <CardHeader className="align-items-center d-flex">
            <h4 className="card-title mb-0 flex-grow-1">Exchange</h4>
            <div className="flex-shrink-0">
              <i className="fa-thin fa-arrows-rotate fs-20"></i>
            </div>
          </CardHeader>

          <CardBody>
            <Row className="align-items-end g-0 margin1rem">
              <Col xs={4}>
                <p className="mb-1 mt-3 sizemd">1 gGBP</p>
              </Col>
              <Col xs={4}>
                <i className="fa-light fa-arrow-right fs-20"></i>
              </Col>
              <Col xs={4}>
                <p className="mb-1 mt-3 sizemd">52,415 gTTD</p>
              </Col>
            </Row>
            <Row className="align-items-end g-0 margin1rem">
              <Col xs={12}>
                <h5 className="mb-3 mt-4">You Swap</h5>
              </Col>
            </Row>
            <Row className="align-items-end g-0 margin1rem">
              <Col xs={8}>
                <Input
                  type="text"
                  className="form-control"
                  id="placeholderInput "
                  placeholder="600"
                />
              </Col>
              <Col xs={4}>
                <Select
                  components={{
                    SingleValue: IconSingleValue,
                    Option: IconOption,
                  }}
                  options={options}
                />
              </Col>
            </Row>
            <Row className="align-items-end g-0 margin1rem">
              <Col xs={12}>
                <h5 className="mb-3 mt-4">For</h5>
              </Col>
            </Row>
            <Row className="align-items-end g-0 margin1rem">
              <Col xs={8}>
                <Input
                  type="text"
                  className="form-control"
                  id="placeholderInput "
                  placeholder="400"
                />
              </Col>
              <Col xs={4}>
                <Select
                  components={{
                    SingleValue: IconSingleValue,
                    Option: IconOption,
                  }}
                  options={options}
                />
              </Col>
            </Row>
            <Row className="align-items-end g-0 margin1rem">
              <Col xs={12}>
                <button
                  type="button"
                  onClick={toggleexchangeCanvas}
                  className="btn btn-secondary mb-2 mt-2 w-100"
                >
                  Exchange
                </button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Exchange;
