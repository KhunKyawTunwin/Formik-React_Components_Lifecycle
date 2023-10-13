import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";

const RegistrationForm = () => {
  const options = [
    { key: "Email", value: "emailmoc" },
    { key: "Telephone", value: "telephonemoc" },
  ];
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required!"),
    password: Yup.string().required("Required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match *")
      .required("Required!"),
    modeOfContact: Yup.string().required("Required!"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephonemoc",
      then: Yup.string().required("Required!"),
    }),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("Register form", values);
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
              label="Email"
              type="email"
              name="email"
            />
            <FormikControl
              control="input"
              label="Password"
              type="password"
              name="password"
            />
            <FormikControl
              control="input"
              label="Confirm Password"
              type="password"
              name="confirmPassword"
            />
            <FormikControl
              control="radio"
              label="Mode of Contact"
              name="modeOfContact"
              options={options}
            />
            <FormikControl
              control="input"
              type="text"
              label="Phone Number"
              name="phone"
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
export default RegistrationForm;
