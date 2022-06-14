import React from "react";
import { Form, FormSelect, Button } from "react-bootstrap";

const PropertiesTab = () => {
  return (
    <div className="tab-content">
      {/* Вкладка свойства */}
      <div
        className="tab-pane active border border-dark border-opacity-25 rounded p-2"
        id="tab1"
      >
        <div className="d-flex flex-row justify-content-between">
          <p>Тип локатора: </p>
          <div className="col-4">
            <FormSelect
              defaultValue={1}
              className="form-select form-select-sm"
              aria-label=".form-select-sm"
            >
              <option value="1">XPATH</option>
              <option value="2">CSS</option>
            </FormSelect>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between mt-2">
          <p>Локатор:</p>
          <div>
            <input
              className="form-control"
              style={{ width: 800 }}
              type="text"
              id="xpath"
            />
          </div>
        </div>
        <p className="mt-2 mb-0">
          Итоговый локатор с учётом родительских элементов:
        </p>
        <div className="d-flex flex-row justify-content-between mt-0">
          <div>
            <input
              className="form-control"
              style={{ width: 680 }}
              type="text"
              id="xpath_result"
              readOnly
            />
          </div>
          <Button style={{ width: 40 }} className="p-1">
            {" "}
            <img src="./img/copy-solid.svg" alt="copy button" />{" "}
          </Button>
        </div>
        <div className="d-flex flex-row justify-content-between mt-2">
          <p>Тип элемента:</p>
          <div>
            <Form.Select
              defaultValue="1"
              className="form-select form-select-sm"
              aria-label=".form-select-sm"
            >
              <option value="1">Блок</option>
              <option value="2">Не блок</option>
            </Form.Select>
          </div>
        </div>
        <div className="div_inline">
          <img
            className="img_inline"
            src="src\img\magnifying-glass-solid.svg"
          />
          <input
            className="input_inline"
            type="text"
            placeholder="  Отфильтровать шаги"
          />
        </div>
        <div className="container mt-4 border border-dark">
          <h3>Связан с шагами</h3>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Перейти к блоку ""
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Удалить блок ""
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Нажать кнопку ""
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Ввести текс "" в поле ""
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesTab;
