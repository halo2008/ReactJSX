class ContactForm extends React.Component{
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event) {
		event.preventDefault()
		const name = event.target.elements.fsName.value
		const lastName = event.target.elements.lsName.value
		const email = event.target.elements.mail.value
		console.log(name)
		this.props.addContact(name, lastName, email)
	}


	render() {

		return (

			<form onSubmit={this.handleSubmit} className={'contactForm'}>
				<input
					name = 'fsName'
					type='text'
					placeholder='imię'
					value={this.props.contact.fristName}

					/>

				<input
					name= 'lsName'
					type='text'
					placeholder='Nazwisko'
					value={this.props.contact.lastName}

					/>

				<input
					name ='mail'
					type='email'
					placeholder='Email'
					value={this.props.contact.email}
					/>

				<button type='submit'>Dodaj Kontakt</button>
			</form>


		)
	}
}
