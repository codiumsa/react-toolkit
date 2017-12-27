import {actionTypes} from 'src/actions/load-indicator';

const defaultLoadIndicatorState = {
  loading: false
};

/**
 * Reducer para el indicador de loading que se despliega en el `AppBar`.
 *
 * @param {Object} state
 * @param {Object} action
 * @return {Function}
 */
const loadIndicatorReducer = (state = defaultLoadIndicatorState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_INDICATOR_START_LOAD:
      return {
        ...state,
        loading: true
      };
    case actionTypes.LOAD_INDICATOR_STOP_LOAD:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default loadIndicatorReducer;
