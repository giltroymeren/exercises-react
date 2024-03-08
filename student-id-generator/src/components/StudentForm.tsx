import React from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import FormTextField from "./form/FormTextField";
import FormField from "./form/FormField";

const LENGTH_MINIMUM = 2;

enum ValidationMessages {
  Required = "This field is required.",
  TwoCharacters = "This field must be at least two (2) characters.",
}

const StudentSchema = yup.object({
  firstName: yup
    .string()
    .required(ValidationMessages.Required)
    .min(LENGTH_MINIMUM, ValidationMessages.TwoCharacters),
  lastName: yup
    .string()
    .required(ValidationMessages.Required)
    .min(LENGTH_MINIMUM, ValidationMessages.TwoCharacters),
  degree: yup
    .string()
    .required(ValidationMessages.Required)
    .min(LENGTH_MINIMUM, ValidationMessages.TwoCharacters),
  university: yup
    .string()
    .required(ValidationMessages.Required)
    .min(LENGTH_MINIMUM, ValidationMessages.TwoCharacters),
});

export interface Student extends yup.InferType<typeof StudentSchema> {}

const initialValues: Student = {
  firstName: "",
  lastName: "",
  degree: "",
  university: "",
};

type Props = {
  setStudentData: React.Dispatch<React.SetStateAction<Student | undefined>>;
};

function StudentForm({ setStudentData }: Props) {
  const onSubmit = (newStudent: Student) => setStudentData(newStudent);

  return (
    <Formik<Student>
      initialValues={initialValues}
      validationSchema={StudentSchema}
      validateOnMount
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          onSubmit(values);
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Form className="max-w-sm mx-auto">
          <FormField fieldName="firstName" labelName="First name">
            <FormTextField fieldName="firstName" />
          </FormField>

          <FormField fieldName="lastName" labelName="Last name">
            <FormTextField fieldName="lastName" />
          </FormField>

          <FormField fieldName="degree" labelName="Degree">
            <FormTextField fieldName="degree" />
          </FormField>

          <FormField fieldName="university" labelName="University">
            <FormTextField fieldName="university" />
          </FormField>

          <div className="mb-5">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 
                text-center dark:bg-blue-600 "
              type="submit"
              disabled={isSubmitting || !isValid}
            >
              Generate ID
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default StudentForm;
