import { Form, Formik } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";

const EnrollmentForm = () => {
  const dropdownOptions = [
    { key: "Select Your course", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" },
  ];

  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "Javascript", value: "javascript" },
  ];

  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null,
  };
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required!"),
    bio: Yup.string().required("Required!"),
    course: Yup.string().required("Required!"),
    courseDate: Yup.date()
      .required("Required!")
      .min(today, "Date cannot be in the past")
      .nullable(),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("Submit data is:", values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />

            <FormikControl control="textarea" label="Course" name="bio" />
            <FormikControl
              control="select"
              label="Courses"
              name="course"
              options={dropdownOptions}
            />

            <FormikControl
              control="checkbox"
              label="Your Skillset"
              name="skills"
              options={checkboxOptions}
            />
            <FormikControl
              control="date"
              label="Course Date"
              name="courseDate"
            />

            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
export default EnrollmentForm;
