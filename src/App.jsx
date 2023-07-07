import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [sobrenome, setSobrenome] = useState("Ramos")
  const morfar = () => {setSobrenome(sobrenome.toLocaleUpperCase())} 

  return (
    <>
      <h1>Morgana</h1>
     <div>{sobrenome}</div>
     <button type='button'onClick={morfar}>Aa</button>
    </>
  )
}

export default App
