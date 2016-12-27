import React, {Component} from 'react'

export default class Header extends Component {
  render() {
    return(
      <div className='header'>
        <div className='jumbotron'>
          <h2>{this.props.name}</h2>
          <p className='lead'></p>
        </div>
      </div>
    )
  }
}
