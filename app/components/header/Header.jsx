import React, {Component} from 'react'
import s from './style.css'

export default class Header extends Component {
  render() {
    return(
      <div className={s.header}>
        <div className={s.jumbotron}>
          <h2>{this.props.name}</h2>
          <p className={s.lead}>{this.props.lead}</p>
        </div>
      </div>
    )
  }
}
