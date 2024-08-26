import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./Contacts/contactsSlice";
import { filterReducer } from "./Contacts/filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
