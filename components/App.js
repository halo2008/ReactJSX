var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

var App = React.createClass({
	render: function(){
		return (
      <div className="app">
        <ContactForm contact={contactForm}/>
        <Contacts items={contacts}/>
      </div>

		)
	}
});
