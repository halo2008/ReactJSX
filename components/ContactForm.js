var ContactForm = React.createClass({
	propsTypes: {
		contact: React.PropTypes.object.isRequired
	},
	render: function() {
		return (

			<form className={'contactForm'}>
				<input type='text' placeholder='imię' value={this.props.contact.fristName}/>

				<input type='text' placeholder='Nazwisko' value={this.props.contact.lastName}/>

				<input type='email' placeholder='Email' value={this.props.contact.email}/>

				<button type='submit'>Dodaj Kontakt</button>
			</form>


		)
	},
})