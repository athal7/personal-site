import React, {Component} from 'react'
import Header from '../components/header/Header'
import Filters from '../components/filters/Filters'
import Carousel from '../components/carousel/Carousel'
import Contacts from '../components/contacts/Contacts'

import s from './style.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: null,
      carouselItems: props.data.carouselItems,
      lead: props.data.carouselItems[0].description
    }
  }

  render() {
    return (
      <div className={s.app}>
        <Header
          name={this.props.data.name}
          lead={this.state.lead} />

        <Filters
          filters={this.props.data.filters}
          onClick={this.handleFilterClick.bind(this)}
          currentFilter={this.state.filter} />

        <Carousel
          carouselItems={this.state.carouselItems}
          afterChange={this.carouselChange.bind(this)} />

        <Contacts
          contacts={this.props.data.contacts} />
      </div>
    )
  }

  handleFilterClick(event) {
    let filter = event.target.getAttribute("data-filter")
    let carouselItems = this.props.data.carouselItems
    if (filter && this.state.filter == filter) { filter = null }
    if (filter) { carouselItems = carouselItems.filter((i) => i.category == filter) }
    this.setState({
      filter: filter,
      carouselItems: carouselItems,
      lead: carouselItems[0].description
    })
  }

  carouselChange(index) {
    this.setState({lead: document.querySelector(`.slick-slide[data-index="${index}"] .carousel-item`).getAttribute('data-description')})
  }
}
