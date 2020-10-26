import React from 'react';


const Todo = (props) => {
    const {todo} = props
    return (
        <div>
            <h2 className={todo.completed ? "completed": "incomplete"}>{todo.title}</h2>
        
         </div>  );
}
 
export default Todo;