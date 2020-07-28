import {combineReducers} from 'redux'
import CounterReducer from './CounterReducer';

const rootReducer= combineReducers({
    counterReducer: CounterReducer
})

export default rootReducer;