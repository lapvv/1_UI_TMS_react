import React from "react";
import TreeMenu from "react-simple-tree-menu";
import TreeData from "./TreeData";

const test = () => {
  return (
    <div>
      <TreeMenu
        cacheSearch
        data={TreeData}
        debounceTime={125}
        disableKeyboard={false}
        hasSearch
        initialActiveKey="reptile/squamata"
        initialOpenNodes={[
          "reptile",
          "reptile/squamata",
          "reptile/squamata/lizard",
        ]}
        onClickItem={function noRefCheck() {}}
        resetOpenNodesOnDataUpdate={false}
      />
    </div>
  );
};

export default test;
