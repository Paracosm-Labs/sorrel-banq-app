import React from 'react';
import { Col, Row } from 'reactstrap';

const TrendSection = () => {
    return (
        <React.Fragment>
            <Row className="mt-4 mb-3 pb-1">
                <Col xs={12}>
                    <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                        <div className="flex-grow-1">
                            <h4 className="fs-16 mb-1">Latest Transactions</h4>
                        </div>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default TrendSection;