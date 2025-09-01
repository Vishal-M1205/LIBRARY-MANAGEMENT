import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function DeleteBook() {
    const [deleted, setDeleted] = useState(false);
    const [error,setError] = useState(null);
    const { id } = useParams();
    useEffect(()=>{
        async function handleDelete() {
    
    try {
        const response = await axios.delete(`http://localhost:5500/books/${id}`);
        console.log("Book deleted successfully:", response.data);
        setDeleted(true);
    } catch (err) {
        console.error("Error deleting book:", err);
        setError(err.message);
    }

  
} handleDelete();

    },[])

  return ( <>

  {deleted ? <h1>Book got Deleted</h1>:<h1>{error}</h1>}
    </> );
}
export default DeleteBook;