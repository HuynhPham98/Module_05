import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ListUser from './components/ListUser'
import ListProduct from './components/ListProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <ListUser></ListUser>
      <ListProduct></ListProduct>
      <Footer/>
    
    </>
  )
}

export default App
