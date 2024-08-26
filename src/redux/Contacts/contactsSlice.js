import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContactThunk, deleteThunk, fetchDataThunk } from "../contactsOps";

const initialState = {
  items: [
    {
      id: 1,
      name: "Rosie Simpson",
      number: "459-12-56",
      completed: false,
    },
  ],
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  selectors: {
    selectContacts: (state) => state.items,
    selectIsLoading: (state) => state.isLoading,
    selectIsError: (state) => state.isError,
  },
  reducers: {
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    fetchingData: (state, action) => {
      state.isLoading = action.payload;
    },
    fetchingError: (state, action) => {
      state.isError = true;
    },
    fetchDataSuccessfully: (state, action) => {
      state.items = action.payload;
    },
    changeStep: (state, action) => {
      state.step = action.payload;
    },
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addMatcher(
        isAnyOf(
          addContactThunk.pending,
          fetchDataThunk.pending,
          deleteThunk.pending
        ),
        (state, action) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          addContactThunk.fulfilled,
          fetchDataThunk.fulfilled,
          deleteThunk.fulfilled
        ),
        (state, action) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          addContactThunk.rejected,
          fetchDataThunk.rejected,
          deleteThunk.rejected
        ),
        (state, action) => {
          state.isError = action.payload;
          state.isLoading = false;
        }
      );
  },
});

export const contactsReducer = slice.reducer;
export const {
  addContact,
  deleteContact,
  fetchDataSuccessfully,
  fetchingData,
  fetchingError,
} = slice.actions;
export const { selectContacts, selectIsLoading, selectIsError } =
  slice.selectors;
