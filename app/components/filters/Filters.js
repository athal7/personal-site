import React, {Component} from 'react'
import Filter from './Filter'
import s from './style.css'

export default class Filters extends Component {
  render() {
    return (
      <div className={s.filters}>
        {
          this.props.filters.map((filter, i) =>
            <Filter key={i} icon={filter.icon} category={filter.category} onClick={this.props.onClick} current={filter.category == this.props.currentFilter} />
          )
        }
      </div>
    )
  }
}
