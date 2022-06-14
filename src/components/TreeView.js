import React from "react";
// import TreeViewCSS from "./TreeView.css";

const TreeView = () => {
  return (
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
    <ul id="myUL">
      <li>
        <span className="caret">Beverages</span>
        <ul className="nested">
          <li>Water</li>
          <li>Coffee</li>
          <li>
            <span className="caret">Tea</span>
            <ul className="nested">
              <li>Black Tea</li>
              <li>White Tea</li>
              <li>
                <span className="caret">Green Tea</span>
                <ul className="nested">
                  <li>Sencha</li>
                  <li>Gyokuro</li>
                  <li>Matcha</li>
                  <li>Pi Lo Chun</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default TreeView;
