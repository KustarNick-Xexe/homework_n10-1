import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { deleteItem } from '../actions'

function ServiceList() {
    const items = useSelector(state => state.items);
    const dispatch = useDispatch();
    console.log("Store: " + items);

    const handleRemove = (id) => {
        dispatch(deleteItem(id));
    }

    const handleChange = (id) => {
        return id; //заглушка
    }

    return (
      <ul>
        {
            items.map(item => {
                return (
                    <li key={item.id} >{ item.name } { item.price }
                        <button onClick={ () => handleRemove( item.id ) }>
                            Change
                        </button>
                        <button onClick={ () => handleChange( item.id ) }>
                            Delete
                        </button>
                    </li>)
            })
        }
      </ul>
    )
  }
  
  export default ServiceList