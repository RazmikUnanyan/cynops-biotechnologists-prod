import React from "react";
import Input from "@material-ui/core/TextField";
import { Field } from "formik";

const FormField = ({ name, label, value, onChange }) => {
  return (
    <div className="FormikField">
      <Field
        row
        autoComplete="off"
        as={Input}
        placeholder={label}
        name={name}
        fullWidth
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormField;
