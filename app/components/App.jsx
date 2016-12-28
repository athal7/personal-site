import React, {Component} from 'react'
import Header from '../components/Header'
import Filters from '../components/Filters'
import Carousel from '../components/Carousel'
import Contacts from '../components/Contacts'
import {CAROUSEL_ITEMS, FILTERS, CONTACTS} from '../data/carousel'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: null,
      carouselItems: CAROUSEL_ITEMS,
      lead: CAROUSEL_ITEMS[0].description
    }
  }

  render() {
    return (
      <div>
        <Header
          name="Andrew Thal"
          lead={this.state.lead} />

        <Filters
          filters={FILTERS}
          onClick={this.handleFilterClick.bind(this)}
          currentFilter={this.state.filter} />

        <Carousel
          carouselItems={this.state.carouselItems}
          afterChange={this.carouselChange.bind(this)} />

        <Contacts
          contacts={CONTACTS} />
      </div>
    )
  }

  handleFilterClick(event) {
    let filter = event.target.getAttribute("data-filter")
    let carouselItems = CAROUSEL_ITEMS
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
