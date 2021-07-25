import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import "./App.css"
import Items from "./Items"
import SelectValue from "./selectitem"
const itemName = "itemName"
const buttonText = "+ Add"
const initialItems = [
  {
    item: "default display property value is taken from the HTML specifications",
    id: uuidv4(),
    isDone: false,
  },
  {
    item: "default display property value is taken from the HTML specifications",
    id: uuidv4(),
    isDone: false,
  },
  {
    item: "default display property value is taken from the HTML specifications",
    id: uuidv4(),
    isDone: false,
  },
]

function App() {
  const [items, setItems] = useState(initialItems)
  const [currentItem, setCurrentItem] = useState("")
  const [strike, setStrike] = useState({})
  const [selectedValue, SetSelectedValue] = useState("")

  const handleChange = (event) => {
    setCurrentItem(event.target.value)
  }

  const handleAddClick = () => {
    setItems((preItem) => [
      ...preItem,
      { item: currentItem, id: uuidv4(), isDone: false },
    ])
    // setCurrentItem("")
  }

  const handleDone = (itemId) => {
    if (!itemId) {
      console.log("idx not found.")
      return
    }

    //Strike by updating value inside object

    //const index = items.findIndex((x) => x.id === itemId)
    items.map((tempValue) => {
      console.log(tempValue)

      return tempValue.id === itemId
        ? { ...tempValue, isDone: !tempValue.isDone }
        : tempValue
    })

    // Strike Using State
    const tempStrike = { ...strike }
    const doneStatus = tempStrike[itemId]
    tempStrike[itemId] = !doneStatus

    setStrike(tempStrike)
    //console.log("TempStrike", tempStrike)
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
        <SelectValue
          selectedValue={selectedValue}
          SetSelectedValue={SetSelectedValue}
        />
        <Items
          handleDelete={handleDelete}
          handleDone={handleDone}
          items={items}
          strike={strike}
          selectedValue={selectedValue}
        />
      </div>
    </div>
  )
}

export default App
