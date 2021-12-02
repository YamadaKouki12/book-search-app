import axios from "axios";
import React, { useState } from "react"

export const useForm = (books: any, setBooks: any) => {
  const [input, setInput] = useState<string>('');
  const baseUrl = `https://app.rakuten.co.jp/services/api/BooksTotal/Search/20170404?format=json&keyword=${encodeURI(input)}&booksGenreId=000&applicationId=${process.env.NEXT_PUBLIC_APP_ID}`;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }
  const onClick = () => {
    axios.get(baseUrl)
      .then((res)=>{
        // console.log(res.data.Items)
        setBooks(res.data.Items);
      })
  }
  return { input, setInput, onChange, onClick }
}