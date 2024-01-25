import React from "react";
import { TfiTrash } from "react-icons/tfi";
import ListGroup from 'react-bootstrap/ListGroup';

const Content = ({checkItems, updateItems, removeItem}) => {
    console.log(checkItems.map((item) => item))
    return (
        <div>
            <ListGroup as="ul">
                {checkItems.map((item, index) => (
                    <ListGroup.Item as="li">
                        <input type="checkbox" checked={item.checked} onChange={()=>updateItems(item.id)}/>
                        <label onClick={()=>updateItems(item.id)}>{item.label}{index+1}</label>
                        <TfiTrash role="button" cursor="pointer" onClick={() => removeItem(item.id)} />
                    </ListGroup.Item>
                ) )}
            </ListGroup>
        </div>
    )
}

export default Content;