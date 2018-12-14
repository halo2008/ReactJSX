var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      /*<div className={'contactItem'}>
        <img className={'contactItem'} src={'http://icons.veryicon.com/png/System/Qetto%202/contacts.png'}>
        <p className={'contactLabel'}>
          Imię: {this.props.item.fritsName}
        </p>
        <p className={'contactLabel'}>
          Nazwisko: {this.props.item.lastName}
        </p>
        <a className={'contactEmail' href:{'mailto:' + this.props.item.email}>
          {this.props.item.email}
        </a>
      </div>   */
      <div className={'contactItem'}>
    <img className={'contactImage'} src={'link-do-obrazka.png'}/>
    <p className={'contactLabel'}>
        Imię: {this.props.contact.firstName}
    </p>
    <a href={'mailto:' + this.props.item.email}>
        {this.props.item.email}
    </a>
</div>   
    )
  },
});
