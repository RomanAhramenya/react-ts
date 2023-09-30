import { ITodo } from "../types/data"

interface ITodoItem extends ITodo {

}
const deleteTodo = () => {

}
const TodoItem: React.FC<ITodoItem> = (props) => {
    const { id, title, complete } = props
    return (
        <div>
            <input type="checkbox" checked={complete} />
            {title}
            ,<button onClick={deleteTodo}>delete</button>
        </div>
    )
}

export default TodoItem
