import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { useEffect, useRef, useState } from "react";
import AddItem from './List/AddItem'
import ColorCard from './Card/ColorCard'

function App() {

  const [checkItems, setCheckItems] = useState(JSON.parse(localStorage.getItem("list")));
  const [newItem, setNewItem] = useState('');

  const addItem = (item) => {
    const id = checkItems.length ? checkItems[checkItems.length - 1].id + 1 : 1;
    const newItem = { id: id, checked: false, label: item }
    const newCheckItems = [...checkItems, newItem]
    setCheckItems(newCheckItems)
    localStorage.setItem("list", JSON.stringify(newCheckItems))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newItem);
    if (!newItem) return
    addItem(newItem)
    setNewItem('')
  }
  const updateItems = (id) => {
    const updateCheckItems = checkItems.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setCheckItems(updateCheckItems)
    localStorage.setItem("list", JSON.stringify(updateCheckItems))
  }
  const removeItem = (id) => {
    const updateCheckItems = checkItems.filter((item) => item.id !== id)
    localStorage.setItem("list", JSON.stringify(updateCheckItems))
    setCheckItems(updateCheckItems)
  }
  const inputRef = useRef('')
  return (
    <div>
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} inputRef = {inputRef} />
      <Content checkItems={checkItems} updateItems={updateItems} removeItem={removeItem} />
      {/* <ColorCard></ColorCard> */}
    </div>
  );
}

export default App;
