import {FC,memo} from 'react';
import { HiOutlineBell, HiOutlineMail, HiOutlineMenu } from 'react-icons/hi';
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
    </>
  );
};

Header.defaultProps = {
}

export default  memo(Header);