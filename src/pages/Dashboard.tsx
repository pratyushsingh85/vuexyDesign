import { Row, Col } from "react-bootstrap";
import "./dashboard.css"
import cardAnalytics from "../assets/cardAnalytics.png"
import { linkIcon, shoppingCartIcon } from "../components/icons";
import Icon from "../components/icon";
const Dashboard = () => {
  return (
    <>

<div className="container">
          <Row>
            <Col lg={6} md={12} className="mb-2">
              <div className="scrolling-container">
                <div className="d-flex flex-column flex-md-row align-items-md-center">
                  <div className="">
                    <div className="scrolling-text">
                      <span className="fs-4">Website Analytics</span>
                      <br />
                      <span className="fs-6 fw-lighter">
                        Total 28.5% Conversion
                      </span>
                    </div>
                    <div className="revenue-sources">Revenue Sources</div>
                    <div className="sources-fields">
                      <span className="background-box">268</span>
                      <span className="ms-2">Direct</span>
                      <span className="background-box ms-5">890</span>
                      <span className="ms-2">Organic</span>
                      <br />
                      <div className="mt-3">
                        <span className="background-box">62</span>
                        <span className="ms-2">Referral</span>
                        <span className="background-box ms-5">1.2k</span>
                        <span className="ms-2">Organic</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block">
                    <img
                      src={cardAnalytics}
                      alt="burger"
                      style={{
                        maxHeight: "200px",
                        maxWidth: "100%",
                        zIndex: 1,
                        marginLeft: "50px",
                        marginTop: "25px",
                      }}
                      className="me-2 image23 img-fluid"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="Sales-container">
                <div className="overview-text d-flex justify-content-between">
                  <span className="fw-lighter fs-6 mt-3 ms-2">
                    Sales Overview
                  </span>
                  <span className="overview-color mt-3 me-2">+18.2%</span>
                </div>
                <p className="ms-4 fs-4">$42.5k</p>
                <div className="d-md-flex justify-content-between ms-2">
                  <Icon icon={shoppingCartIcon} />
                  <span className="">Order</span>
                  <span className="ms-4">Visits</span>
                  <Icon styleClass="iconHide ms-2 me-2" icon={linkIcon} />
                </div>
                <br />
                <div className="d-flex justify-content-between ms-2 me-2">
                  <span>62.2%</span>
                  <span className="ms-5">25.5%</span>
                </div>

                <div className="d-flex justify-content-between mt-1 fw-lighter ms-2 me-2">
                  <span>6,440</span>
                  <span className="ms-5">12,749</span>
                </div>
                <div
                  className="progress w-75 mt-3 mb-4"
                  style={{ height: "8px" }}
                >
                  {/* <div
                    className="progress-bar bg-info "
                    style={{ width: "70%" }}
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "30%" }}
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div> */}
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="revenue-container">
             
                <div className="pt-3">
                  {/* <Icon styleClass="card-icon " icon={creditCardIcon} /> */}
                  <br />
                  <span className="card-icon mt-1 fs-4">97.5k</span>
                  <br />
                  <span className="card-icon mt-2 fs-6 fw-light">
                    Revenue Generated
                  </span>
                </div>
                {/* <img
                      src={reGraph}
                      alt="graph"
                      style={{
                        maxHeight: "200px",
                        maxWidth: "100%",
                        zIndex: 1,
                        // marginLeft: "25px",
                        marginTop: "25px",
                      }}
                      className=" reGraph me-2 img-fluid"
                    /> */}
                
                {/* <Icon icon={revenueGraph} /> */}
              </div>
            </Col>
          </Row>
        </div>

    </>
  );
};

export default Dashboard;