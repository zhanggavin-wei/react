import { createStore ,combineReducers} from 'redux'

//分模块的子reducer
import testReducer from './reducers/test'
import todoReducer from './reducers/todo'


const reducer=combineReducers({
    test:testReducer,
    todo:todoReducer
})
const store =createStore(reducer)

export default store
