import React from "react";

type Props = {
  forFieldName: string;
  labelName: string;
};

function FormLabel({ forFieldName, labelName }: Props) {
  return (
    <label
      htmlFor={forFieldName}
      className="block mb-2 text-sm font-medium text-gray-900"
    >
      {labelName}
    </label>
  );
}

export default FormLabel;
