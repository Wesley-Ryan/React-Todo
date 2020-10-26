import React from 'react';

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
      <div>
        <h1>Welcome to your Todo App!</h1>
      </div>
    );
  }
}

export default App;
