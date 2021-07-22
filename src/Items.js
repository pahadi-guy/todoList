import React from "react"
import { v4 as uuidv4 } from "uuid"
function Items(props) {
  console.log(props)
  const { items, strike, handleDelete, handleDone } = props

  return (
    <div className="item-container">
      {items &&
        [...items].map((value) => {
          const key = uuidv4()
          const { item, id: itemId, css } = value
          return (
            <div key={key}>
              <div className="button-container">
                <button onClick={() => handleDelete(itemId)}>Delete</button>
                <button onClick={() => handleDone(itemId)}>Done</button>
              </div>
              <p className={strike ? "strike" : ""}>
                {item} {css}
              </p>
            </div>
          )
        })}
    </div>
  )
}
export default Items
