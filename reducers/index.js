import * as types from '../actions/action-types';
import { combineReducers } from 'redux';
import _ from 'lodash';


const initState = {
  status: "edit"
}

const initItems = {
  items: []
}


function formReducer(state = initState, action) {
  switch (action.type) {
    case types.showEditorAction:
      return _.assign({}, state, { status: "edit" });
    case types.showPreviewAction:
      return _.assign({}, state, { status: "preview" });
    default:
      return state
  }
}


function itemsreducer(state = initItems, action) {
  switch (action.type) {
    case types.addElement:

      let newItems = _.concat(state.items, action.item);

      return _.assign({}, state, { items: newItems });
    case types.removeElement:
      let otherItems = _.filter(state.items, (x, index) => { return index != action.index });
      return _.assign({}, state, { items: otherItems });
    default:
      return state;

  }
}


var reducer = combineReducers({
  formReducer: formReducer,
  itemsreducer: itemsreducer
});

export default reducer;