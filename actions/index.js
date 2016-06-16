export const SHOW_EDITOR = 'SHOW_EDITOR'
export const SHOW_PREVIEW = 'SHOW_PREVIEW'
export const REMOVE_ELEMENT = 'REMOVE_ELEMENT'
export const ADD_ELEMENT = 'ADD_ELEMENT'

export function showEditorAction() {
    return {
        type: SHOW_EDITOR
    }
}

export function showPreviewAction() {
    return {
        type: SHOW_PREVIEW
    }
}


export function removeElementAction() {
    return {
        type: REMOVE_ELEMENT
    }
}

export function addElementAction() {
    return {
        type: ADD_ELEMENT
    }
}