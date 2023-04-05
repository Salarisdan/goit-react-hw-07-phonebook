import { createReducer } from '@reduxjs/toolkit';
import { addContact, delContact, setFilter } from './actions';

// Define the initial state of the contacts store, which includes an array of
// contacts and a filter string.
const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

// Create a contacts reducer using the createReducer function from the @reduxjs/toolkit
// package. The reducer handles three actions: addContact, delContact, and setFilter.
// Each action modifies the state immutably using the immer.js library, which allows
// us to write code that looks like mutable updates.
export const contactsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addContact, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(delContact, (state, action) => {
      state.items = state.items.filter((contact) => contact.id !== action.payload);
    })
    .addCase(setFilter, (state, action) => {
      state.filter = action.payload;
    });
});
