import { ITodo } from "../../types/data"
import TodoItem from "./TodoItem"

interface ITodoList {
    items: ITodo[]
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}

const TodoList: React.FC<ITodoList> = (props) => {
    return (
        <div>
            {props.items.map(todo => <TodoItem key={todo.id} {...todo} removeTodo={props.removeTodo} toggleTodo={props.toggleTodo} />)}
        </div>
    )
}

export default TodoList