import ReactDOM from 'react-dom'
import React from 'react'
import App from './templates/App'
import data from './data/carousel'



window.initialize = function(person) { 
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App data={data[person]} />, document.querySelector('#app'))
  })
}