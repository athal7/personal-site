import React, {Component} from 'react'
import Filter from '../components/Filter'

export default class Filters extends Component {
  render() {
    return (
      <div className='carousel-filters'>
        {
          this.props.filters.map((filter, i) =>
            <Filter key={i} icon={filter.icon} category={filter.category} onClick={this.props.onClick} current={filter.category == this.props.currentFilter} />
          )
        }
      </div>
    )
  }
}
