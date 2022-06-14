import React from "react";
import PropertiesTab from "./PropertiesTab";
import { Tabs, Tab } from "react-bootstrap";
import UseInScenariosTab from "./UseInScenariosTab";

const LocatorCatTabs = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="props" title="Свойства">
        <PropertiesTab />
      </Tab>
      <Tab eventKey="useInScen" title="Использование в сценариях">
        <UseInScenariosTab />
      </Tab>
    </Tabs>
  );
};

export default LocatorCatTabs;
