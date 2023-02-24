import React from 'react';
import { Col, Row } from 'reactstrap';

const TrendSection = () => {
    return (
        <React.Fragment>
            <Row className="mb-3 pb-1">
                <Col xs={12}>
                    <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                        <div className="flex-grow-1">
                            <h4 className="fs-16 mb-1">Exchange Trend</h4>
                        </div>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default TrendSection;