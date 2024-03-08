import React from "react";
import FormLabel from "./FormLabel";
import FormErrorMessage from "./FormErrorMessage";

type Props = {
  fieldName: string;
  labelName: string;
  children: React.ReactNode;
};

function FormField({ fieldName, labelName, children }: Props) {
  return (
    <div className="mb-5">
      <FormLabel forFieldName={fieldName} labelName={labelName} />
      {children}
      <FormErrorMessage fieldName={fieldName} />
    </div>
  );
}

export default FormField;
