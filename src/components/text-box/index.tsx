import { useState } from 'react'
import './text-box.css'

type TextBoxProps = {
  onDecode?: (value: string) => void;
  value?: string; 
}

export const TextBox = ({ onDecode, value }: TextBoxProps) => {
  const [text, setText] = useState('')

  const handleText = (newText: string) => {
    setText(newText)
    onDecode?.(newText)
}

  return (
    <textarea
      name=""
      id=""
      className="text-area"
      value={value ?? text}
      placeholder={onDecode ? 'insira seu texto' : ''}
      readOnly={!onDecode}
      onChange={onDecode? (e) => handleText(e.target.value) : undefined }
    />
  )
}
