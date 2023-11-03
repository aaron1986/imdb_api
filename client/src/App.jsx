import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [title, setTitle] = useState("");

   // Handle translation form submit
   async function handleTranslate(event) {
    event.preventDefault();

    const API_imdb = `http://localhost:8080/data`;
    try {
      const res = await axios.get(API_imdb);
      setTitle(res.data.image);
    } catch (error) {
      console.error('Error translating:', error);
    }
  }

  return (
    <>
    <form onSubmit={handleTranslate}>
        <button>Submit</button>
      </form>
         <div>
          <h1>Image:</h1>
          <h2>{title}</h2> {/* Display the title */}
        </div>
    </>
  )
}

export default App
