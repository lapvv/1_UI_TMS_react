import React from "react";
import { Container, Row } from "react-bootstrap";
// import "./App.css";
import ProjectChoose from "./components/ProjectChoose";
import LocatorCatTabs from "./components/LocatorCatTabs";
import TreeView from "./components/treeView/TreeView";
import Test from "./components/treeView/test";
// import treeData from "./components/treeView/TreeView";
// import TreeMenu from "react-simple-tree-menu";

function App() {
  return (
    <Container>
      <Row className="mt-2">
        <ProjectChoose />
      </Row>
      <div className="container-fluid d-flex">
        <div className="col-6 border border-dark border-opacity-25 rounded me-2 p-2">
          <Test />
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
