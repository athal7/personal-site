import React, {Component} from 'react'
import PropTypes from 'prop-types'
import s from './style.css'

export default class CarouselItem extends Component {
  className() {
    return `carousel-item ${s.item} ${this.props.category}`
  }

  style() {
    return {backgroundImage: `url(/images/${this.props.backgroundImage})`}
  }

  render() {
    if (this.props.linkTo) {
      return (
        <a
          target="_blank"
          href={this.props.linkTo}
          className={this.className()}
          data-description={this.props.description}
          style={this.style()}
        >
        </a>
      )
    } else {
      return (
        <div
          className={this.className()}
          data-description={this.props.description}
          style={this.style()}
        >
        </div>
      )
    }
  }
}

CarouselItem.propTypes = {
  linkTo: PropTypes.string,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired
}
