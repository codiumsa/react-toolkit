import {formActionTypesForScope} from 'src/actions/form';
import {validateObjectLiteral, validateFieldAndBuildState} from 'src/utils/validation';
import {composeReducers} from 'src/reducers';

/**
 * Función que genera un reducer para el manejo de formularios.
 *
 * @param {String} scope - El scope utilizado como prefijo para los actions y actionTypes
 * @param {Object} defaultFormState - El estado por defecto del formulario.
 * @param {Object} validationsSpec - Detalles de validación.
 * @return {Function}
 */
const formReducerForScope = (scope, defaultFormState, validationsSpec) => {
  defaultFormState = {
    validations: {},
    ...defaultFormState
  };
  const actionTypes = formActionTypesForScope(scope);
  return (state = defaultFormState, action) => {
    switch (action.type) {
      case actionTypes.FORM_INPUT_CHANGED:
        const item = {...state.item};
        item[action.field] = action.value;
        return {
          ...state,
          item,
          validations: validateFieldAndBuildState(item, state.validations, action.field, validationsSpec[action.field])
        };
      case actionTypes.FORM_VALIDATE_FIELD:
        return {
          ...state,
          validations: validateFieldAndBuildState(
            state.item,
            state.validations,
            action.field,
            validationsSpec[action.field]
          )
        };
      case actionTypes.FORM_VALIDATE_ALL:
        return {
          ...state,
          validations: validateObjectLiteral(state.item, validationsSpec)
        };
      case actionTypes.FORM_CLEAN_STATE:
        return {
          ...defaultFormState
        };
      case actionTypes.FORM_SUBMIT_FAILED:
        return {
          ...state,
          loading: false
        };
      case actionTypes.FORM_SUBMIT_SUCCEEDED:
        return {
          ...state,
          loading: false
        };
      case actionTypes.FORM_SET_LOADING:
        return {
          ...state,
          loading: action.loading
        };
      case actionTypes.FORM_CANCEL:
        return {
          ...defaultFormState
        };
      case actionTypes.FORM_SETUP:
        return {
          ...state,
          loading: true
        };
      case actionTypes.FORM_SETUP_SUCCEEDED:
        return {
          ...state,
          loading: false
        };
      case actionTypes.FORM_SETUP_FAILED:
        return {
          ...state,
          loading: false
        };
      default:
        return state;
    }
  };
};

/**
 * Función que retorna un reducer para el scope dado como parámetro. El
 * reducer generado es útil para ABMs paramétricos.
 *
 * @param {String} scope - El scope al cual está acotado el reducer.
 * @param {Object} actionTypes - Objeto que contiene los tipos de acciones de redux que el reducer procesa.
 * @param {Object} defaultFormState - El estado inicial para el reducer.
 * @param {Object} validationSpec - Objeto que contiene definiciones de validación para los campos del formulario.
 * @return {Function}
 */
const simpleFormReducerForScope = (scope, actionTypes, defaultFormState, validationSpec) => {
  const genericFormReducer = formReducerForScope(scope, defaultFormState, validationSpec);

  const formReducer = (state = defaultFormState, action) => {
    switch (action.type) {
      case actionTypes.FORM_SETUP_SUCCEEDED:
        const {itemEditing} = action.data;
        return {
          ...state,
          item: itemEditing || state.item
        };
      default:
        return state;
    }
  };

  return composeReducers(formReducer, genericFormReducer);
};

export {simpleFormReducerForScope};

export default formReducerForScope;
