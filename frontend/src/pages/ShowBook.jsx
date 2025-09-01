import React, { use } from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import axios from "axios";
function ShowBook() {
    const {id } =useParams();
    const[books,setBook]= useState(null);
const [load,setLoad] = useState(true);
useEffect(()=>{
  async function fetch(){
    const response = await axios.get(`http://localhost:5500/books/${id}`)
    const data = response.data;
    setBook(data);
    console.log(data);
    setLoad(false);
  }
  fetch();

},[])
    return ( <><div className="flex p-4 shadow-xl">
<BackButton />
<div className="m-auto border-2 w-full text-center p-2 rounded-2xl border-sky-500 "><h1 className="font-bold  ">Book Description</h1></div>
    </div>
    {
      load ? <Spinner/> :(
        <div className="w-full m-4 border-2 shadow-xl p-4 rounded-lg">
        <h1 className="text-5xl" >{books.title}</h1>
        <div className="flex"> <p className="p-3 mt-2 ">Published Year:  {books.publishYear}</p> <p className="p-3 mt-2">Author: {books.author} </p></div>
       <div className="p-3 "><h2>{books.desc}</h2></div>

      </div>)
    }

    </> );
}

export default ShowBook;