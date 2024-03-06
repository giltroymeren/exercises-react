import * as yup from "yup";
import { Formik } from "formik";

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
        onSubmit={(values) => onSubmit(values)}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">First name</label>
              <input
                name="firstName"
                placeholder="Your first name"
                onChange={handleChange}
                value={values.firstName}
              />
              {errors.firstName && touched.firstName && (
                <div>{errors.firstName}</div>
              )}
            </div>

            <div>
              <label htmlFor="lastName">Last name</label>
              <input
                name="lastName"
                placeholder="Your last name"
                onChange={handleChange}
                value={values.lastName}
              />
              {errors.lastName && touched.lastName && (
                <div>{errors.lastName}</div>
              )}
            </div>

            <div>
              <label htmlFor="degree">Degree</label>
              <input
                name="degree"
                placeholder="Your degree's title"
                onChange={handleChange}
                value={values.degree}
              />
              {errors.degree && touched.degree && <div>{errors.degree}</div>}
            </div>

            <div>
              <label htmlFor="university">University</label>
              <input
                name="university"
                placeholder="Your university's name"
                onChange={handleChange}
                value={values.university}
              />
              {errors.university && touched.university && (
                <div>{errors.university}</div>
              )}
            </div>

            <div>
              <button type="submit">Generate ID</button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

export default App;
