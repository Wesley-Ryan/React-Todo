import React from 'react';
import {Button} from 'reactstrap'


const Item = (props) => {
    const {item, id, handleDelete} = props
    let itemNumber = id
    return (
        <div className='wish-list'>
            <p>{itemNumber +=1}.</p> <h3 className={item.completed ? "completed": "incomplete"}>{item.title}</h3>
            <Button color='danger' size='sm'
            onClick={() => { 
                handleDelete(id)
            }} >Remove</Button>
         </div>  );
}
 
export default Item;