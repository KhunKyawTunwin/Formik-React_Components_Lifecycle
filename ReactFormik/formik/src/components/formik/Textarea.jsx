import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

const Textarea = (props) => {
  const { label, name, ...rest } = props;
  console.log("Textarea data", props);
  return (
    <div className="form-control">
      <label htmlFor={name}>{name}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
export default Textarea;
