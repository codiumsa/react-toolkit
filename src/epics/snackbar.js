import { combineEpics } from 'redux-observable';
import { actionTypes, actions } from '../actions/snackbar-actions';
import 'rxjs';
import 'rxjs/add/operator/debounceTime';
import { Observable } from 'rxjs';

const displaySnackbarMessageEpic = (action$, store) => (
    action$.ofType(actionTypes.CONCAT_MESSAGE_TO_SNACKBAR)
        // .debounceTime(5e3)
        .switchMap( action => {
            return Observable.of(actions.displaySnackbarMessage());
        })
)

const filterMessageFromSnackbar = (action$, store) => (
    action$.ofType(actionTypes.DISPLAY_SNACKBAR_MESSAGE)
        .switchMap(action => {
            console.log('messages state despues del display',store.getState().snackbar.messages)
            return Observable.of(actions.filterMessageFromSnackbar());
        })
)

const closeSnackbarEpic = (action$, store) => (
    action$.ofType(actionTypes.FILTER_MESSAGE_FROM_SNACKBAR)
        .debounceTime(3e3)
        .switchMap(action => {
            console.log(store.getState().snackbar.messages.length !== 0)
            if(store.getState().snackbar.messages.length !== 0){
                return Observable.concat(
                    Observable.of(actions.closeSnackbar()),
                    Observable.of(actions.displaySnackbarMessage())
                        .delay(200)
                )
            }
            return Observable.of(actions.closeSnackbar())
        })
)

export default combineEpics(
    displaySnackbarMessageEpic, 
    filterMessageFromSnackbar, 
    closeSnackbarEpic,
)