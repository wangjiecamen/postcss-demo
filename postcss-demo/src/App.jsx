import { useState } from 'react'
import "./webcomponent/web/web.esm.js";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="box">box</div>
      <my-component />
    </>
  )
}

export default App
