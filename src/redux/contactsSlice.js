import { createSlice } from '@reduxjs/toolkit';
import {
fetchContacts,
addContact,
delContact,
toggleCompleted
} from './operations';

export const contactsSlice = createSlice({
name: 'contacts',
initialState: {
items: [],
isLoading: false,
error: null,
filter: '',
},
reducers: {},
extraReducers: (builder) => {
builder
.addCase(fetchContacts.pending, (state) => {
state.isLoading = true;
})
.addCase(fetchContacts.fulfilled, (state, action) => {
state.isLoading = false;
state.error = null;
state.items = action.payload;
})
.addCase(fetchContacts.rejected, (state, action) => {
state.isLoading = false;
state.error = action.payload;
})
.addCase(addContact.pending, (state) => {
state.isLoading = true;
})
.addCase(addContact.fulfilled, (state, action) => {
state.isLoading = false;
state.error = null;
state.items.push(action.payload);
})
.addCase(addContact.rejected, (state, action) => {
state.isLoading = false;
state.error = action.payload;
})
.addCase(delContact.pending, (state) => {
state.isLoading = true;
})
.addCase(delContact.fulfilled, (state, action) => {
state.isLoading = false;
state.error = null;
const index = state.items.findIndex(
(contact) => contact.id === action.payload.id
);
state.items.splice(index, 1);
})
.addCase(delContact.rejected, (state, action) => {
state.isLoading = false;
state.error = action.payload;
})
.addCase(toggleCompleted.pending, (state) => {
state.isLoading = true;
})
.addCase(toggleCompleted.fulfilled, (state, action) => {
state.isLoading = false;
state.error = null;
const index = state.items.findIndex(
(contact) => contact.id === action.payload.id
);
state.items.splice(index, 1, action.payload);
})
.addCase(toggleCompleted.rejected, (state, action) => {
state.isLoading = false;
state.error = action.payload;
});
},
});

export const contactsReducer = contactsSlice.reducer;