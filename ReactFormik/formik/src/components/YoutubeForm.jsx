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

const initialValues = {
  name: "khun",
  email: "",
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

const onSubmit = (values) => {
  console.log("Form data is ", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format!").required("Required!"),
  channel: Yup.string().required("Required!"),
});

const YoutubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
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
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
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
              console.log("Field error", form.errors);
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
                      <button type="button" onClick={() => push(index)}>
                        +
                      </button>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default YoutubeForm;
