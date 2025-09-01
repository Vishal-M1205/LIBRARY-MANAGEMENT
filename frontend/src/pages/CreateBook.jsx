import React, { useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import Spinner from "../components/Spinner";

function CreateBook() {
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [year,setYear] = useState(null);
    const [desc,setDesc] = useState("");
    const [success,setSuccess] = useState(false);
    async function fetch(){
        const data ={            
  "title": title,
  "author": author,
  "publishYear": year,
  "desc": desc
        }
        try {
             const response = await axios.post("http://localhost:5500/books",data)
             console.log(response.status)
             setSuccess(true);
        } catch (error) {
         console.log(error);
            setSuccess(false);
        }
       
    }
    return ( <>
    <div className="flex w-full shadow-xl">
<BackButton/>
<div className="text-center w-full p-2 border-sky-400 border-2 m-2 rounded-lg text-xl">Create a Book</div>
    </div>
    <div className="w-xl  m-auto mt-5 p-4 border-2 shadow-xl rounded-lg">
        <form className="flex flex-col gap-4" onSubmit={(e)=>{
            e.preventDefault();
            fetch();
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
         <button className="border-2 rounded-2xl w-auto p-2 bg-sky-500 hover:bg-sky-300" type="submit">Create Book</button>
        </form>
        {success ? <div className="text-green-500">Book Created Successfully</div> : null}
    </div>
    </> );
}

export default CreateBook;