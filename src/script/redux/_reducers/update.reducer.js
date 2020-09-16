import { productConstants } from '../_constants/product.constants';

export function update(state = {}, action) {
  switch (action.type) {
    case productConstants.UPDATE_REQUEST:
      return {
        ...state,
        items:  {  updating: true }
      };
    case productConstants.UPDATE_SUCCESS:
      return { items:  {  updating: false }};
    case productConstants.UPDATE_FAILURE:
      return {
        ...state,
        items:  {  updating: false }
      };
    default:
      return state
  }
}


