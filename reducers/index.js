import * as types from '../actions/action-types';
import { combineReducers } from 'redux';
import _ from 'lodash';


const initState = {
  status: "edit"
}

const initItems = {
  items: []
}


function formReducer(state=initState,action){
  switch(action.type){
    case:types
  }
}

export default function panel(state = 11, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
