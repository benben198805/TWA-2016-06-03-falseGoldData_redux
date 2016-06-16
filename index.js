import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Panel from './components/Panel'
import panel from './reducers'

const store = createStore(panel)
const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(<Panel/>,rootEl)
}

render()
store.subscribe(render)
