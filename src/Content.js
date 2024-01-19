import React from "react";
import { useState } from "react";
import { TfiTrash } from "react-icons/tfi";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';



const Content = () => {
    const [checkItems, setcheckItems] = useState(
        [
            {
                id: 1,
                checked: true,
                label: "List one"
            },
            {
                id: 2,
                checked: true,
                label: "List two"
            },
            {
                id: 3,
                checked: true,
                label: "List three"
            }
        ]
    ); 
    const changeCheck = (id) => {
        const updateCheckItems = checkItems.map((item) => item.id === id ? {...item,checked:!item.checked} : item)
        setcheckItems(updateCheckItems);
    }
    const removeItem = (id) => {
        const updateCheckItems = checkItems.filter((item) => item.id !== id )
        setcheckItems(updateCheckItems);
    }
    return (
        <div>
            <ListGroup as="ul">
                {checkItems.map((item) => (
                    <ListGroup.Item as="li" key={item.id}>
                        <input type="checkbox" checked={item.checked} onChange={()=>changeCheck(item.id)}/>
                        <label onClick={()=>changeCheck(item.id)}>{item.label}</label>
                        <TfiTrash role="button" cursor="pointer" onClick={() => removeItem(item.id)} />
                    </ListGroup.Item>
                ) )}
            </ListGroup>
        </div>
    )
}

export default Content;