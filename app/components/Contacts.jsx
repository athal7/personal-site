import React, {Component} from 'react'
import Contact from '../components/Contact'

export default class Contacts extends Component {
  render() {
    return(
      <div className='contact'>
        {
          this.props.contacts.map((contact, i) =>
            <Contact key={i} icon={contact.icon} linkTo={contact.linkTo} />
          )
        }
      </div>
    )
  }
}
