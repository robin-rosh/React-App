import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { useState } from "react";

function App() {

  const [checkItems, setCheckItems] = useState(
    [
      {
        id: 1,
        checked: true,
        label: "Item - "
      },
      {
        id: 2,
        checked: true,
        label: "Item - "
      },
      {
        id: 3,
        checked: true,
        label: "Item - "
      }
    ]
  );
  const updateItems = (id) => {
    const updateCheckItems = checkItems.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setCheckItems(updateCheckItems);
  }
  const removeItem = (id) => {
    const updateCheckItems = checkItems.filter((item) => item.id !== id)
    setCheckItems(updateCheckItems);
  }
  return (
    <div >
      {/* <Header /> */}
      <Content checkItems = {checkItems} updateItems = {updateItems} removeItem = {removeItem} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
