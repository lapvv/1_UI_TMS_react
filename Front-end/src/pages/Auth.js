import React from "react";
import Container from "react-bootstrap/Container";
import { Card, Form, Button, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log(location);

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control placeholder="Введите email" className="mt-3" />
          <Form.Control placeholder="Введите пароль" className="mt-3" />
          <Row className="d-flex flex-row justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div style={{ width: 300 }} className="p-0">
                Нет аккаунта?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
              </div>
            ) : (
              <div style={{ width: 300 }} className="p-0">
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
              </div>
            )}
            <Button style={{ width: 150 }} variant="outline-success">
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
