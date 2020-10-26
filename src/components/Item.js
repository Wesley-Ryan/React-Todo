import React, {useState} from 'react';
import {Button} from 'reactstrap'


const Item = (props) => {
    const [completed, setCompleted] =useState(false)
    const {item, id, handleDelete} = props
    let itemNumber = id
    return (
        <div className='wish-list'>
            <p>{itemNumber +=1}.</p> <h3 onClick={() => { 
                if(item.completed === false) { 
                    item.completed = true
                } else { 
                    item.completed = false
                }
                setCompleted(item.completed)
 
                
            }} className={item.completed === true ? 'completed' : ''}>{item.title}</h3>
            <Button color='danger' size='sm'
            onClick={() => { 
                handleDelete(id)
            }} >Remove</Button>
         </div>  );
}
 
export default Item;