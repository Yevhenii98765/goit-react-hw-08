// import {
//   addContact,
//   deleteContact,
//   fetchDataSuccessfully,
//   fetchingData,
//   fetchingError,
// } from "./contactsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from "../auth/operations";

export const fetchDataThunk = createAsyncThunk(
  "fetchData",
  async (dispatch, thunkAPI) => {
    try {
      const { data } = await goitApi.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchDataThunk = () => async (dispatch) => {
//   try {
//     dispatch(fetchingData(true));
//     const { data } = await axios.get("/contacts");
//     dispatch(fetchDataSuccessfully(data));
//   } catch (error) {
//     dispatch(fetchingError());
//   } finally {
//     dispatch(fetchingData(false));
//   }
// };

export const deleteThunk = createAsyncThunk(
  "deleteContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await goitApi.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const deleteThunk = (id) => async (dispatch) => {
//   try {
//     dispatch(fetchingData(true));
//     const { data } = await axios.delete(`/contacts/${id}`);
//     dispatch(deleteContact(data.id));
//     dispatch(fetchingData(data));
//   } catch (error) {
//     dispatch(fetchingError());
//   } finally {
//     dispatch(fetchingData(false));
//   }
// };

export const addContactThunk = createAsyncThunk(
  "addContact",
  async (contacts, thunkAPI) => {
    try {
      const { data } = await goitApi.post("/contacts", contacts);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const addContactThunk = (contacts) => async (dispatch) => {
//   try {
//     dispatch(fetchingData(true));
//     const { data } = await axios.post("/contacts", contacts);
//     dispatch(addContact(data));
//   } catch (error) {
//     dispatch(fetchingError());
//   } finally {
//     dispatch(fetchingData(false));
//   }
// };
