import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useState,useEffect } from "react";
function EditBook() {
    const {id} = useParams();
    const [book,setBook] = useState({});
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [year,setYear] = useState(null);
    const [desc,setDesc] = useState("");
    const [success,setSuccess] = useState(false);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        async function fetch(){
            try {
                const response = await axios.get(`http://localhost:5500/books/${id}`);
               await setBook(response.data);
               await setTitle(response.data.title);
               await setAuthor(response.data.author);
               await setYear(response.data.publishYear);
               await setDesc(response.data.desc);
               setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetch();
        
    },[])
    async function updateBook(){
        const data = {
            "title": title,
            "author": author,
            "publishYear": year,
            "desc": desc
        }
    try {
        await axios.put(`http://localhost:5500/books/${id}`,data);
        setSuccess(true);
    } catch (error) {
        
    }
    }

    return (<>
      <div className="flex w-full shadow-xl">
    <BackButton/>
    <div className="text-center w-full p-2 border-sky-400 border-2 m-2 rounded-lg text-xl">Edit a Book</div>
        </div>{loading ? <Spinner/> :<div className="w-xl  m-auto mt-5 p-4 border-2 shadow-xl rounded-lg">
        <form className="flex flex-col gap-4" onSubmit={(e)=>{
            e.preventDefault();
            updateBook();
        }}
        >
        <div className="flex justify-evenly "> <label htmlFor="" className="mr-10">Title :</label>  
         <input type="text" className="border-2 rounded-2xl w-auto p-2" value={title} onChange={(e)=>setTitle(e.target.value)} /></div>
         <div className="flex justify-evenly "> <label htmlFor="" className="mr-10">Author :</label>  
         <input type="text" className="border-2 rounded-2xl w-auto p-2" value={author} onChange={(e)=>setAuthor(e.target.value)} /></div>
         <div className="flex justify-evenly"> <label htmlFor="" className="mr-10">Year :</label>  
         <input type="number" className="border-2 rounded-2xl w-auto p-2" value={year} onChange={(e)=>setYear(e.target.value)} /></div>
         <div className="flex justify-evenly"> <label htmlFor="" className="mr-10">Description :</label>  
         <textarea className="border-2 rounded-2xl w-auto p-2" value={desc} onChange={(e)=>setDesc(e.target.value)} /></div>
         <button className="border-2 rounded-2xl w-auto p-2 bg-sky-500 hover:bg-sky-300" type="submit">Update Book</button>
        </form>
        {success ? <div className="text-green-500">Book Updated Successfully</div> : null}
    </div> }
    
    </>  );
}

export default EditBook;