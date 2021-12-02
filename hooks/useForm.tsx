import React, { useState } from "react"

export const useForm = () => {
  const [input, setInput] = useState<string>('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }
  const onClick = () => {
    console.log('aiueo');
  }
  return { input, setInput, onChange, onClick }
}