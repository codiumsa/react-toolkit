import {combineReducers} from 'redux';
import orderReducerForScope from './order-reducer';
import queryReducerForScope from './query-reducer';
import pagerReducerForScope from './pager-reducer';
import itemsReducerForScope from './items-reducer';

/**
 * Función que retorna un reducer que puede utilizarse con el
 * componente `DataTable`.
 *
 * @param {String} scope
 * @return {Function}
 */
const dataTableReducerForScope = scope => {
  const orderData = orderReducerForScope(scope);
  const queryData = queryReducerForScope(scope);
  const pagerData = pagerReducerForScope(scope);
  const itemsData = itemsReducerForScope(scope);

  return combineReducers({orderData, queryData, pagerData, itemsData});
};

export default dataTableReducerForScope;
