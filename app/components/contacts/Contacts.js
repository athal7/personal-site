import React, {Component} from 'react'
import Contact from './Contact'
import s from './style.css'

export default class Contacts extends Component {
  render() {
    return(
      <div className={s.contacts}>
        {
          this.props.contacts.map((contact, i) =>
            <Contact key={i} icon={contact.icon} linkTo={contact.linkTo} />
          )
        }
      </div>
    )
  }
}
