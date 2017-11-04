export const actionTypes = {
    DATA_REQUESTED: 'DATA_REQUESTED',
    DATA_REQUEST_SUCCEEDED: 'DATA_REQUEST_SUCCEEDED',
    DATA_REQUEST_FAILED: 'DATA_REQUEST_FAILED',
    DATA_CLEAN_ERROR: 'DATA_CLEAN_ERROR'
}

/**
 * Retorna un object literal que contiene las acciones disponibles de items para un scope
 * determinado que se pasa como parametro
 * @param {* el scope para el cual se retornar los tipos de accion} scope 
 */
export const itemsActionTypesForScope = scope => ({
    DATA_REQUESTED: `${scope}_${actionTypes.DATA_REQUESTED}`,
    DATA_REQUEST_SUCCEEDED: `${scope}_${actionTypes.DATA_REQUEST_SUCCEEDED}`,
    DATA_REQUEST_FAILED: `${scope}_${actionTypes.DATA_REQUEST_FAILED}`,
    DATA_CLEAN_ERROR: `${scope}_${actionTypes.DATA_CLEAN_ERROR}`
});

/**
 * Retorna un object literal que contiene los action creators de items para un scope
 * determinado que se pasa como parametro
 * @param {* el scope para el cual se retornan los action creators} scope 
 */
export const itemsActionsForScope = scope => {
    const actionTypes = itemsActionTypesForScope(scope);
    return {
        dataRequested: _ => ({
            type: actionTypes.DATA_REQUESTED
        }),
        dataRequestSucceeded: data => ({
            type: actionTypes.DATA_REQUEST_SUCCEEDED,
            data
        }),
        dataRequestFailed: error => ({
            type: actionTypes.DATA_REQUEST_FAILED,
            error
        }),
        dataCleanError: _ => ({
            type: actionTypes.DATA_CLEAN_ERROR
        })
    }
};

/**
 * Retorna un object literal que contiene los action dispatch de un scope determinado.
 * @param {* el scope de los actions creators que se usaran para la creacion de dispatches} scope 
 * @param {* el redux dispatcher} dispatch 
 */
export const itemsDispatchesForScope = (scope, dispatch) => {
    const actionCreators = itemsActionsForScope(scope);
    return {
        dataRequested: _ => dispatch(actionCreators.dataRequested()),
        dataRequestSucceeded: data => dispatch(actionCreators.dataRequestSucceeded(data)),
        dataRequestFailed: error => dispatch(actionCreators.dataRequestFailed(error)),
        dataCleanError: _ => dispatch(actionCreators.dataCleanError()),
    }
}
