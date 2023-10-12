import { Formik, Form } from "formik";

import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const dropdownOptions = [
    { key: "Select an Option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];

  const radioOptions = [
    { key: "Option 1", value: "rOption1" },
    { key: "Option 2", value: "rOption2" },
    { key: "Option 3", value: "rOption3" },
  ];

  const checkboxOptions = [
    { key: "Option 1", value: "cOption1" },
    { key: "Option 2", value: "cOption2" },
    { key: "Option 3", value: "cOption3" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required form field!"),
    description: Yup.string().required("Required form field!"),
    selectOption: Yup.string().required("Required!"),
    radioOption: Yup.string().required("Required!"),
    checkboxOption: Yup.array()
      .required("Required!")
      .min(1, "At least one option must be selected"),
  });

  const onSubmit = (values) => console.log("Form Data", values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            label="Email"
            type="email"
            name="email"
          />

          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />

          <FormikControl
            control="select"
            label="Select a topic"
            name="selectOption"
            options={dropdownOptions}
          />

          <FormikControl
            control="radio"
            label="Radio Topic"
            name="radioOption"
            options={radioOptions}
          />

          <FormikControl
            control="checkbox"
            label="CheckBox Topic"
            name="checkboxOption"
            options={checkboxOptions}
          />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default FormikContainer;