import React from 'react';
import CountUp from "react-countup";
import { Link } from 'react-router-dom';
import { Card, CardBody, Col } from 'reactstrap';
import { ecomWidgets } from "../../common/data";
import WatchListChart from './watchListChart';
const Widgets = () => {
    return (
        <React.Fragment>
            {ecomWidgets.map((item, key) => (
                <Col xl={3} md={6} key={key} style={{padding: "0 2% 0 1.5%" }}>
                    <Card className="card-animate">
                        <CardBody>
                            <div className="d-flex " style={{margin: "5% 10%",color: "#ffffff"}}>
                                
                                <img className="rounded-circle" src={item.imgPath} alt=""  style={{verticalAlign: "left", marginRight: "8px", height: "28px", width: "28px"}}/>
                                <div className="flex-grow-1 overflow-hidden">
                                    <h5 style={{color: "#ffffff"}} className="text-uppercase fw-medium text-truncate mb-0">{item.label}</h5>
                                </div>
                                
                            </div>
                            <div className="d-flex align-items-end currency-card">
                                <div className='currency-value'>
                                    <h4 className="fs-22 fw-semibold ff-secondary mb-4" style={{color: "#ffffff"}}><span className="counter-value" data-target="559.25">
                                        <CountUp
                                            start={0}
                                            prefix={item.prefix}
                                            suffix={item.suffix}
                                            separator={item.separator}
                                            end={item.counter}
                                            decimals={item.decimals}
                                            duration={4}
                                        />
                                    </span></h4>
                                </div>
                                {/*<div className="avatar-sm flex-shrink-0">
                                    <span className={"avatar-title rounded fs-3 bg-soft-" + item.bgcolor}>
                                        <i className={`text-${item.bgcolor} ${item.icon}`}></i>
                                    </span>
                                </div>*/}
                                <div
                                    className="apex-charts crypto-widget"
                                    data-colors='["--vz-success" , "--vz-transparent"]'
                                    id="bitcoin_sparkline_charts"
                                    dir="ltr"
                                >
                                    <WatchListChart seriesData={item.series} chartsColor={item.chartsColor} />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>))}
        </React.Fragment>
    );
};

export default Widgets;