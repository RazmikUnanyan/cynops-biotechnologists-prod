import React from "react";
import Input from "@material-ui/core/TextField";
import { Field } from "formik";

const FormField = ({ name, label }) => {
  return (
    <div className="FormikField">
      <Field
        row
        autoComplete="off"
        as={Input}
        placeholder={label}
        name={name}
        fullWidth
      />
    </div>
  );
};

export default FormField;
