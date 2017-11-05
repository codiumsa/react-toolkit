import {orderActionsForScope, orderActionTypesForScope, orderDispatchesForScope} from './order-actions';
import {queryActionsForScope, queryActionTypesForScope, queryDispatchesForScope} from './query-actions';
import {pagerActionsForScope, pagerActionTypesForScope, pagerDispatchesForScope} from './pager-actions';
import {itemsActionsForScope, itemsActionTypesForScope, itemsDispatchesForScope} from './items-actions';

/**
 * Retorna un object con los tipos de acciones disponibles para un scope determinado, combinando
 * los actions de orden, query, paginacion e items
 * @param {String} scope - el scope para el cual se retornaran los tipos de acciones} scope
 * @return {Object}
 */
export const dataTableActionTypesForScope = scope => ({
  ...orderActionTypesForScope(scope),
  ...queryActionTypesForScope(scope),
  ...pagerActionTypesForScope(scope),
  ...itemsActionTypesForScope(scope)
});

/**
 * Retorna los action creators para un scope determinado, combinando los action creators de
 * ordenamient, query, paginacion e items.
 * @param {String} scope - El scope para el cual se retornaran los action creators} scope
 * @return {Object}
 */
export const dataTableActionsForScope = scope => ({
  ...orderActionsForScope(scope),
  ...queryActionsForScope(scope),
  ...pagerActionsForScope(scope),
  ...itemsActionsForScope(scope)
});

/**
 * Retorna un object literal con los dispatches combinados de ordenamiento, query, paginacion
 * e items utilizados para el datatable, aplicados a un scope
 * @param {String} scope - El scope para el cual se obtendran los dispatches
 * @param {Function} dispatch - El dispatch de redux
 * @return {Object}
 */
export const dataTableDispatchesForScope = (scope, dispatch) => ({
  ...orderDispatchesForScope(scope, dispatch),
  ...queryDispatchesForScope(scope, dispatch),
  ...pagerDispatchesForScope(scope, dispatch),
  ...itemsDispatchesForScope(scope, dispatch)
});
