export const actionTypes = {
    CONCAT_MESSAGE_TO_SNACKBAR:'CONCAT_MESSAGE_TO_SNACKBAR',
    FILTER_MESSAGE_FROM_SNACKBAR:'FILTER_MESSAGE_FROM_SNACKBAR',
    DISPLAY_SNACKBAR_MESSAGE:'DISPLAY_SNACKBAR_MESSAGE',
    CLOSE_SNACKBAR:'CLOSE_SNACKBAR',
}

export const actions = {
    concatMessageToSnackbar: message => ({
        type: actionTypes.CONCAT_MESSAGE_TO_SNACKBAR,
        message:message
    }),
    filterMessageFromSnackbar: _ => ({
        type: actionTypes.FILTER_MESSAGE_FROM_SNACKBAR,
    }),
    displaySnackbarMessage: _ => ({
        type: actionTypes.DISPLAY_SNACKBAR_MESSAGE,
        showing:true,
    }),
    closeSnackbar: _ => ({
        type:actionTypes.CLOSE_SNACKBAR,
        showing:false
    }),
}