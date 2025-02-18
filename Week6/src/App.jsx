import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Header  from './Components/Header'

//memo - React lets you skip re-rendering a component when its props are unchanged

function App() {
  const [title, setTitle] = useState('Welcome to Vite + React')
  const updatevalue = () => {
    setTitle(Math.random());
  }
  return (
    <div>
    <button onClick={()=>updatevalue()} > Click on me to change the title</button>
    <Header title={title}></Header>
    <Header title="Welcome to Vite + React 2"></Header>
    <Header title="Welcome to Vite + React 2"></Header>
    <Header title="Welcome to Vite + React 2"></Header>
    </div>
  )
}

export default App
