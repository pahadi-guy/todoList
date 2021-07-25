import React, { useState } from "react"
const [anobj, setObj] = useState({})

let id = Math.floor(Math.random() * 10)
//console.log(id)
const tempobj = { ...anobj }
//console.log(tempobj)
const doneStatus = undefined
//console.log(doneStatus)
tempobj[id] = !doneStatus
console.log(tempobj)
setObj(tempobj)
console.log(anobj)
