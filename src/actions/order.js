export const actionTypes = {
  ORDER_CHANGED: 'ORDER_CHANGED',
  CLEAR_ORDER: 'CLEAR_ORDER'
};

/**
 * Retorna un object literal que contiene los action creators de ordenamiento para un scope
 * determinado que se pasa como parametro.
 *
 * @param {String} scope - El scope para el cual se retornan los action creators.
 * @return {Object}.
 */
export const orderActionsForScope = scope => {
  const actionTypes = orderActionTypesForScope(scope);
  return {
    orderChanged: field => ({
      type: actionTypes.ORDER_CHANGED,
      field
    }),
    clearOrder: _ => ({
      type: actionTypes.CLEAR_ORDER
    })
  };
};

/**
 * Retorna un object literal que contiene las acciones disponibles de ordenamiento para un scope
 * determinado que se pasa como parametro.
 *
 * @param {String} scope - El scope para el cual se retornar los tipos de accion.
 * @return {Object}.
 */
export const orderActionTypesForScope = scope => ({
  ORDER_CHANGED: `${scope}_${actionTypes.ORDER_CHANGED}`,
  CLEAR_ORDER: `${scope}_${actionTypes.CLEAR_ORDER}`
});

/**
 * Retorna un object literal que contiene los action dispatch de un scope determinado.
 *
 * @param {String} scope - El scope de los actions creators que se usaran para la creacion de dispatches.
 * @param {Function} dispatch - El redux dispatcher.
 * @return {Object}.
 */
export const orderDispatchesForScope = (scope, dispatch) => {
  const actionCreators = orderActionsForScope(scope);
  return {
    clearOrder: _ => dispatch(actionCreators.clearOrder()),
    orderChanged: field => dispatch(actionCreators.orderChanged(field))
  };
};
