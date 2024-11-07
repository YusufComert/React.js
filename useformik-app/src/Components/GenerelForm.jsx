import { useFormik } from "formik";
import React from "react";
import { basicSchema } from "../schemas";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};
const GenerelForm = () => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDİv">
        <label>Email</label>
        <input
          type="email"
          value={values.email}
          id="email"
          placeholder="Mail Adresi Giriniz"
          onChange={handleChange}
          className={errors.email ? "input-error" : ""}
        />
      </div>
      {errors.email && <p className="error">{errors.email}</p>}

      <div className="inputDİv">
        <label>Yaş</label>
        <input
          type="number"
          value={values.age}
          id="age"
          placeholder="Yaşınızı Giriniz"
          onChange={handleChange}
          className={errors.age ? "input-error" : ""}
        />
      </div>
      {errors.age && <p className="error">{errors.age}</p>}
      <div className="inputDİv">
        <label>Şifre</label>
        <input
          type="password"
          value={values.password}
          id="password"
          placeholder="Şifrenizi Giriniz"
          onChange={handleChange}
          className={errors.password ? "input-error" : ""}
        />
      </div>
      {errors.password && <p className="error">{errors.password}</p>}
      <div className="inputDİv">
        <label>Şifre Tekrar</label>
        <input
          type="password"
          value={values.confirmPassword}
          id="confirmPassword"
          placeholder="Şifrenizi Tekrar Giriniz"
          onChange={handleChange}
          className={errors.confirmPassword ? "input-error" : ""}
        />
      </div>
      {errors.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}
      <button disabled={isSubmitting} type="submit">
        Kaydet
      </button>
      <Link to="/portal" style={{ color: "white" }}>
        Portala Git
      </Link>
    </form>
  );
};

export default GenerelForm;
