import { useState } from 'react'
import Options from './cloneExercise/Feedback'
import CustomHook from './CustomHook'
import FetchDataExercise from './FetchData'
import SetUpFocusInput from './FocusInput'
import GiftCard from './GiftCard'
import Increment from './Increment'
import ShowMousePosition from './Render'

function App() {

  return (
    <div className='w-screen h-screen-auto bg-gray-800 text-gray-200 flex flex-col gap-6 justify-center items-center'>
      <GiftCard />
      <FetchDataExercise />
      <SetUpFocusInput />
      <Increment />
      <CustomHook />
      <Options />
      <ShowMousePosition />
    </div>
  )
}

export default App
