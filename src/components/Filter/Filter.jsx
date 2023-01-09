import PropTypes from 'prop-types';
// import css from './Filter.module.css';


export const Filter = ({ filter, changeFilter }) => {
    return (
    <label>
        Find contacts by name
        <input
        type="text"
        value={filter}
        onChange={changeFilter} />
    </label>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
  };