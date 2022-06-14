// import React from "react";
// import TreeViewCSS from "./TreeView.css";
// import {
//   UncontrolledTreeEnvironment,
//   Tree,
//   StaticTreeDataProvider,
// } from "react-complex-tree";
// import TreeMenu from "react-simple-tree-menu";

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
// <ul id="myUL">
//   <li>
//     <span className="caret">Beverages</span>
//     <ul className="nested">
//       <li>Water</li>
//       <li>Coffee</li>
//       <li>
//         <span className="caret">Tea</span>
//         <ul className="nested">
//           <li>Black Tea</li>
//           <li>White Tea</li>
//           <li>
//             <span className="caret">Green Tea</span>
//             <ul className="nested">
//               <li>Sencha</li>
//               <li>Gyokuro</li>
//               <li>Matcha</li>
//               <li>Pi Lo Chun</li>
//             </ul>
//           </li>
//         </ul>
//       </li>
//     </ul>
//   </li>
// </ul>
// );
// };
// function TreeView() {
//   return (
//     <UncontrolledTreeEnvironment
//       dataProvider={
//         new StaticTreeDataProvider(longTree.items, (item, data) => ({
//           ...item,
//           data,
//         }))
//       }
//       getItemTitle={(item) => item.data}
//       viewState={{}}
//     >
//       <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
//     </UncontrolledTreeEnvironment>
//   );
// }
const TreeView = {
  "first-level-node-1": {
    // key
    label: "Node 1 at the first level",
    index: 0, // decide the rendering order on the same level // any other props you need, e.g. url
    nodes: {
      "second-level-node-1": {
        label: "Node 1 at the second level",
        index: 0,
        nodes: {
          "third-level-node-1": {
            label: "Node 1 at the third level",
            index: 0,
            nodes: {}, // you can remove the nodes property or leave it as an empty array
          },
        },
      },
    },
  },
  "first-level-node-2": {
    label: "Node 2 at the first level",
    index: 1,
  },
  "first-level-node-3": {
    label: "Node 3 at the first level",
    index: 2,
  },
};

export default TreeView;
