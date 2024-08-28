import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteThunk } from "../../redux/contacts/operations";
export const Contact = ({ item }) => {
  const dispatch = useDispatch();
  const { name, number } = item;

  return (
    <li className={s.style}>
      <div className={s.info}>
        <div className={s.wraper}>
          <h3>Name: </h3>
          <p>{name}</p>
        </div>
        <div className={s.wraper}>
          <h3>Number: </h3>
          <p>{number}</p>
        </div>
      </div>
      <div className={s.button}>
        <button
          className={s.btn}
          onClick={() => dispatch(deleteThunk(item.id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
export default Contact;
