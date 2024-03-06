import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

import "./App.css";

const StudentSchema = yup.object({
  firstName: yup.string().required().min(2),
  lastName: yup.string().required().min(2),
  degree: yup.string().required().min(2),
  university: yup.string().required().min(2),
});

interface Student extends yup.InferType<typeof StudentSchema> {}

const initialValues: Student = {
  firstName: "",
  lastName: "",
  degree: "",
  university: "",
};

function App() {
  const onSubmit = (newStudent: Student) => {
    console.log(`New student: `, newStudent);
  };

  return (
    <>
      <Formik<Student>
        initialValues={initialValues}
        validationSchema={StudentSchema}
        validateOnMount
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            onSubmit(values);
            setSubmitting(false);
          }, 300);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <div>
              <label htmlFor="firstName">First name</label>
              <Field name="firstName" />
              <ErrorMessage name="firstName" component="div" />
            </div>

            <div>
              <label htmlFor="lastName">Last name</label>
              <Field name="lastName" />
              <ErrorMessage name="lastName" component="div" />
            </div>

            <div>
              <label htmlFor="degree">Degree</label>
              <Field name="degree" />
              <ErrorMessage name="degree" component="div" />
            </div>

            <div>
              <label htmlFor="university">University</label>
              <Field name="university" />
              <ErrorMessage name="university" component="div" />
            </div>

            <div>
              <button type="submit" disabled={isSubmitting || !isValid}>
                Generate ID
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default App;
