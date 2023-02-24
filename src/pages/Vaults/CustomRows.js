import React, { useState } from "react";
import { Row, Col, Input } from "reactstrap";

import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import { VaultsTableData } from "../../common/data";
import SimpleBar from "simplebar-react";

const CustomRows = () => {
  const [addVaultCanvas, setVaultCanvas] = useState(false);
  const toggleVaultCanvas = () => {
    setVaultCanvas(!addVaultCanvas);
  };
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
                    Deposit
                  </button>
                </Col>
                <Col xs={2}></Col>
                <Col xs={5}>
                  <button
                    type="button"
                    className="js-programmatic-disable btn btn-primary w-100"
                  >
                    Withdraw
                  </button>
                </Col>
              </Row>
            </SimpleBar>
          </OffcanvasBody>
        </Offcanvas>
      </div>

      {/* ---------------Main Content------------ */}
      <Row
        className="align-middle text-left"
        style={{ textAlign: "left" }}
        role="button"
      >
        <Col xs={7}>
          <Row>
            <Col xs={8} className="overflow-auto">
              Assests
            </Col>
            <Col xs={4}>APR</Col>
          </Row>
        </Col>
        <Col xs={5}>
          <Col xs={12} className="overflow-auto">
            My Deposit
          </Col>
        </Col>
      </Row>
      {VaultsTableData.map((item, key) => (
        <Row
          className="rowCard align-middle text-left mb-2 mt-4"
          key={key}
          style={{ lineHeight: "5" }}
          onClick={toggleVaultCanvas}
          role="button"
        >
          <Col xs={7}>
            <Row>
              <Col xs={8} className="overflow-auto">
                <div className="d-flex gap-2 align-items-center">
                  <div className="flex-shrink-0">
                    <img
                      src={item.imgPath}
                      alt=""
                      className="avatar-xs rounded-circle"
                    />
                  </div>
                  <div className="flex-grow-1">{item.label}</div>
                </div>
              </Col>
              <Col xs={4}>{item.apr}</Col>
            </Row>
          </Col>
          <Col xs={5}>
            <Row>
              <Col xs={12} className="overflow-auto">
                {item.myDeposit}
              </Col>
            </Row>
          </Col>
        </Row>
      ))}
    </React.Fragment>
  );
};

export default CustomRows;
