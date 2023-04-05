import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://642d6609bf8cbecdb405162a.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/contacts');
  return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  const response = await axios.post('/contacts', contact);
  return response.data;
});

export const delContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  const response = await axios.delete(`/contacts/${contactId}`);
  return response.data;
});

export const toggleCompleted = createAsyncThunk('contacts/toggleCompleted', async (contact) => {
  const response = await axios.put(`/contacts/${contact.id}`, { completed: !contact.completed });
  return response.data;
});
