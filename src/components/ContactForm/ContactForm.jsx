import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import css from './ContactForm.module.css';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => setValue(e.target.value);
  return [value, handleChange];
};

export const ContactForm = () => {
  const [name, handleChangeName] = useInput('');
  const [number, handleChangeNumber] = useInput('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isContactExists = contacts.some((contact) => contact.name === name);
    if (isContactExists) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, phone: number }));
    reset();
  };

  const reset = () => {
    handleChangeName('');
    handleChangeNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formLabel}>Name </label>
      <input
        className={css.formName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        value={name}
        onChange={handleChangeName}
      />
      <label className={css.formLabel}>Number </label>
      <input
        className={css.formNumber}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
        value={number}
        onChange={handleChangeNumber}
      />
      <button className={css.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
