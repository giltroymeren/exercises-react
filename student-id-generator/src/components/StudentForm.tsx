import React from "react";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import FormErrorMessage from "./FormErrorMessage";
import FormLabel from "./FormLabel";

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
            <Field
              name="firstName"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
            <FormErrorMessage fieldName="firstName" />
          </div>

          <div className="mb-5">
            <FormLabel forFieldName="lastName" labelName="Last name" />
            <Field
              name="lastName"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
            <FormErrorMessage fieldName="lastName" />
          </div>

          <div className="mb-5">
            <FormLabel forFieldName="degree" labelName="Degree" />
            <Field
              name="degree"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
            <FormErrorMessage fieldName="degree" />
          </div>

          <div className="mb-5">
            <FormLabel forFieldName="university" labelName="University" />
            <Field
              name="university"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
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
