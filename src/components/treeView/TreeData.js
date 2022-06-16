import React from "react";

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

const dataInArray = [
  {
    key: "Главная страница",
    label: "Главная страница",
  },
  {
    key: "Страница аутентификации",
    label: "Страница аутентификации",
    // url: "https://www.google.com/search?q=mammal",
  },
  {
    key: "Услуги",
    label: "Услуги",
    // url: "https://www.google.com/search?q=reptile",
    nodes: [
      {
        key: "ГПЗУ 262",
        label: "ГПЗУ 262",
        // url: "https://www.google.com/search?q=squamata",
        nodes: [
          {
            key: "Шаг 1",
            label: "Шаг 1",
            // url: "https://www.google.com/search?q=lizard",
            nodes: [
              {
                key: "Выбор услуги",
                label: "Выбор услуги",
              },
              {
                key: "Сведения о заявителе",
                label: "Сведения о заявителе",
              },
              {
                key: "Документ удостоверяющий личность",
                label: "Документ удостоверяющий личность",
              },
            ],
          },
          {
            key: "Шаг 2",
            label: "Шаг 2",
          },
          {
            key: "Шаг 3",
            label: "Шаг 3",
          },
        ],
      },
      {
        key: "ДТИС 77200101",
        label: "ДТИС 77200101",
        nodes: [
          {
            key: "Шаг 1",
            label: "Шаг 1",
          },
          {
            key: "Шаг 2",
            label: "Шаг 2",
          },
          {
            key: "Шаг 3",
            label: "Шаг 3",
          },
        ],
      },
    ],
  },
];

export default dataInArray;
