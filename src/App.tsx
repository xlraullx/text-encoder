import './App.css'
import { TextBox } from './components/text-box'
import { useState } from 'react'

function App() {
  const [answer, setAnswer] = useState('')

  const decoderText = (answer: string) => {
    setAnswer(btoa(answer))
  }


  return (
   
      <div className='container'>
        <div style={{ display: 'flex', gap: '100px' }}>
          <TextBox onDecode={decoderText} />

          <TextBox value={answer} />

        </div>
      </div>
   
  )
}

export default App
