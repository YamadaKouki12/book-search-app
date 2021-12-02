import Image from 'next/image';

type props = {
  books: any,
}
export const Books: React.FC<props> = ({ books }) => {
  return(
    <>
      { typeof(books) !== undefined && 
        books.map((book: any, index: number)=>{
        return(
          <img key={index} src={book.Item.mediumImageUrl} alt='本の画像' />
        )
      })}
    </>
  )
}