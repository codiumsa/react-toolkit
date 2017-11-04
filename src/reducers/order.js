import { orderActionTypesForScope } from '../../actions/helpers/order-actions';
import { ordering } from '../../utils/constants';

/**
 * Potencialmente, los elementos del orderState lucen de esta forma:
 * {
 *  field: {
 *      direction: asc/desc
 *  }
 * }
 */
const defaultOrderState = {

}


const orderReducerForScope = (scope) => {
    const actionTypes = orderActionTypesForScope(scope);
    return (state = defaultOrderState, action) => {
        switch (action.type) {
            case actionTypes.ORDER_CHANGED:
                //Este reducer hace una transicion circular de ordenamiento para el field.
                //El orden es ASCENDENTE->DESCENTENDE->NO_SORT>ASCENDENTE....
                let newDirection = ordering.directions.ASCENDING;
                if (state[action.field]) {
                    if (state[action.field] === ordering.directions.ASCENDING) {
                        newDirection = ordering.directions.DESCENDING
                    } else {
                        newDirection = null;
                    }
                }
                const newState = {};
                if (newDirection) {
                    newState[action.field] = newDirection;
                }
                return newState;
            case actionTypes.CLEAR_ORDER:
                //Retorna el estado de ordenamiento al estado default
                return { ...defaultOrderState };
            default:
                return state;
        }
    }
}

export default orderReducerForScope;