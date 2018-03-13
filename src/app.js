import React from 'react'
import ReactDOM from 'react-dom'

//normalize css for all browsers
import 'normalize.css/normalize.css'
//styles
import './styles/styles.scss'
//components
import IndecisionApp from './components/IndecisionApp'
// end components


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
  