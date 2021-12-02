import { useState } from "react"

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  return { books, setBooks };
}