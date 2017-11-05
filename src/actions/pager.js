export const actionTypes = {
  PAGE_CHANGED: 'PAGE_CHANGED',
  RESET_PAGING: 'RESET_PAGING',
  RESET_COUNT: 'RESET_COUNT',
  CHANGE_ITEMS_COUNT_PER_PAGE: 'CHANGE_ITEMS_COUNT_PER_PAGE'
};

/**
 * Retorna un object literal que contiene las acciones disponibles de paginacion para un scope
 * determinado que se pasa como parametro.
 *
 * @param {String} scope - El scope para el cual se retornar los tipos de accion.
 * @return {Object}.
 */
export const pagerActionTypesForScope = scope => ({
  PAGE_CHANGED: `${scope}_${actionTypes.PAGE_CHANGED}`,
  RESET_PAGING: `${scope}_${actionTypes.RESET_PAGING}`,
  RESET_COUNT: `${scope}_${actionTypes.RESET_COUNT}`,
  CHANGE_ITEMS_COUNT_PER_PAGE: `${scope}_${actionTypes.CHANGE_ITEMS_COUNT_PER_PAGE}`
});

/**
 * Retorna un object literal que contiene los action creators de paginacion para un scope
 * determinado que se pasa como parametro.
 *
 * @param {String} scope - El scope para el cual se retornan los action creators.
 * @return {Object}.
 */
export const pagerActionsForScope = scope => {
  const actionTypes = pagerActionTypesForScope(scope);
  return {
    pageChanged: page => ({
      type: actionTypes.PAGE_CHANGED,
      page
    }),
    resetPaging: _ => ({
      type: actionTypes.RESET_PAGING
    }),
    resetCount: itemsCount => ({
      type: actionTypes.RESET_COUNT,
      itemsCount
    }),
    changeItemsCountPerPage: itemsCountPerPage => ({
      type: actionTypes.CHANGE_ITEMS_COUNT_PER_PAGE,
      itemsCountPerPage
    })
  };
};

/**
 * Retorna un object literal que contiene los action dispatch de un scope determinado.
 *
 * @param {String} scope - El scope de los actions creators que se usaran para la creacion de dispatches.
 * @param {Function} dispatch - El redux dispatcher.
 * @return {Object}.
 */
export const pagerDispatchesForScope = (scope, dispatch) => {
  const actionCreators = pagerActionsForScope(scope);
  return {
    pageChanged: page => dispatch(actionCreators.pageChanged(page)),
    resetPaging: _ => dispatch(actionCreators.resetPaging()),
    resetCount: itemsCount => dispatch(actionCreators.resetCount(itemsCount)),
    changeItemsCountPerPage: itemsCountPerPage => dispatch(actionCreators.changeItemsCountPerPage(itemsCountPerPage))
  };
};
