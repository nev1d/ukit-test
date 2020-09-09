import {ADD_TO_LIST, EDIT_BOOK, EDIT_INFO, REMOVE_FROM_LIST} from "./types";

export default function addToList (payload) {
    return {
        type: ADD_TO_LIST,
        payload: payload
    }
}

export function removeFromList (payload) {
    return {
        type: REMOVE_FROM_LIST,
        payload: payload
    }
}

export function editInfo(payload) {
    return {
        type: EDIT_INFO,
        payload: payload
    }
}

export function editBook(payload) {
    return {
        type: EDIT_BOOK,
        payload: payload
    }
}