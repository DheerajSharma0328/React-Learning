import { useState } from 'react'
import LikeButton from './LikeButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LikeButton />
    </>
  )
}

export default App
