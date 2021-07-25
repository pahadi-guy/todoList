import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import "./App.css"
import Items from "./Items"

const itemName = "itemName"
const buttonText = "+ Add"

function App() {
  const [items, setItems] = useState([])
  const [currentItem, setCurrentItem] = useState("")
  const [strike, setStrike] = useState({})

  const handleChange = (event) => {
    setCurrentItem(event.target.value)
  }

  const handleAddClick = () => {
    setItems((preItem) => [...preItem, { item: currentItem, id: uuidv4() }])
    setCurrentItem("")
  }

  const handleDone = (itemId) => {
    if (!itemId) {
      console.log("idx not found.")
      return
    }
    const tempStrike = { ...strike }
    const doneStatus = tempStrike[itemId]
    tempStrike[itemId] = !doneStatus

    setStrike(tempStrike)
    console.log("TempStrike", tempStrike)
  }

  const handleDelete = (idx) => {
    const index = items.findIndex((x) => x.id === idx)
    const tempitems = [...items]
    tempitems.splice(index, 1)
    setItems(tempitems)
  }

  return (
    <div className="container">
      <header>TO DO LIST</header>
      <div className="notes-container">
        <input name={itemName} value={currentItem} onChange={handleChange} />
        <button onClick={handleAddClick}>{buttonText}</button>
        <Items
          handleDelete={handleDelete}
          handleDone={handleDone}
          items={items}
          strike={strike}
        />
      </div>
    </div>
  )
}

export default App
