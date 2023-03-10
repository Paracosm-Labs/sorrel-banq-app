import React from "react";
import { Row, Col } from "reactstrap";

import { AccountsTableData } from "../../common/data";

const CustomRows = () => {
  return (
    <React.Fragment>
      <Row className="align-middle text-left mb-4" style={{ textAlign: "left" }}>
        <Col xs={12} md={6}>
          <Row>
            <Col xs={4}>Currency</Col>
            <Col xs={4}>APR</Col>

          </Row>
        </Col>
        <Col xs={12} md={6}>
          <Row>
            <Col xs={6} className="overflow-auto">
              Balance
            </Col>
            <Col xs={6} className="overflow-auto">
              Wallet Balance
            </Col>
          </Row>
        </Col>
      </Row>
      {AccountsTableData.map((item, key) => (
        <Row
          className="rowCard align-middle text-left mb-2 "
          key={key}
          style={{ lineHeight: "3.5" }}
        >
          <Col xs={12} md={6}>
            <Row>
              <Col xs={4}>{item.label}</Col>
              <Col xs={4}><span className="text-success">{item.apr}</span></Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <Row>
              <Col xs={6} className="overflow-auto">
                <div className="d-flex gap-2 align-items-center">
                  <div className="flex-grow-1">{item.savingBalance}</div>
                </div>
              </Col>
              <Col xs={6} className="overflow-auto">
                {item.walletBalance}
              </Col>
            </Row>
          </Col>
        </Row>
      ))}
    </React.Fragment>
  );
};

export default CustomRows;
