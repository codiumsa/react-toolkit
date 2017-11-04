import { actionTypes } from '../../actions/helpers/load-indicator-actions';

const defaultLoadIndicatorState = {
    loading: false
}


const loadIndicatorReducer = (state = defaultLoadIndicatorState, action) => {

    switch (action.type) {
        case actionTypes.LOAD_INDICATOR_START_LOAD:
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOAD_INDICATOR_STOP_LOAD:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default loadIndicatorReducer;