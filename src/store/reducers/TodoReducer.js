import { ADD_TODO, NEW_TODO, REMOVE_TODO, MARK_TODO } from '../types'


const initialState = {
    todos: ['Make a pizz-a pie-a',
    'Work with reducer more!',
    'Get update to work on my project!!!',
    'Does this auto populate?'],
    /// first state is an array "todo list"
    newTodo: '',
    /// second state is a string/ a new todo that will be added to the todo list
  
}
const remove = (td,index) => {
    
}

const TodoReducer = (state = initialState, action) =>{
    
    switch(action.type) {
        case ADD_TODO:
            return{ ...state, todos: [...state.todos, action.payload], newTodo:''}
                                    // puts the new todo string into the todos array
                                    // 'action.payload' is universal and will be used in every example
        case NEW_TODO:
            return{ ...state, newTodo: action.payload }
        case REMOVE_TODO:
            return  {...state,
                todos: state.todos.filter((index) => index!==action.payload) }    
        default:
            return{ ...state }
    }   

    //ATTEMPT TO REMOVE AN ITEM AND RETURN A NEW ARRAY
    // return { ...state,
    // todos: state.todos.filter((value, index) => index!==action.payload) 

    // }


}

export default TodoReducer;