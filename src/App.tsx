import { useState, useEffect, useRef } from 'react'
import './App.css'
import { ITodo } from './types/data';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

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
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.target.value)
  }
  return (
    <div>
      <div>
        <input value={value} onChange={handleChange} />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList items={todos} />
    </div>
  )
}

export default App
