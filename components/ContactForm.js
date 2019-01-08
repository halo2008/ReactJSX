class ContactForm extends React.Component{
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event) {
		event.preventDefault()
		const firstName = event.target.firstName.value
		const lastName = event.target.lastName.value
		const email = event.target.email.value
		console.log(name)
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
					value={this.props.contact.fristName}
					onChange={this.handleSubmit}
					/>

				<input
					name= 'lastName'
					type='text'
					placeholder='Nazwisko'
					value={this.props.contact.lastName}
					onChange={this.handleSubmit}
					/>

				<input
					name ='email'
					type='email'
					placeholder='Email'
					value={this.props.contact.email}
					onChange={this.handleSubmit}
					/>

				<button type='submit'>Dodaj Kontakt</button>
			</form>
		)
	}
}
