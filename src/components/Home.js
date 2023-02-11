import React, { useState } from 'react';
import "../styles/Home.css";

function Home() {
   const [bookName, setBookName] = useState('');
   const [author, setAuthor] = useState('');
   const [isbn, setIsbn] = useState('');
   const [formData, setFormData] = useState(null);
   const [showData, setShowData] = useState(true);

   const handleSubmit = (event) => {
      event.preventDefault();
      const data = {
         bookName: bookName,
         author: author,
         isbn: isbn
      };
      setFormData(data);
   };

   const handleDeleteAll = () => {
      setFormData(null);
      setShowData(false);
   };

   return (
      <div className="main">
      <h1>BookList Managament Form</h1>
      <p>View the data form local storage</p>
         <form onSubmit={handleSubmit}>
            
            <input
               type="text"
               id="book-name" placeholder="Book Name"
               value={bookName}
               onChange={(event) => setBookName(event.target.value)}
            />
            <br /> <br />
            
            <input
               type="text"
               id="author" placeholder="Author"
               value={author}
               onChange={(event) => setAuthor(event.target.value)}
            />
            <br /> <br />
            
            <input
               type="text"
               id="isbn" placeholder="ISBN#"
               value={isbn}
               onChange={(event) => setIsbn(event.target.value)}
            />
            <br /> <br />
            <button type="submit">Submit</button>
         </form>
         {showData && formData && (
            <div className="data">
               <h2>Data you Entered:</h2>
               <p>Book Name: {formData.bookName}</p>
               <p>Author: {formData.author}</p>
               <p>ISBN: {formData.isbn}</p>
            </div>
         )}
         {showData && formData && (
            <a className="dt" onClick={handleDeleteAll}>Delete All</a>
         )}
      </div>
   );
}
export default Home;
