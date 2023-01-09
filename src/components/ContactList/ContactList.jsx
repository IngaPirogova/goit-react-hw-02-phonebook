import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={css.contactItem}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              className={css.bthListItem}
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
