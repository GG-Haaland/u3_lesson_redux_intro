const TodoForm = (props) => {

    return (
        <form>
            <input
                type="text"
                name="newTodo"
                value={props.newTodo}
                onChange={props.handleChange} />
        <button
                type="submit"
                onClick={props.handleSubmit} >
                    Add To List
        </button>

        </form>
    )
}
export default TodoForm