import { Row, Col } from "react-bootstrap";

const Analytics = () => {
    return (
      <>
    <div className="container">
  <Row>
    <Col lg={6} md={12} className="bg-primary w-100 h-100">
      Column
    </Col>
    <Col lg={3} md={6} className="bg-warning w-100 h-100">
      Column
    </Col>
    <Col lg={3} md={6} className="bg-primary w-100 h-100">
      Column
    </Col>
</Row>
  </div>
  
      </>
    );
  };
  
  export default Analytics;