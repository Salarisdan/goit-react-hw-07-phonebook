import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

// This component renders a text input field that allows users to filter contacts
// based on the contact's name. It receives the current filter value from the store
// using the useSelector hook and updates it using the useDispatch hook and the
// setFilter action creator.
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};
