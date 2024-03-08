import React from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import FormErrorMessage from "./FormErrorMessage";
import FormLabel from "./FormLabel";
import FormTextField from "./FormTextField";

const StudentSchema = yup.object({
  firstName: yup.string().required().min(2),
  lastName: yup.string().required().min(2),
  degree: yup.string().required().min(2),
  university: yup.string().required().min(2),
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
          <div className="mb-5">
            <FormLabel forFieldName="firstName" labelName="First name" />
            <FormTextField fieldName="firstName" />
            <FormErrorMessage fieldName="firstName" />
          </div>

          <div className="mb-5">
            <FormLabel forFieldName="lastName" labelName="Last name" />
            <FormTextField fieldName="lastName" />
            <FormErrorMessage fieldName="lastName" />
          </div>

          <div className="mb-5">
            <FormLabel forFieldName="degree" labelName="Degree" />
            <FormTextField fieldName="degree" />
            <FormErrorMessage fieldName="degree" />
          </div>

          <div className="mb-5">
            <FormLabel forFieldName="university" labelName="University" />
            <FormTextField fieldName="university" />
            <FormErrorMessage fieldName="university" />
          </div>

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
