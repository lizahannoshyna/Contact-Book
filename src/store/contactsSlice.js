import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

// 1. Створюємо адаптер
export const contactsAdapter = createEntityAdapter();

// 2. Створюємо нормалізований початковий стан
const initialState = contactsAdapter.getInitialState({
  isLoading: false,
  error: null,
});

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        contactsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        contactsAdapter.addOne(state, action.payload);
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        contactsAdapter.removeOne(state, action.payload.id);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

export const {
  selectAll: selectAllContacts,
  selectById: selectContactById,
} = contactsAdapter.getSelectors((state) => state.contacts);