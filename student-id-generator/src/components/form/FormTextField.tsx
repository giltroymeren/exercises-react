import React from "react";
import { Field } from "formik";

type Props = {
  fieldName: string;
  type?: "text" | "email";
};

function FormTextField({ fieldName, type = "text" }: Props) {
  return (
    <Field
      name={fieldName}
      type={type}
      className="border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      required
    />
  );
}

export default FormTextField;
