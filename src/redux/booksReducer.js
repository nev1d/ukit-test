import {ADD_TO_LIST, EDIT_BOOK, EDIT_INFO, REMOVE_FROM_LIST} from "./types";

let initialState

if (localStorage.getItem("books")) {
    initialState = JSON.parse(localStorage.getItem("books"))
} else {
    initialState = []
}

export default function booksReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_LIST:
            if (state.filter(e => !(e.name === action.payload.name && e.author === action.payload.author)).length !== state.length){
                alert("Данная книга уже есть в списке. Отредактируйте ее, если хотите изменить.")
                return state
            } else {
                return state.concat(action.payload);
            }
        case REMOVE_FROM_LIST:
            return state.filter(e => !(e.name === action.payload.name && e.author === action.payload.author))
        case EDIT_INFO:
            return state.map(e => {
                if ((e.name === action.payload.name && e.author === action.payload.author)) {
                    return {
                        ...e,
                        edit: true
                    }
                }
                return {
                    ...e,
                    edit: false
                }
            });
        case EDIT_BOOK:
            return state.map(e => {
                if ((e.edit === true)) {
                    return {
                        ...e,
                        name: action.payload.name,
                        author: action.payload.author,
                        year: action.payload.year,
                        pages: action.payload.pages,
                        edit: false
                    }
                }
                return e
            });
        default:
            return state
    }
}