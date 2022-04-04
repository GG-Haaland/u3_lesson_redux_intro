import { connect } from 'react-redux'
import { AddTodo, RemoveTodo, CreateNewTodo } from '../store/actions/TodoActions'
import TodoForm from './TodoForm'




const TodoList = (props) => {
    console.log(props)

    const handleChange = (event) => {
        props.createNewTodo(event.target.value)
        props.removeTodo(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault() //Stops the page from refreshing
        props.addTodo(props.todoState.newTodo)
    }

    const del = (index) => {
        props.removeTodo
    }


    return (
        <div>
            <TodoForm 
                newTodo={props.todoState.newTodo}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                />
            {props.todoState.todos.map((todo,index)=>(
                <li key={index}>{todo} <button onClick={handleChange}>x</button></li>
            ))} 
         
        </div> /*mapping out our new todos*/
    )
  }

  const mapStateToProps = (state) => {
    // console.log(state)
    return {
        todoState: state.todoState
     }
  }
// like useState in React



const mapActionsToProps = (dispatch) => {
    return {
        addTodo: (newTodo) => dispatch(AddTodo(newTodo)),
        removeTodo: (index) => dispatch(RemoveTodo(index)),
        createNewTodo: (formValue) => dispatch(CreateNewTodo(formValue))
      
    }
  }    
// mapping our actions to our props/// from TodoActions
// Lets you setState



export default connect(mapStateToProps, mapActionsToProps)(TodoList)
//   export default TodoList