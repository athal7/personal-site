import ReactDOM from 'react-dom'
import React from 'react'
import ReactGA from 'react-ga'
import {getCLS, getFID, getLCP} from 'web-vitals'
import App from './templates/App'
import data from './data/carousel'
import './styles/01normalize.css';


const debug = !!window.location.host.match('localhost')

const sendToGoogleAnalytics = ({name, delta, id}) => {
  ReactGA.event({
    category: 'Web Vitals',
    action: name,
    label: id,
    value: Math.round(name === 'CLS' ? delta * 1000 : delta),
    nonInteraction: true,
  })
}

window.initialize = function(person, name, analyticsId) { 
  ReactGA.initialize(analyticsId, {debug})
  ReactGA.pageview(window.location.pathname + window.location.search)
  document.addEventListener('DOMContentLoaded', () => {
    getCLS(sendToGoogleAnalytics)
    getFID(sendToGoogleAnalytics)
    getLCP(sendToGoogleAnalytics)
    ReactDOM.render(<App data={data[person]} name={name} />, document.querySelector('#app'))  
  })
}