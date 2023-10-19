import { useState } from 'react'
import Header from './components/Header'
import Details from './components/Details'
import Hero from './components/Hero'
import Tools from './components/Tools'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className=''>
      <Header/>
      <Hero/>
      <Tools/>
      <Details/>
    </section>
  )
}

export default App
