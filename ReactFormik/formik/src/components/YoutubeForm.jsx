import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const initialValues = {
  name: "khun",
  email: "",
  channel: "",
  comments: "",
  address: "",
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
          <ErrorMessage name="channel" />
        </div>
        <div className="form-control">
          <label htmlFor="comments">Comments Me</label>
          <Field
            as="textarea"
            name="comments"
            id="comments"
            placeholder="Please give me feedbacks!"
          />
          <ErrorMessage name="comments" />
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {({ field, form, meta }) => {
              return (
                <div>
                  <input id="address" type="text" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
          <ErrorMessage name="address" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default YoutubeForm;
