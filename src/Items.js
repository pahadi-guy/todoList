import React from "react"
function Items(props) {
  const { items } = props
  console.log(items)
  return (
    <div>
      <ul>
        {items &&
          items.map((value, i) => {
            return (
              <li key={i}>
                data is {value.item} and key is {i}
              </li>
            )
          })}
      </ul>
    </div>
  )
}
export default Items
