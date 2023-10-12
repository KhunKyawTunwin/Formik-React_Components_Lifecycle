import * as Yup from "yup";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import TextError from "./TextError";
import { useState } from "react";

const initialValues = {
  name: "khun",
  email: "web@gmail.com",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const savedValues = {
  name: "kyaw tun win",
  email: "khunweb@gmail.com",
  channel: "webdev",
  comments: "welcome to channel.",
  address: "150/yg(kamayut)",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values, onSubmitProps) => {
  console.log("Form data is ", values);
  console.log("Submit props", onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format!").required("Required!"),
  channel: Yup.string().required("Required!"),
  // address: Yup.string().required("Required!"),
});

// Field level validation.
const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required!";
  }
  return error;
};

const YoutubeForm = () => {
  const [formValues, setFormValues] = useState(null);
  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // validateOnChange={false}
      // validateOnBlur={false}
      // validateOnMount
      enableReinitialize
    >
      {(formik) => {
        console.log("Formik data is ", formik);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" id="name" placeholder="Jon Doe" />
              <ErrorMessage name="name" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Example@gmail.com"
              />
              <ErrorMessage name="email">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field
                type="text"
                name="channel"
                id="channel"
                placeholder="Youtube channel name"
              />
              <ErrorMessage name="channel" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="comments">Comments Me</label>
              <Field
                as="textarea"
                name="comments"
                id="comments"
                validate={validateComments}
                placeholder="Please give me feedbacks!"
              />
              <ErrorMessage name="comments" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="address">Address</label>
              <FastField name="address">
                {({ field, form, meta }) => {
                  console.log("Field render");
                  return (
                    <div>
                      <input id="address" type="text" {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
              <ErrorMessage name="address" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="twitter">Twitter Profile</label>
              <Field type="text" id="twitter" name="social.twitter" />
            </div>
            <div className="form-control">
              <label htmlFor="facebook">Facebook Profile</label>
              <Field type="text" id="facebook" name="social.facebook" />
            </div>
            <div className="form-control">
              <label htmlFor="primaryPh">Primary Phone number</label>
              <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
            </div>
            <div className="form-control">
              <label htmlFor="secondaryPh">Secondary Phone number</label>
              <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
            </div>

            <div className="form-control">
              <label htmlFor="">List of phone numbers</label>
              <FieldArray name="phNumbers">
                {({ remove, push, form }) => {
                  const { values } = form;
                  const { phNumbers } = values;
                  return (
                    <div>
                      {phNumbers.map((_, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                          <button type="button" onClick={() => push("")}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>

            {/* <button
              type="button"
              onClick={() => formik.validateField("comments")}
            >
              Validate Components
            </button>

            <button type="button" onClick={() => formik.validateForm()}>
              Validate All
            </button>

            <button
              type="button"
              onClick={() => formik.setFieldTouched("comments")}
            >
              SetFieldTouched Button
            </button>

            <button
              type="button"
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true,
                })
              }
            >
              SetTouched Button
            </button> */}
            <button type="button" onClick={() => setFormValues(savedValues)}>
              Load Saved Data
            </button>

            <button type="reset">Reset</button>

            <button
              type="submit"
              disabled={!(formik.isValid || formik.isSubmitting)}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
export default YoutubeForm;
