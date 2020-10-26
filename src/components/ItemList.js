import React from 'react';
import Item from './Item'

const ItemList = (props) => {
    const {items, handleDelete} = props
    return (
        <div id='component'>
        {items.map((item,index) => { 
            return <Item item={item} key={index} id={index} handleDelete={handleDelete}/>
        })}
        </div>
      );
}
 
export default ItemList;