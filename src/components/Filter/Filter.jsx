import PropTypes from 'prop-types';
// import css from './Filter.module.css';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <label>
      <input
        type="text"
        placeholder="Find contacts by name"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
