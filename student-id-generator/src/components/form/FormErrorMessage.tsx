import { ErrorMessage } from "formik";
import React from "react";

type Props = {
  fieldName: string;
};

function FormErrorMessage({ fieldName }: Props) {
  return (
    <ErrorMessage
      name={fieldName}
      component="div"
      className="text-sm text-red-700"
    />
  );
}

export default FormErrorMessage;
