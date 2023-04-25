import ACTION_TYPE from '../constants'

export const addItem = (name, price) => ({
    type: ACTION_TYPE.ADD_ITEM,
    payload: { name, price }
});

export const deleteItem = (id) => ({
    type: ACTION_TYPE.DELETE_ITEM,
    payload: { id }
});

export const updateItem = (id, name, price) => ({
    type: ACTION_TYPE.UPDATE_ITEM,
    payload: { id, name, price }
});