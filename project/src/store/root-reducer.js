import {combineReducers} from 'redux';
import {NameSpace} from '../const';

import {process} from './process/process';
import {data} from './data/data';
import {user} from './user/user';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.PROCESS]: process,
  [NameSpace.USER]: user,
});
