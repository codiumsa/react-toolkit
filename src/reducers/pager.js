import {pagerActionTypesForScope} from 'src/actions/pager';
import {paging} from 'src/utils/constants';

/**
 * Estado default de paginacion.
 */
const defaultPagerState = {
  currentPage: 0,
  pageSize: paging.PAGE_SIZE,
  itemsCount: 0
};

const pagerReducerForScope = scope => {
  const actionTypes = pagerActionTypesForScope(scope);
  return (state = defaultPagerState, action) => {
    switch (action.type) {
      case actionTypes.PAGE_CHANGED:
        let page = action.page;
        return {
          ...state,
          currentPage: page
        };
      case actionTypes.RESET_COUNT:
        return {
          ...state,
          itemsCount: action.itemsCount
        };
      case actionTypes.RESET_PAGING:
        return {
          ...state,
          currentPage: 0
        };
      case actionTypes.CHANGE_ITEMS_COUNT_PER_PAGE:
        return {
          ...state,
          pageSize: action.itemsCountPerPage,
          currentPage: 0
        };
      default:
        return state;
    }
  };
};

export default pagerReducerForScope;
