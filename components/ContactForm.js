class ContactForm extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
      firstName: '',
      lastName: '',
			email: ''
    };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(event){
		event.preventDefault();
		this.setState({ [event.target.name]: event.target.value })
	}

	handleSubmit(event) {
		event.preventDefault();
		const firstName = event.target.firstName.value
		const lastName = event.target.lastName.value
		const email = event.target.email.value
			if(firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !=='' ){
			this.props.addContact(firstName, lastName, email)
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className={'contactForm'}>
				<input
					name = 'firstName'
					type='text'
					placeholder='imię'
					value={this.props.contact.fristName, this.state.firstName.value}
					onChange={this.handleChange}
					/>

				<input
					name= 'lastName'
					type='text'
					placeholder='Nazwisko'
					value={this.props.contact.lastName, this.state.lastName.value}
					onChange={this.handleChange}
					/>

				<input
					name ='email'
					type='email'
					placeholder='Email'
					value={this.props.contact.email, this.state.email.value}
					onChange={this.handleChange}
					/>

				<button type='submit'>Dodaj Kontakt</button>
			</form>
		)
	}
}
