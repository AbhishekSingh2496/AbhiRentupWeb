import { useState } from 'react'
import Pages from "./components/pages/Pages"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Pages/>
    </>
  )
}

export default App
