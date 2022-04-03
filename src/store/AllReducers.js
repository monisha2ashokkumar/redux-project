import ToggleReducer from "./ToggleReducer";
import CounterReducer from "./CounterReducer";
import {combineReducers} from 'redux'

const AllReducers = combineReducers({
    toggleR: ToggleReducer,
    counterR: CounterReducer
})

export default AllReducers;