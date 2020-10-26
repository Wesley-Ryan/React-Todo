import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';
import "./components/Todo.css"

const todos = [{ 
  id: 1, 
  title: "my todo", 
  completed: false
}, 
{ 
  id: 2, 
  title: "my other todo", 
  completed: false
}]

class App extends React.Component {
  constructor(){ 
    super() 
      this.state= todos
    }
    
    handleAddTodo = () => { 
      console.log("add new todo")
    }
    handleCompletedTodo = () => { 
      console.log("this is completed")
    }
    handleDeletedTodo = () => { 
      console.log("remove completed todo")
    }


  render() {
    return (
      <div className="todo-container">
        <h1>Christmas Wish List</h1>
        <TodoList todos={todos} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
