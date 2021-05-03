import React from 'react'
import Slider from 'react-slick'
import CarouselItem from './CarouselItem'
import PropTypes from 'prop-types'
import s from './style.css'

class Carousel extends React.Component {
  render() {
    let settings = {
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      afterChange: this.props.afterChange
    }
    return (
      <div className={s.carousel}>
        <Slider {...settings}>
          {
            this.props.carouselItems.map((element, i) =>
              <div key={i} className='carousel-item-container'>
                <CarouselItem
                  linkTo={element.linkTo}
                  category={element.category}
                  description={element.description}
                  backgroundImage={element.backgroundImage} />
              </div>
            )
          }
        </Slider>
      </div>
    )
  }
}

Carousel.propTypes = {
  carouselItems: PropTypes.array.isRequired,
}

export default Carousel
