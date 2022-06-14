import { Container, Row, Nav, Tab } from "react-bootstrap";
import "./App.css";
import ProjectChoose from "./components/ProjectChoose";
import LocatorCatTabs from "./components/LocatorCatTabs";
import TreeView from "./components/TreeView";
import React from "react";

function App() {
  return (
    <Container>
      <Row className="mt-2">
        <ProjectChoose />
        {/* <Col md={9}>
          {/* <BrandBar /> */}
        {/* </Col> */}
      </Row>
      <div className="container-fluid d-flex">
        <div className="col-6 border border-dark border-opacity-25 rounded me-2 p-2">
          <TreeView />
        </div>
        <div className="col-6">
          <div className="container">
            <LocatorCatTabs />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
