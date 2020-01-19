import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";

import InputForm from "./InputForm/inputForm";

const validationSchema = Yup.object({
  name: Yup.string("Enter a name").required("Name is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  message: Yup.string("")
    .min(20, "Message must contain atleast 20 characters")
    .required("To send a message write something")
});

const EmailForm = () => {
  const values = { name: "", email: "", message: "" };

  const submit = data => {
    console.log(data);
  };

  return (
    <Formik
      render={props => <InputForm {...props} />}
      initialValues={values}
      validationSchema={validationSchema}
      onSubmit={submit}
    />
  );
};

export default EmailForm;