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
      <ul className="w-500">
        {
            items.map(item => {
                return (
                    <li className="w-500 flex justify-between items-center m-0 p-0 pl-8" key={item.id} >
                        <span className="flex">
                            <p>{ item.name }</p> 
                            <p>{ item.price }</p>
                        </span>
                        <span className="flex">
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
                        </span>
                    </li>)
            })
        }
      </ul>
    )
  }
  
  export default ServiceList