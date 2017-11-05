export const actionTypes = {
  QUERY_CHANGED: 'QUERY_CHANGED',
  QUERY_REQUESTED: 'QUERY_REQUESTED'
};

/**
 * Retorna un object literal que contiene las acciones disponibles a busquedas para un scope
 * determinado que se pasa como parametro.
 *
 * @param {String} scope - El scope para el cual se retornar los tipos de accion.
 * @return {Object}.
 */
export const queryActionTypesForScope = scope => ({
  QUERY_CHANGED: `${scope}_${actionTypes.QUERY_CHANGED}`,
  QUERY_REQUESTED: `${scope}_${actionTypes.QUERY_REQUESTED}`
});

/**
 * Retorna un object literal que contiene los action creators de query para un scope
 * determinado que se pasa como parametro.
 *
 * @param {String} scope - El scope para el cual se retornan los action creators.
 * @return {Object}.
 */
export const queryActionsForScope = scope => {
  const actionTypes = queryActionTypesForScope(scope);
  return {
    queryChanged: value => ({
      type: actionTypes.QUERY_CHANGED,
      value
    }),
    queryRequested: _ => ({
      type: actionTypes.QUERY_REQUESTED
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
export const queryDispatchesForScope = (scope, dispatch) => {
  const actionCreators = queryActionsForScope(scope);
  return {
    queryChanged: value => dispatch(actionCreators.queryChanged(value)),
    queryRequested: _ => dispatch(actionCreators.queryRequested())
  };
};
