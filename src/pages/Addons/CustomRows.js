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
  const [buttonText, setButtonText] = useState("Crowdfund This");
  function handleClick() {
    console.log("button clicked");
    if (buttonText === "Under Construction") {
      setButtonText("Activated");
      setActive(!active);
    } else if (buttonText === "Crowdfund This") {
      setButtonText("Under Construction");
    } else {
      setButtonText("Crowdfund This");
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
        className="rowCard text-left mb-2 mt-4 pb-4"

        onClick={toggleVaultCanvas}
      >
        <Col xs={12} md={7} className="mt-4">
          <Row>
            <Col xs={2} className="overflow-auto">
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
            <Col xs={10}><span className="text-justify"><h4>{item.label}</h4>{item.details}</span></Col>
          </Row>
        </Col>
        <Col xs={12} md={5}>
          <Row>
            <Col xs={12} className="overflow-auto text-center">

                <Row>

                  <Col xs={12}>
                    <span className="progress mt-4 border border-success">
                      <span className="progress-bar bg-success" role="progressbar" aria-valuenow={3} aria-valuemin={0} aria-valuemax={100} style={{width:"3%"}}>
                      </span>
                    </span>
                  </Col>
                  <Col xs={12}>
                    <h5 className="mt-2">$9 of {item.fundGoal}</h5>
                  </Col>
                </Row>

                <Row>

                  <Col xs={12}>
                    <button 
                        className="btn btn-secondary mt-2"
                      >{buttonText}</button>
                  </Col>
                  <Col xs={12}>            
                      <a href={item.link}>
                      <button 
                        className="btn btn-sm btn-outline-primary mt-4"
                      >Read More...</button>
                      </a>
                  </Col>
                </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CustomRows;
