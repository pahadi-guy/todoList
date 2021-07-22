import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import "./App.css"
import Items from "./Items"

const itemName = "itemName"
const buttonText = "+ Add"

function App() {
  const [items, setItems] = useState([])
  const [currentItem, changeItem] = useState("")
  const [strike, setstrike] = useState(false)

  const handleChange = (event) => {
    changeItem(event.target.value)
  }
  const handleClick = () => {
    setItems((preItem) => {
      return [...preItem, { item: currentItem, id: uuidv4(), css: "" }]
    })
    changeItem("")
  }

  const handleDone = (idx) => {
    if (!idx) {
      console.log("Element Not Found")
      return
    }
    const index = items.findIndex((x) => x.id === idx)

    console.log(items[index])
    console.log(index)

    setstrike(true)
    let tempitems = [...items]
    tempitems.css = strike
  }
  const handleDelete = (idx) => {
    console.log(idx)
    const index = items.findIndex((x) => x.id === idx)
    console.log(items)
    console.log(index)
    const tempitems = [...items]
    tempitems.splice(index, 1)
    setItems(tempitems)
  }

  return (
    <div className="container">
      <header>TO DO LIST</header>
      <div className="notes-container">
        <input name={itemName} value={currentItem} onChange={handleChange} />
        <button onClick={handleClick}>{buttonText}</button>
        <Items
          items={items}
          strike={strike}
          handleDelete={handleDelete}
          handleDone={handleDone}
        />
      </div>
    </div>
  )
}

export default App
