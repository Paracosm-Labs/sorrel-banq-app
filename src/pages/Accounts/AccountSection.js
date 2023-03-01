import React, { useState } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import { Col, Row, Card, CardBody, CardHeader, Label, Input } from "reactstrap";
import Select from "react-select";

import CustomRows from "./CustomRows";

//SimpleBar
import SimpleBar from "simplebar-react";

const AccountSection = () => {
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
  const [addAccountCanvas, setAddAccountCanvas] = useState(false);
  const toggleAddAccountCanvas = () => {
    setAddAccountCanvas(!addAccountCanvas);
  };
  const [depositCanvas, setDepositCanvas] = useState(false);
  const toggleDepositCanvas = () => {
    setDepositCanvas(!depositCanvas);
  };
  const [transferCanvas, setTransferCanvas] = useState(false);
  const toggleTransferCanvas = () => {
    setTransferCanvas(!transferCanvas);
  };
  return (
    <React.Fragment>
      <div>
        <Offcanvas
          isOpen={addAccountCanvas}
          toggle={toggleAddAccountCanvas}
          direction="end"
          className="offcanvas-end border-0"
        >
          <OffcanvasHeader
            className="d-flex align-items-center bg-gradient p-3 offcanvas-header-dark"
            toggle={toggleAddAccountCanvas}
          >
            <span className="m-0 me-2 text-white">New Savings Account</span>
          </OffcanvasHeader>
          <OffcanvasBody className="p-4">
            <SimpleBar className="h-100">
              <h5 className="card-title ">Enter Account Name</h5>
              <div>
                <Input
                  type="text"
                  className="form-control mt-2 mb-4"
                  id="placeholderInput "
                  placeholder="eg. Travel Fund"
                />
              </div>
              <h5 className="card-title mt-4">Currency</h5>
              <div className="vstack gap-3 mt-2">
                <Select
                  value={dissortBy}
                  onChange={(sortBy) => {
                    setdissortBy(sortBy);
                  }}
                  options={dissortbyname}
                  className="js-example-disabled"
                />
              </div>
              <div className="hstack gap-2 mt-3 text-center">
                <button
                  type="button"
                  className="js-programmatic-enable btn btn-secondary"
                >
                  Add
                </button>
                <button
                  type="button"
                  className="js-programmatic-disable btn btn-primary"
                  onClick={toggleAddAccountCanvas}
                >
                  Cancel
                </button>
              </div>
            </SimpleBar>
          </OffcanvasBody>
        </Offcanvas>
      </div>
      <div>
        <Offcanvas
          isOpen={depositCanvas}
          toggle={toggleDepositCanvas}
          direction="end"
          className="offcanvas-end border-0"
        >
          <OffcanvasHeader
            className="d-flex align-items-center bg-gradient p-3 offcanvas-header-dark"
            toggle={toggleDepositCanvas}
          >
            <span className="m-0 me-2 text-white">Deposit</span>
          </OffcanvasHeader>
          <OffcanvasBody className="p-4">
            <SimpleBar className="h-100">
              <h5 className="card-title ">Account</h5>
              <div className="vstack gap-3 mt-2 mb-4">
                <Select
                  value={dissortBy}
                  onChange={(sortBy) => {
                    setdissortBy(sortBy);
                  }}
                  options={dissortbyname}
                  className="js-example-disabled mb-0"
                  placeholder="Wallet Balance - gTTD $44000.88"
                />
              </div>
              <h5 className="card-title mt-4">Enter Ammount</h5>
              <div>
                <Input
                  type="text"
                  className="form-control mt-2"
                  id="placeholderInput"
                  placeholder="$"
                />
              </div>
              <p>Balance: 3,000,000,89</p>
              <div className="hstack gap-2 mt-3 text-center">
                <button
                  type="button"
                  className="js-programmatic-enable btn btn-secondary"
                >
                  Deposit
                </button>
                <button
                  type="button"
                  className="js-programmatic-disable btn btn-primary"
                  onClick={toggleDepositCanvas}
                >
                  Cancle
                </button>
              </div>
            </SimpleBar>
          </OffcanvasBody>
        </Offcanvas>
      </div>
      <div>
        <Offcanvas
          isOpen={transferCanvas}
          toggle={toggleTransferCanvas}
          direction="end"
          className="offcanvas-end border-0"
        >
          <OffcanvasHeader
            className="d-flex align-items-center bg-gradient p-3 offcanvas-header-dark"
            toggle={toggleTransferCanvas}
          >
            <span className="m-0 me-2 text-white">Transfer</span>
          </OffcanvasHeader>
          <OffcanvasBody className="p-4">
            <SimpleBar className="h-100">
              <h5 className="card-title ">Account</h5>
              <div className="vstack gap-3 mt-2">
                <Select
                  value={dissortBy}
                  onChange={(sortBy) => {
                    setdissortBy(sortBy);
                  }}
                  options={dissortbyname}
                  className="js-example-disabled mb-0"
                  placeholder="Wallet Balance - gTTD $44000.88"
                />
              </div>
              <div className="vstack gap-3 mt-2 mb-4">
                <Select
                  value={dissortBy}
                  onChange={(sortBy) => {
                    setdissortBy(sortBy);
                  }}
                  options={dissortbyname}
                  className="js-example-disabled mb-0"
                  placeholder="Wallet Balance - gTTD $44000.88"
                />
              </div>
              <h5 className="card-title mt-4">Enter Ammount</h5>
              <div>
                <Input
                  type="text"
                  className="form-control mt-2 mb-4"
                  id="placeholderInput"
                  placeholder="$"
                />
              </div>
              <h5 className="card-title mt-4">EnterDestination</h5>
              <div className="vstack gap-3 mt-2">
                <Select
                  value={dissortBy}
                  onChange={(sortBy) => {
                    setdissortBy(sortBy);
                  }}
                  options={dissortbyname}
                  className="js-example-disabled mb-0"
                  placeholder="Wallet Balance - gTTD $44000.88"
                />
              </div>
              <div>
                <Input
                  type="text"
                  className="form-control mt-2"
                  id="placeholderInput"
                  placeholder="$"
                />
              </div>
              <div className="hstack gap-2 mt-3 text-center">
                <button
                  type="button"
                  className="js-programmatic-enable btn btn-secondary"
                >
                  Send
                </button>
                <button
                  type="button"
                  className="js-programmatic-disable btn btn-primary"
                  onClick={toggleTransferCanvas}
                >
                  Cancle
                </button>
              </div>
            </SimpleBar>
          </OffcanvasBody>
        </Offcanvas>
      </div>
      <Row className="mb-4 pb-1">
        <Col md={12} lg={9}>
          <div className="d-flex align-items-center flex-row mb-2">
            <div className="flex-grow-1">
              <h4 className="fs-16 mb-1">Accounts</h4>
            </div>
            <div className="mt-3 mt-lg-0">
              <form action="#">
                <Row className="g-3 mb-0 align-items-center">
                  <div className="col-auto">
                    <button
                      type="button"
                      className="btn btn-soft-success"
                      onClick={toggleAddAccountCanvas}
                    >
                      <i className="ri-add-circle-line align-middle me-1"></i>{" "}
                      Add Account
                    </button>
                  </div>
                </Row>
              </form>
            </div>
          </div>
          <div className="mt-4">
            <CustomRows />
          </div>
        </Col>
        <Col md={12} lg={3}>
          <Card className="card-height-100 px-3" style={{ marginTop: "0rem" }}>
            <CardHeader className="align-items-center d-flex">
              <h2 className="card-title mb-0 flex-grow-1 text-center">
                Current Balance
              </h2>
            </CardHeader>

            <CardBody>
              <Row className="align-items-end g-0 margin1rem">
                <Col xs={12}>
                  <h2 className="mb-2 text-center border rounded-circle border-success border-4 p-5">$25,845</h2>
                </Col>
              </Row>
              <Row className="align-items-end g-0 mt-5 pb-2">
                <Col xs={6} style={{ paddingRight: "2px" }}>
                  <button
                    type="button"
                    onClick={toggleDepositCanvas}
                    className="btn btn-secondary w-100"
                  >
                    Deposit
                  </button>
                </Col>
                <Col xs={6} style={{ paddingLeft: "2px" }}>
                  <button
                    type="button"
                    onClick={toggleTransferCanvas}
                    className="btn btn-primary w-100"
                  >
                    Transfer
                  </button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AccountSection;
