import {queryActionTypesForScope} from 'src/actions/query';
import {query} from 'src/utils/constants';

/**
 * Potencialmente, los elementos del queryState lucen de esta forma:
 *
 * ```
 * {
 *  value: 'hola',
 *  history: ['chau', 'hola2']
 * }```
 */
const defaultQueryState = {
  generalFilterInput: '',
  generalFilter: '',
  history: []
};

/**
 * Retorna un reducer para el componente de filtrado general utilizado por el `DataTable`.
 *
 * @param {String} scope
 * @return {Function}
 */
const queryReducerForScope = scope => {
  const actionTypes = queryActionTypesForScope(scope);
  return (state = defaultQueryState, action) => {
    switch (action.type) {
      case actionTypes.QUERY_CHANGED:
        return {
          ...state,
          generalFilterInput: action.value
        };
      case actionTypes.QUERY_REQUESTED:
        const history =
          state.generalFilterInput !== '' ? [state.generalFilterInput, ...state.history] : [...state.history];
        if (history.length > query.HISTORY_SIZE && state.generalFilterInput !== '') {
          history.splice(-1, 1);
        }
        return {
          ...state,
          history,
          generalFilter: state.generalFilterInput
        };
      default:
        return state;
    }
  };
};

export default queryReducerForScope;
