import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/slice";
import Contact from "../Contact/Contact";
import { selectFilter } from "../../redux/filters/slice";
import s from "./ContactList.module.css";
export const ContactList = () => {
  const items = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredTodos = items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul className={s.iner}>
        {filteredTodos.map((item) => (
          <Contact key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
