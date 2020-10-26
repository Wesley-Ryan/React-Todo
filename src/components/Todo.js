import React from 'react';


const Todo = (props) => {
    const {todo} = props
    return (
        <div className='wish-list'>
            <p>{todo.id}.</p> <h3 className={todo.completed ? "completed": "incomplete"}>{todo.title}</h3>
        
         </div>  );
}
 
export default Todo;