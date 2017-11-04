import { itemsActionTypesForScope } from '../../actions/helpers/items-actions';

/**
 * Estado default de items.
 */
const defaultItemsState = {
    data: [],
    loading: true,
    error: null,
    showError: false
}


const itemsReducerForScope = (scope) => {
    const actionTypes = itemsActionTypesForScope(scope);
    return (state = defaultItemsState, action) => {
        switch (action.type) {
            case actionTypes.DATA_REQUESTED:
                return {
                    ...state,
                    data: [],
                    loading: true,
                    error: null,
                    showError: false
                };
            case actionTypes.DATA_REQUEST_SUCCEEDED:
                return {
                    ...state,
                    loading: false,
                    data: action.data
                };
            case actionTypes.DATA_REQUEST_FAILED:
                return {
                    ...state,
                    loading: false,
                    data: [],
                    error: action.error,
                    showError: true
                }
            case actionTypes.DATA_CLEAN_ERROR:
                return {
                    ...state,
                    showError: false,
                    error: null
                }
            default:
                return state;
        }
    }
}

export default itemsReducerForScope;