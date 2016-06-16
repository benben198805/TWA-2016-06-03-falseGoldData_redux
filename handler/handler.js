import store from "../store/";
import {showEditorAction, showPreviewAction, addElementAction, removeElementAction} from "../action/index";


export function showEditor(params) {
    store.dispatch(showEditorAction());
}

export function showPreview(params) {
    store.dispatch(showPreviewAction());
}

export function addElement(params) {
    store.dispatch(addElementAction());
}

export function removeElement(params) {
    store.dispatch(removeElementAction());
}