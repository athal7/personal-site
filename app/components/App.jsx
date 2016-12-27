import React, {Component} from 'react'
import Header from '../components/Header'
import Filters from '../components/Filters'
import Carousel from '../components/Carousel'
import Contacts from '../components/Contacts'
import {CAROUSEL_ITEMS, FILTERS, CONTACTS} from '../data/carousel'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {filter: null, carouselItems: CAROUSEL_ITEMS}
  }

  render() {
    return (
      <div>
        <Header name="Andrew Thal" />
        <Filters filters={FILTERS} onClick={this.handleFilterClick.bind(this)} currentFilter={this.state.filter} />
        <Carousel carouselItems={this.state.carouselItems} />
        <Contacts contacts={CONTACTS} />
      </div>
    )
  }

  handleFilterClick(event) {
    let filter = event.target.getAttribute("data-filter")
    if (this.state.filter == filter) {
      this.setState({filter: null, carouselItems: CAROUSEL_ITEMS})
    } else {
      this.setState({filter: filter, carouselItems: CAROUSEL_ITEMS.filter((i) => i.category == filter)})
    }
  }
}
