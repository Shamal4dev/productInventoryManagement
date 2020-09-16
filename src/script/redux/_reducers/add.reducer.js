import { productConstants } from '../_constants/product.constants';

export function add(state = {}, action) {
  switch (action.type) {
    case productConstants.ADD_REQUEST:
      return { adding: true };
    case productConstants.ADD_SUCCESS:
      return {};
    case productConstants.ADD_FAILURE:
      return {};
    default:
      return state
  }
}