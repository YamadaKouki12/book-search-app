import { ChangeEvent, SetStateAction } from "react"
import axios from 'axios';
type props = {
  input: string,
  setInput: React.Dispatch<SetStateAction<string>>,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onClick: () => void,
}

export const Form: React.FC<props> = ({ input, setInput, onChange, onClick }) => {
  return(
    <>
      <input type='text' placeholder='タイトル' value={input} onChange={onChange} />
      <button onClick={onClick}>検索</button>
    </>
  )
}