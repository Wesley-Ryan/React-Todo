import React from 'react';
import Todo from './Todo'

const TodoList = (props) => {
    const {todos} = props
    return (
        <div>
        {todos.map((todo,index) => { 
            return <Todo todo={todo} key={index} />
        })}
        </div>
      );
}
 
export default TodoList;