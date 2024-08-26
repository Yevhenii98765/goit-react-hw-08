import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./Contacts/contactsSlice";
import { filterReducer } from "./Contacts/filtersSlice";
import { authReducer } from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
