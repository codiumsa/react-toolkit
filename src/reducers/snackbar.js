import { actionTypes } from '../actions/snackbar-actions';

const defaultSnackbarState = {
    showing: false,
    message: '',
    messages: []
}

const snackbarReducer = (state = defaultSnackbarState, action) => {
    switch (action.type) {
        case actionTypes.CONCAT_MESSAGE_TO_SNACKBAR:
            return {
                ...state,
                messages: state.messages.concat(action.message)
            }
        case actionTypes.FILTER_MESSAGE_FROM_SNACKBAR:
            const msj = state.messages[0]
            return {
                ...state,
                message: msj,
                messages: state.messages.filter(message => message !== msj)
            }
        case actionTypes.DISPLAY_SNACKBAR_MESSAGE:
            return {
                ...state,
                showing: action.showing,
                // message: action.message
            }
        case actionTypes.CLOSE_SNACKBAR:
            console.log(state.message)
            return {
                ...state,
                showing: action.showing,
                message: ''
            }
        default:
            return state;
    }
}

export default snackbarReducer;