import React from "react"
import { v4 as uuidv4 } from "uuid"

function Items(props) {
  console.log("props ", props)
  const { items, strike, selectedValue, handleDelete, handleDone } = props

  const tempitems = [...items]
  console.log(tempitems)

  return (
    <div className="container">
      {items &&
        [...items].map((value) => {
          const key = uuidv4()
          const { item, id: itemId, isDone } = value
          return (
            <div className="item-container" key={key}>
              <div className="button-container">
                <button onClick={() => handleDelete(itemId)}>Delete</button>
                <button onClick={() => handleDone(itemId)}>
                  {strike[itemId] ? "Undone" : "Done"}
                </button>
              </div>
              <p className={isDone ? "strike" : ""}>
                {item} {isDone}
              </p>
            </div>
          )
        })}
    </div>
  )
}

export default Items
