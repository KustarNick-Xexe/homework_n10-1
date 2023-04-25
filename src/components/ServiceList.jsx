import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { deleteItem } from '../actions'

function ServiceList() {
    const items = useSelector(state => state.items);
    const dispatch = useDispatch();

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
                    <li className=" w-100 flex justify-center items-center" key={item.id} >
                        { item.name } { item.price }
                        <button 
                            className=' bg-slate-900 text-gray-50 m-4 px-4 py-1'
                            onClick={ () => handleChange( item.id ) }>
                            Change
                        </button>
                        <button 
                            className=' bg-slate-900 text-gray-50 m-4 px-4 py-1'
                            onClick={ () => handleRemove( item.id ) }>
                            Delete
                        </button>
                    </li>)
            })
        }
      </ul>
    )
  }
  
  export default ServiceList