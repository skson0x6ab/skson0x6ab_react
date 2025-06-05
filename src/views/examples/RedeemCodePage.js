import React, { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import { GenshinCodeRedeemContext } from "contexts/RedeemCodeGenshin"; // Context 가져오기
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function RedeemCodePage() {
  const { state } = useContext(GenshinCodeRedeemContext); // Context에서 데이터 가져오기
  const { jsonData, loading, error } = state;

  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="name">
              <h4 className="title">Jane Faker</h4>
              <h6 className="description">Music Producer</h6>
            </div>
          </div>
          
          <Row>
            <Col className="text-center" md="6">
              {loading && <p>Loading data...</p>}
              {error && <p style={{ color: "red" }}>Error: {error}</p>}
              {jsonData && (
                <>
                  <h5>🎮 Active Genshin Codes:</h5>
                  <ul>
                    {jsonData.activeCodes.map((code, index) => (
                      <li key={index}>{code}</li>
                    ))}
                  </ul>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default RedeemCodePage;
