import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Panel from './components/Panel'
import reducer from './reducers'

const store = createStore(reducer)
const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(<Panel/>,rootEl)
}

render()
store.subscribe(render)
