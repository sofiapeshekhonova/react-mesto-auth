import {React, useState} from "react";
import LoginAndRegisterForm from "./LoginAndRegisterForm";

function Login({login}) {

  const [errors, setErrors] = useState({});
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: e.target.validationMessage,
    });
  }

  function handelSubmit(e) {
    e.preventDefault();
    login(formValue.password, formValue.email);
    formValue.password = "";
    formValue.email = "";
  }

  return (
    <main className="content">
      <section className="login">
        <h2 className="login__title">Вход</h2>
        <LoginAndRegisterForm
          onSubmit={handelSubmit}
          disabled={!(errors.email === "" && errors.password === "")}
          buttonText={"Войти"}
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
            minLength="2"
            required
          />
          <span className={"form__text-error_active"}>{errors.password}</span>
        </LoginAndRegisterForm>
      </section>
    </main>
  );
}

export default Login;
