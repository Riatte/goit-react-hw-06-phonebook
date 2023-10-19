import { createSlice } from '@reduxjs/toolkit';

const initialContactState = [];
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactState,
  reducers: {
    addContact(state, { payload }) {
      state.push(payload);
    },
    deleteContact(state, { payload }) {
      return state.filter(({ id }) => id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
