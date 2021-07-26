import React from "react"
import { v4 as uuidv4 } from "uuid"

function Items(props) {
  //console.log("props ", props)
  const { items, handleDelete, handleDone } = props

  return (
    <div className="container">
      {items &&
        [...items].map((value) => {
          const key = uuidv4()
          //console.log(value)
          const { item, id: itemId, isDone } = value
          console.log(isDone)
          return (
            <div className="item-container" key={key}>
              <div className="button-container">
                <button onClick={() => handleDelete(itemId)}>Delete</button>
                <button onClick={() => handleDone(itemId)}>
                  {isDone ? "Undone" : "Done"}
                </button>
              </div>

              <p className={isDone ? "strike" : ""}>{item}</p>
            </div>
          )
        })}
    </div>
  )
}

export default Items
