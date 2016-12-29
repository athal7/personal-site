import React, {Component} from 'react'

export default class CarouselItem extends Component {
  className() {
    return `carousel-item ${this.props.category}`
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
  linkTo: React.PropTypes.string,
  category: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  backgroundImage: React.PropTypes.string.isRequired
}
