import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { ITodo } from '../../types/data';
import TodoList from './TodoList';

const Todo: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const addTodo = () => {
        setTodos([...todos,
        {
            id: Date.now(),
            title: value,
            complete: false
        }
        ])
        setValue('')
    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo

            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        setValue(e.target.value)
    }

    const handleKeyDown: React.KeyboardEventHandler = (e) => {
        e.key === 'Enter' && addTodo()
    }
    useEffect(() => {
        inputRef.current?.focus()

    }, [])
    return (
        <div>
            <div>
                <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef} />
                <button onClick={addTodo}>Add</button>
            </div>
            <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </div>
    )
}

export default Todo
