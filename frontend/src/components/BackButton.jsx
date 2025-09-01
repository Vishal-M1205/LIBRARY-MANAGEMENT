
import {BsArrow90DegLeft} from 'react-icons/bs';
import { Link } from "react-router-dom";

function BackButton(params) {
    return(<>
    <div className="flex justify-items-start">
        <Link to='/'>
         <BsArrow90DegLeft className="text-black m-2 border rounded-md hover:text-blue-700 p-1 text-4xl"/>
        </Link>
       
    </div>
    </>)
}

export default BackButton;