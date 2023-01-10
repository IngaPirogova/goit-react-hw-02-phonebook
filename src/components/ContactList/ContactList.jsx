import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { nanoid } from 'nanoid';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactItem
            key={nanoid()}
            name={name}
            number={number}
            id={id}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};


//код без создания компонента ContactItem:
// export const ContactList = ({ contacts, deleteContact }) => {
//   return (
//     <ul className={css.contactList}>
//       {contacts.map(({ name, number, id }) => {
//         return (
//           <li key={id} className={css.contactItem}>
//             <p>
//               {name}: {number}
//             </p>
//             <button
//               type="button"
//               className={css.bthListItem}
//               onClick={() => deleteContact(id)}
//             >
//               Delete
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// ContactList.prototype = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };
