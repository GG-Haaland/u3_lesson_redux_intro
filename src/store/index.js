import { createStore, combineReducers } from 'redux'
// First we import what we need from Redux...
import { composeWithDevTools } from 'redux-devtools-extension'
import TodoReducer from './reducers/TodoReducer'
import AppReducer from './reducers/AppReducer'


const store = createStore(
    combineReducers(
            { 
            todoState: TodoReducer, 
            appState: AppReducer
            }
        ),
    composeWithDevTools()
    )
    //BOILERPLATE ^ //////////////////////////////////


export default store


// const store = createStore(TodoReducer, composeWithDevTools()) /// BEFORE COMBINERECUCERS AND APPREDUCER WERE IMPORTED

// const store = createStore(() => ({})) BEFORE LINES 3 and 4 WERE IMPORTED
// createStore accepts a function as an argument. This setup is just temporary until we set up Reducers.


