import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/Contacts/filtersSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => dispatch(setFilter(e.target.value))}
        placeholder="Search"
      />
    </div>
  );
};
export default SearchBox;
