import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle } from 'react-icons/bs';
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md';
function Home() {
    const [books, setBooks] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect( ()=>{
  const fetch = async ()=>{
    const response =  await axios.get('http://localhost:5500/books')
    const data = response.data
    setBooks(data);
    console.log(data);
    setLoading(false);
    console.log(data);

  };
  fetch();
        
    },[]);
    
    return ( <>
   <div className="p-4 shadow-xl">
    <div className="flex  items-center
    justify-between border-2 border-sky-500 rounded-3xl">
<h1 className="text-center font-bold p-2 ">Book List</h1>
<Link to='/books/create'>
<MdOutlineAddBox className="text-sky-400 text-4xl relative right-3"/></Link>
    </div>
   </div>
   {loading?<Spinner/>:(
    <div className="p-4 m-3 border-2 shadow-xl rounded-2xl">
   {books.map((book,index) => (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border-2 border-black-700 rounded-md text-center ">S.No</th>
          <th className="border-2 border-black-700 rounded-md text-center ">Name</th>
          <th className="border-2 border-black-700 rounded-md text-center ">Year</th>
          <th className="border-2 border-black-700 rounded-md text-center ">Author</th>
          <th className="border-2 border-black-700 rounded-md text-center ">Operations</th>
        </tr>
      </thead>
      <tbody>
      <tr><td className=" border-2 border-blue-700 rounded-md text-center ">{index + 1}</td>
      <td className="border-2 border-blue-700 rounded-md text-center ">{book.title}</td>
      <td className="border-2 border-blue-700 rounded-md text-center ">{book.publishYear}</td>
      <td className="border-2 border-blue-700 rounded-md text-center ">{book.author}</td>
      <td className="border-2 border-blue-700 rounded-md text-center flex justify-evenly p-2">
        <Link to={`/books/edit/${book._id}`}>
        <AiOutlineEdit className="text-yellow-600 font-bold"/>
        </Link>
        <Link to={`/books/details/${book._id}`}>
        <BsInfoCircle className="text-pink-600 font-extrabold"/>
        </Link>
        <Link to={`/books/delete/${book._id}`}>
        <MdOutlineDelete className="text-red-600 font-extrabold"/>
        </Link>
      </td>
      </tr>
      </tbody>
    </table>

    
   ))}</div>)}
    </> );
}

export default Home;