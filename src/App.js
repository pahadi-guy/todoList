import React, { useState } from "react"
import "./App.css"
import Items from "./Items"

const itemName = "itemName"
const buttonText = "+ Add"

function App() {
  const [items, setItems] = useState([])
  const [currentItem, changeItem] = useState("")
  const handleChange = (event) => {
    changeItem(event.target.value)
  }
  const handleClick = () => {
    setItems((preItem) => {
      return [...preItem, { item: currentItem }]
    })
  }
  console.log(items)

  return (
    <div className="container">
      <header>TO DO LIST</header>
      <div className="notes-container">
        <input name={itemName} value={currentItem} onChange={handleChange} />
        <h1> value of current Item is {currentItem}</h1>

        <button onClick={handleClick}>{buttonText}</button>
        <Items items={items} />
      </div>
    </div>
  )
}

export default App
