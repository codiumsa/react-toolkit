export const actionTypes = {
    LOAD_INDICATOR_START_LOAD: 'LOAD_INDICATOR_START_LOAD',
    LOAD_INDICATOR_STOP_LOAD: 'LOAD_INDICATOR_STOP_LOAD'
}

export const actions = {
    startLoad: () => ({
        type: actionTypes.LOAD_INDICATOR_START_LOAD
    }),
    stopLoad: () => ({
        type: actionTypes.LOAD_INDICATOR_STOP_LOAD
    })
}