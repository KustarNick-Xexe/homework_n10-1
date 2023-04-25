import { v4 as uuidv } from 'uuid';
import ACTION_TYPE from '../constants'

const initialState = {
    items: [],
};

const add = (state, action) => {
    const newItem = {
        id: uuidv(),
        name: action.payload.name,
        price: action.payload.price,
    };
    return {
        ...state,
        items: [...state.items, newItem],
    };
};
  
const remove = (state, action) => {
    return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
    };
};
  
const update = (state, action) => {
    return {
        ...state,
        items: state.items.map((item) =>
            item.id === action.payload.id
            ? { ...item, name: action.payload.name, price: action.payload.price }
            : item
        ),
    };
};

/* const filter = (state, action) => {
    return {
        ...state,
        items: state.items.map((item) =>
            item.id === action.payload.id
            ? { ...item, name: action.payload.name, price: action.payload.price }
            : item
        ),
    };
}; */

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE.ADD_ITEM:
            return add(state, action);
        case ACTION_TYPE.DELETE_ITEM:
            return remove(state, action);
        case ACTION_TYPE.UPDATE_ITEM:
            return update(state, action);
        default:
            return state;
    }
};
  
export default rootReducer;

  