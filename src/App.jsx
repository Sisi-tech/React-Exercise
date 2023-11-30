import { useState } from 'react'
import FetchDataExercise from './FetchData'
import GiftCard from './GiftCard'

function App() {

  return (
    <div className='w-screen h-screen bg-gray-800 text-gray-200 flex flex-col gap-6 justify-center items-center'>
      <GiftCard />
      <FetchDataExercise />
    </div>
  )
}

export default App
