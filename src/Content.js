import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import List from "./List/List.js";

const Content = ({checkItems, updateItems, removeItem}) => {
    if(checkItems) {
        return (
        <div>
            <ListGroup as="ul" className="m-auto w-75 text-center mb-3 mt-3">
                {checkItems.map((item, index) => (
                    <List item = {item} key = {index} index = {index} updateItems = {updateItems} removeItem = {removeItem} />
                ) )}
            </ListGroup>
        </div>
        )
    }
}

export default Content;