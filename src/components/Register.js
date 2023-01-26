import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
import LoginAndRegisterForm from "./LoginAndRegisterForm";

function Register({register}) {

  const [errors, setErrors] = useState({});
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: e.target.validationMessage,
    });
  };

  function handelSubmit(e) {
    e.preventDefault();
    register(formValue.password, formValue.email);
    formValue.password = "";
    formValue.email = "";
  }

  return (
    <main className="content">
      <section className="login">
        <h2 className="login__title">Регистрация</h2>
        <LoginAndRegisterForm
          onSubmit={handelSubmit}
          disabled={!(errors.email === "" && errors.password === "")}
          buttonText={"Зарегистрироваться"}
        >
          <input
            id="email"
            className="form__input"
            name="email"
            type="email"
            placeholder="Email"
            value={formValue.email || ''}
            onChange={handleChange}
            autoComplete="off"
            minLength="2"
            required
          />
          <span className={"form__text-error_active"}>{errors.email}</span>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            className="form__input"
            value={formValue.password || ''}
            onChange={handleChange}
            minLength="4"
          />
          <span className={"form__text-error_active"}>{errors.password}</span>
        </LoginAndRegisterForm>
        <Link to="/sign-in" className="login__paragraph">
          Уже зарегистрировались? Войти
        </Link>
      </section>
    </main>
  );
}

export default Register;
