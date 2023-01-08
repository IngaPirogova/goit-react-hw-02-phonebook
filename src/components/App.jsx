import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };


  addContact = ({ name, number}) => {
    const contact = {
      name,
      number,
      id: nanoid(), 
    };
    this.setState(prevState => ({      
      contacts: [contact, ...prevState.contacts],
       }))
    }
  

    deleteContact = contactId => {
      this.setState(prevState => ({
       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      }));
    };    
    
   render() {
   
    return (     
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>

           {/* <Filter  /> */}
   <ContactList
   contacts={this.state}
   deleteContact={this.deleteContact}
   
   /> 
      </div>
    
    );
  }
}










































