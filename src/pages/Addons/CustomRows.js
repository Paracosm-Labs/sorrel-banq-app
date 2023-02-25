import React, { useState } from "react";
import { Row, Col, Input } from "reactstrap";

import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import { addOnsTableData } from "../../common/data";
import SimpleBar from "simplebar-react";

const CustomRows = ({ key, item }) => {
  const [addVaultCanvas, setVaultCanvas] = useState(false);
  const toggleVaultCanvas = () => {
    setVaultCanvas(!addVaultCanvas);
  };
  const [active, setActive] = useState(false);
  const [buttonText, setButtonText] = useState("Crowdfund this");
  function handleClick() {
    console.log("button clicked");
    if (buttonText === "Under Construction") {
      setButtonText("Activated");
      setActive(!active);
    } else if (buttonText === "Crowdfund this") {
      setButtonText("Under Construction");
    } else {
      setButtonText("Crowdfund this");
      setActive(!active);
    }
  }
  return (
    <React.Fragment>
      <div>
        <Offcanvas
          isOpen={addVaultCanvas}
          toggle={toggleVaultCanvas}
          direction="end"
          className="offcanvas-end border-0"
        >
          <OffcanvasHeader
            className="d-flex align-items-center bg-gradient p-3 offcanvas-header-dark"
            toggle={toggleVaultCanvas}
          ></OffcanvasHeader>
          <OffcanvasBody className="p-4">
            <SimpleBar className="h-100">
              <Row className="align-items-end g-0 margin1rem">
                <Col xs={12}>
                  <h5 className="mb-3 mt-3 text-center">
                    Vaults harvests yields from the goStables protocol and
                    automatically deposits it to your chosen account on the 1st
                    of every month. Deposits are locked for a minimum of 3
                    months
                  </h5>
                </Col>
              </Row>
              <Row className="align-items-end g-0 margin1rem">
                <Col xs={12}>
                  <Input
                    type="text"
                    className="form-control"
                    id="placeholderInput "
                    placeholder="$100"
                  />
                </Col>
              </Row>
              <Row className="align-items-end g-0 margin1rem">
                <Col xs={12}>
                  <p>Deposit Locked till XXXXXX</p>
                </Col>
              </Row>

              <Row className="m-2">
                <Col xs={5}>
                  <button
                    type="button"
                    className="js-programmatic-enable btn btn-secondary w-100"
                  >
                    Stake
                  </button>
                </Col>
                <Col xs={2}></Col>
                <Col xs={5}>
                  <button
                    type="button"
                    className="js-programmatic-disable btn btn-primary w-100"
                  >
                    Cancel
                  </button>
                </Col>
              </Row>
            </SimpleBar>
          </OffcanvasBody>
        </Offcanvas>
      </div>

      {/* ---------------Main Content------------ */}

      <Row
        className="rowCard text-left mb-2 mt-4"
        style={{ lineHeight: "5" }}
        onClick={toggleVaultCanvas}
      >
        <Col xs={6}>
          <Row>
            <Col xs={3} className="overflow-auto">
              <div className="d-flex gap-2 align-items-center">
                <div className="flex-shrink-0">
                  <img
                    src={item.imgPath}
                    alt=""
                    className=" rounded-circle"
                    height="50"
                  />
                </div>
              </div>
            </Col>
            <Col xs={9}>{item.label}</Col>
          </Row>
        </Col>
        <Col xs={6}>
          <Row>
            <Col xs={12} className="overflow-auto text-center">
              <button
                className="btn btn-link text-decoration-none"
                onClick={handleClick}
                style={{ color: active ? "#13c56b" : "#c5c5c5" }}
              >
                {buttonText}
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CustomRows;
