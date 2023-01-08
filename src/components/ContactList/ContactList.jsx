import css from './ContactList.module.css';


export const ContactList = ({contacts, deleteContact}) => {
    return (
        <ul className={css.ContactList}>
{contacts.map (({ name, number, id }) => {
    return (
        <li key ={id}>
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
    )
})}
        </ul>
    )
}

        