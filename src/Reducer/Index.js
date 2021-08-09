import changeTheNumber from './UpDown';
import multTheNumber from './Multiplay'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    changeTheNumber,
    multTheNumber
})

export default rootReducer;