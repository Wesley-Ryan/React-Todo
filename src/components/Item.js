import React from 'react';


const Item = (props) => {
    const {item, id} = props
    let itemNumber = id
    return (
        <div className='wish-list'>
            <p>{itemNumber +=1}.</p> <h3 className={item.completed ? "completed": "incomplete"}>{item.title}</h3>
        
         </div>  );
}
 
export default Item;