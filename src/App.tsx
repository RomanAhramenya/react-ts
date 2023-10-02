
import './App.css'
import ChildrenApp from './components/children/ChildrenApp'
import Todo from './components/todoList/Todo'


const App: React.FC = () => {


  return (
    <div>
      <Todo />
      <hr />
      <ChildrenApp />
    </div>
  )
}

export default App
