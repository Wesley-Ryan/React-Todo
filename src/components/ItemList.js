import React from 'react';
import Item from './Item'

const ItemList = (props) => {
    const {items} = props
    return (
        <div>
        {items.map((item,index) => { 
            return <Item item={item} key={index} id={index}/>
        })}
        </div>
      );
}
 
export default ItemList;