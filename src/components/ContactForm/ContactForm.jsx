import React from 'react';

export class ContactForm extends React.Component {  
  state = {
    name: '',
    number: '',
  };

  handleInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  
  render() {
    return (
      <form onSubmit={this.formSubmitHandler}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInput}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInput}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}



























// handleSubmit = event => {
//     event.preventDefault();
// console.log(this.state);
// <ContactForm onSubmit={this.addContact} => получение данных в App
//     this.props.onSubmit(this.state);
//     this.reset();
//   };
