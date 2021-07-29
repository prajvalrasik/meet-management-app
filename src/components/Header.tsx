import {FC,memo} from 'react';
import { FiMenu } from "react-icons/fi";
import { logout } from "../api";
import Button from "./Button/Button";

interface Props {
}

const Header: FC<Props> = (props) => {
  return (
    <>
    <div className=" bg-gray-800 h-14 flex justify-between">
      <div className="ml-6 flex items-center ">
        <img src='https://pbs.twimg.com/media/E7NnbCJWQAMDRh0?format=png&name=900x900' alt="logo" className="h-8 w-8"/>
        <h1 className="text-white font-semibold text-2xl ml-4">MEETEMP</h1>
      </div>
      {/* <div className="flex items-center">
          <HiOutlineMail className="inline-block text-white w-6 h-6 mx-2"/>
          <HiOutlineBell className="inline-block text-white w-6 h-6 mx-2"/>

      </div> */}
    </div>
    {/* <div className="w-screen h-12 bg-gray-50 flex items-center">
        <HiOutlineMenu className="h-6 w-6 ml-8 text-gray-600"/>
    </div> */}
    <div className="h-14 border-b shadow-md px-5  flex justify-between ">
            <ul className="flex flex-row space-x-4 py-5 ">
            <li><a ><FiMenu className="w-5 h-5 text-gray-800" ></FiMenu></a></li>
               
            <li><a href="\" className=" text-gray-500 ">Dashboard</a></li>
           </ul>
           <div className="py-2">
           <Button theme="primary" onClick={() =>{
         logout();
         window.location.href = "/login";
        }}>
          Logout</Button></div>
         
        </div>
    </>
  );
};

Header.defaultProps = {
}

export default  memo(Header);