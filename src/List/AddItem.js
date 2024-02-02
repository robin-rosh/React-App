import React from "react";
import { IoAddCircle } from "react-icons/io5";

const AddItem = ({ newItem, setNewItem, handleSubmit}) => {
    return (
    <form className="m-auto w-75 text-center mb-3 mt-3 d-none" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter item" name="list_item" value={newItem} onChange={(e)=>setNewItem(e.target.value)} />
        <button type="submit"><IoAddCircle /></button>
    </form>
    )
}

export default AddItem;