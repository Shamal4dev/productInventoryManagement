import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { add } from './add.reducer';
import { update } from './update.reducer';
import {registration} from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { products } from './product.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  products,
  add,
  update
});

export default rootReducer;