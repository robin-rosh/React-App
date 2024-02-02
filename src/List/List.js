import React from "react";
import { TfiTrash } from "react-icons/tfi";
import ListGroup from 'react-bootstrap/ListGroup';

const List = ({item, index, updateItems, removeItem}) => {
    return (
        <ListGroup.Item as="li">
            <input type="checkbox" checked={item.checked} onChange={()=>updateItems(item.id)} />
            <label onClick={()=>updateItems(item.id)}>{item.label}</label>
            <TfiTrash role="button" cursor="pointer" onClick={() => removeItem(item.id)} />
        </ListGroup.Item>
    )
}

export default List;