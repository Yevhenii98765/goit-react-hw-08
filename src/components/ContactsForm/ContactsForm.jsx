import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContactThunk } from "../../redux/contacts/operations";
import s from "./ContactsForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "To short text")
    .max(15, "To long text")
    .required("Enter Text"),
  number: Yup.string()
    .min(3, "To short text")
    .max(15, "To long text")
    .required("Enter Text"),
});

export const ContactsForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(addContactThunk(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div style={{ display: "flex" }}>
            <div style={{ position: "relative" }}>
              <ErrorMessage name="name" component="span" className={s.error} />
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className={s.input}
              />
            </div>
            <div style={{ position: "relative" }}>
              <ErrorMessage
                name="number"
                component="span"
                className={s.error}
              />
              <Field type="text" name="number" placeholder="Number" />
            </div>
            <button type="submit">submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactsForm;
