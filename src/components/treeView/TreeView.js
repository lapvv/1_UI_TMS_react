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

const dataInArray = [
  {
    key: "mammal",
    label: "Mammal",
    url: "https://www.google.com/search?q=mammal",
    nodes: [
      {
        key: "canidae",
        label: "Canidae",
        url: "https://www.google.com/search?q=canidae",
        nodes: [
          {
            key: "dog",
            label: "Dog",
            url: "https://www.google.com/search?q=dog",
            nodes: [],
          },
          {
            key: "fox",
            label: "Fox",
            url: "https://www.google.com/search?q=fox",
            nodes: [],
          },
          {
            key: "wolf",
            label: "Wolf",
            url: "https://www.google.com/search?q=wolf",
            nodes: [],
          },
        ],
      },
    ],
  },
  {
    key: "reptile",
    label: "Reptile",
    url: "https://www.google.com/search?q=reptile",
    nodes: [
      {
        key: "squamata",
        label: "Squamata",
        url: "https://www.google.com/search?q=squamata",
        nodes: [
          {
            key: "lizard",
            label: "Lizard",
            url: "https://www.google.com/search?q=lizard",
          },
          {
            key: "snake",
            label: "Snake",
            url: "https://www.google.com/search?q=snake",
          },
          {
            key: "gekko",
            label: "Gekko",
            url: "https://www.google.com/search?q=gekko",
          },
        ],
      },
    ],
  },
];

const translations = {
  Mammal: "Mamífero",
  Canidae: "Canidae",
  Dog: "Perro",
  Fox: "Zorro",
  Wolf: "Lobo",
  Reptile: "Reptil",
  Squamata: "Squamata",
  Lizard: "Lagartija",
  Snake: "Serpiente",
  Gekko: "Gekko",
};

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

// import TreeViewCSS from "./TreeView.css";
// import {
//   UncontrolledTreeEnvironment,
//   Tree,
//   StaticTreeDataProvider,
// } from "react-complex-tree";
// import TreeMenu from "react-simple-tree-menu";

// const TreeView = {
//   "first-level-node-1": {
//     // key
//     label: "Node 1 at the first level",
//     index: 0, // decide the rendering order on the same level // any other props you need, e.g. url
//     nodes: {
//       "second-level-node-1": {
//         label: "Node 1 at the second level",
//         index: 0,
//         nodes: {
//           "third-level-node-1": {
//             label: "Node 1 at the third level",
//             index: 0,
//             nodes: {}, // you can remove the nodes property or leave it as an empty array
//           },
//         },
//       },
//     },
//   },
//   "first-level-node-2": {
//     label: "Node 2 at the first level",
//     index: 1,
//   },
//   "first-level-node-3": {
//     label: "Node 3 at the first level",
//     index: 2,
//   },
// };

export default TreeView;

// const TreeView = () => {
// return (
// <ul id="myUL">
//   <li>Главная страница</li>
//   <li>Страница аутентификации</li>
//   <li>
//     <span className="caret">Услуги</span>
//   </li>
//   <ul className="nested">
//     <li>
//       <span className="caret">ГПЗУ 262</span>
//     </li>
//     <ul className="nested">
//       <li>
//         <span className="caret">Шаг 1</span>
//       </li>
//       <ul className="nested">
//         <li>Выбор услуги</li>
//         <li>Сведения о заявителе</li>
//       </ul>
//       <li>Шаг 2</li>
//       <li>Шаг 3</li>
//     </ul>
//     <li>
//       <span className="caret">ДТИС 77200101</span>
//     </li>
//     <ul className="nested">
//       <li>Шаг 1</li>
//       <li>Шаг 2</li>
//       <li>Шаг 3</li>
//     </ul>
//   </ul>
// </ul>
