import R from 'ramda';

/**
 * Función que permite extender un reducer.
 *
 * @param {Function} reducer - Reducer que contiene lógica para extender el reducer base.
 * @param {Function} baseReducer - Reducer que se desea extender.
 * @return {Function}
 */
const composeReducers = (reducer, baseReducer) => {
  return (state, action) => R.compose(R.curry(R.flip(reducer))(action), baseReducer)(state, action);
};

export {composeReducers};
