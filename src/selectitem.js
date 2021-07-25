import React from "react"

const SelectValue = (props) => {
  const { selectedValue, SetSelectedValue } = props

  return (
    <>
      <select
        value={selectedValue}
        onChange={(event) => {
          SetSelectedValue(event.target.value)
        }}
      >
        <option value="All">All Tasks</option>
        <option value="Completed">Completed</option>
        <option value="Progress">In Progress</option>
      </select>
      <h1>{selectedValue}</h1>
    </>
  )
}
export default SelectValue
