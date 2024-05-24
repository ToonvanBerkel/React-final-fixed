
const Book = ({title, image, author}) => {
  return ( 
    <>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
    </>
   );
}
 
export default Book;


