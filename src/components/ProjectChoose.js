import React from "react";
import { Nav, Select } from "react-bootstrap";

const ProjectChoose = () => {
  return (
    <Nav className="nav justify-content-end">
      <div className="col-3">
        <select
          defaultValue="0"
          className="form-select form-select-lg mb-3 "
          aria-label=".form-select-lg"
        >
          <option value="0">Выбрать проект</option>
          <option value="1">МФЦ</option>
          <option value="2">МПГУ</option>
          <option value="3">Диплодокус</option>
        </select>
      </div>
    </Nav>
  );
};

export default ProjectChoose;
