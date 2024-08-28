import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContactThunk } from "../../redux/contacts/operations";
const initialValues = {
  name: "",
  number: "",
};

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
          <ErrorMessage name="name" component="span" />
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="number" component="span" />
          <Field type="text" name="number" placeholder="Number" />
          <button>submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactsForm;
