import React, {Component} from 'react'
import Header from '../components/Header'
import Filters from '../components/Filters'
import Carousel from '../components/Carousel'
import Contacts from '../components/Contacts'
import {CAROUSEL_ITEMS, FILTERS, CONTACTS} from '../data/carousel'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header name="Andrew Thal" />
        <Filters filters={FILTERS} />
        <Carousel carouselItems={CAROUSEL_ITEMS} />
        <Contacts contacts={CONTACTS} />
      </div>
    )
  }
}
