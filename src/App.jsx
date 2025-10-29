import React, { useState } from 'react'
import "./App.css"

function App() {

  const [Create, setCreate] = useState([])
  const [Delete, setDelete] = useState([])

  function randomColor() {
    let colorCode = "0123456789ABCDEF"
    let colors = "#"
    for (let i = 0; i < 6; i++) {
      colors += colorCode[Math.floor(Math.random() * colorCode.length)]
    }
    return colors
  }

  function handleDotCrate(e) {

    if (e.target.tagName === "BUTTON") return;

    let CreateAddress = {
      x: e.clientX,
      y: e.clientY,
      color: randomColor(),
      id: Date.now()
    }
    setCreate([...Create, CreateAddress])
  }

  function handleReset() {
    setCreate([])
    setDelete([])

  }

  function handleUndo() {
    if (Create.length > 0) {
      const newcreate = [...Create]
      const remove = newcreate.pop()
      setCreate(newcreate)
      setDelete([...Delete, remove])
    }
  }

  function handleRedu() {
    if (Delete.length > 0) {
      const newdelete = [...Delete]
      const restore = newdelete.pop()
      setDelete(newdelete)
      setCreate([...Create, restore])
    }
  }


  return (
    <div className='maindiv' onClick={handleDotCrate}>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleUndo} >Undo</button>
      <button onClick={handleRedu} >Redu</button>

      {Create.map(dot => (
        <div
          key={dot.id}
          className="dot"
          style={{
            left: dot.x,
            top: dot.y,
            backgroundColor: dot.color
          }}
        ></div>
      ))}
    </div>
  )
}

export default App
