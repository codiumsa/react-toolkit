import {formActionTypesForScope} from 'src/actions/form';
import {validateObjectLiteral, validateFieldAndBuildState} from 'src/utils/validation';

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
          ...state,
          item: defaultFormState.item,
          loading: false
        };
      case actionTypes.FORM_SUBMIT:
        return {
          ...state,
          loading: true
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

export default formReducerForScope;
