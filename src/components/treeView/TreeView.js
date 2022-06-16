import React from "react";
import { ListGroupItem, Input, ListGroup } from "reactstrap";
import TreeMenu from "react-simple-tree-menu";
// import TreeMenu, { defaultChildren, ItemComponent } from '../src/index';
import closedIconImg from "./closedIcon.png";
import openedIconImg from "./openedIcon.png";

// import "./bootstrap.min.css";
import "./main.css";

const DEFAULT_PADDING = 16;
const ICON_SIZE = 8;
const LEVEL_SPACE = 16;

const iconStyle = {
  verticalAlign: "text-bottom",
};
const openedIcon = <img src={openedIconImg} alt="-" style={iconStyle}></img>;
const closedIcon = <img src={closedIconImg} alt="+" style={iconStyle}></img>;

const ToggleIcon = ({ on }) => (
  <span style={{ marginRight: 8 }}>{on ? "-" : "+"}</span>
);
const ListItem = ({
  level = 0,
  hasNodes,
  isOpen,
  label,
  searchTerm,
  openNodes,
  toggleNode,
  matchSearch,
  focused,
  ...props
}) => (
  <ListGroupItem
    {...props}
    style={{
      paddingLeft: DEFAULT_PADDING + ICON_SIZE + level * LEVEL_SPACE,
      cursor: "pointer",
      boxShadow: focused ? "0px 0px 5px 0px #222" : "none",
      zIndex: focused ? 999 : "unset",
      position: "relative",
    }}
  >
    {hasNodes && (
      <div
        style={{ display: "inline-block" }}
        onClick={(e) => {
          hasNodes && toggleNode && toggleNode();
          e.stopPropagation();
        }}
      >
        <ToggleIcon on={isOpen} />
      </div>
    )}
    {label}
  </ListGroupItem>
);

// storiesOf("TreeMenu", module)
//   .addDecorator(withInfo)
// .add('default usage', () => (
//   <TreeMenu data={dataInArray} onClickItem={action(`on click node`)} />
// ))
// .add('without search', () => (
//   <TreeMenu
//     data={dataInArray}
//     onClickItem={action(`on click node`)}
//     hasSearch={false}
//   />
// ))
// .add("has initial states", () => (
const TreeView = () => {
  return (
    <TreeMenu
      data={dataInArray}
      onClickItem={action(`on click node`)}
      initialOpenNodes={[
        "reptile",
        "reptile/squamata",
        "reptile/squamata/lizard",
      ]}
      initialActiveKey="reptile/squamata"
    />
  );
};

export default TreeView;
