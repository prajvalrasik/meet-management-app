import {FC,memo} from 'react';
import { HiOutlineChevronRight, HiOutlineHome,HiOutlineChip, HiOutlineCube, HiOutlineLightningBolt ,HiOutlineStop
 ,HiOutlineTable, HiOutlineClipboard ,HiOutlineUserGroup, HiOutlineDocument ,HiOutlineLockClosed,
HiOutlineDocumentReport} from 'react-icons/hi';
import { useHistory } from "react-router-dom";




interface Props {
}

const Sidebar: FC<Props> = (props) => {
  const history = useHistory();
  return (
    <div className=" bg-gray-100 h-screen w-52">
      <div >
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineHome className="inline-block mb-1 mr-2 w-5 h-5 text-gray-600"/> Dashboard <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineChip className="inline-block mr-2 w-5 h-5 text-gray-600"/>Apps  <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineCube className="inline-block mr-2 w-5 h-5 text-gray-600"/>Components <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineLightningBolt className="inline-block mr-2 w-5 h-5 text-gray-600"/>Elements <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineStop className="inline-block mr-2 w-5 h-5 text-gray-600"/>Font Icons</button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineTable className="inline-block mr-2 w-5 h-5 text-gray-600"/>Tables</button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineClipboard className="inline-block mr-2 w-5 h-5 text-gray-600"/>Forms <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineUserGroup className="inline-block mr-2 w-5 h-5 text-gray-600"/>Users <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineDocument className="inline-block mr-2 w-5 h-5 text-gray-600"/>Pages <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineLockClosed className="inline-block mr-2 w-5 h-5 text-gray-600"/>Authentication <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineDocumentReport className="inline-block mr-2 w-5 h-5 text-gray-600"/>Documentation</button>
      </div>
    </div>
  );
};

Sidebar.defaultProps = {
}

export default  memo(Sidebar);