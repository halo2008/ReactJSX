var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

var App = React.createClass({
  getInitialState: function () {
    return {
      contacts: [
        {
          id: 1,
          firstName: 'Jan',
          lastName: 'Nowak',
          email: 'jan.nowak@example.com',
        },
        {
          id: 2,
          firstName: 'Adam',
          lastName: 'Kowalski',
          email: 'adam.kowalski@example.com',
        },
        {
          id: 3,
          firstName: 'Zbigniew',
          lastName: 'Koziol',
          email: 'zbigniew.koziol@example.com',
        }
      ],
    };
  },

  addContact: function (firstName, lastName, email) {
    const oldContacts = this.state.contacts;
    const newContacts = oldContacts.concat({id: oldContacts.length+1, firstName: firstName, lastName: lastName, email: email});
    this.setState({contacts: newContacts })
  },

	render: function(){
		return (
      <div className="app">
        <ContactForm contact={contactForm} addContact={this.addContact}/>
        <Contacts items={this.state.contacts}/>
      </div>
		)

	}
});
