import { ButtonHTMLAttributes } from 'react';
import {FC,memo} from 'react';
// import { HiLockClosed } from 'react-icons/hi';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: 'primary' | 'secondary' | 'success' | 'danger';
    children: string;
    look?: 'solid' | 'outline';
    className?: string;
}

const Button: FC<Props> = ({children, className , theme , look , ...rest}) => {

    var themeSolidClasses;
    var themeOutlineClasses;

    if(theme === 'primary'){ themeSolidClasses = "  text-white bg-gray-700 hover:bg-gray-400 " ; themeOutlineClasses =" border-2 border-blue-500 bg-blue-100 text-blue-600 hover:bg-blue-200 "}
    else if(theme === 'danger'){ themeSolidClasses = "  text-white bg-red-500 hover:bg-red-400 " ; themeOutlineClasses =" border-2 border-red-500 bg-red-100 text-red-600 hover:bg-red-200 "} 
    else if(theme === 'success'){ themeSolidClasses = "  text-white bg-green-500 hover:bg-green-400 " ; themeOutlineClasses =" border-2 border-green-500 bg-green-100 text-green-600 hover:bg-greeb-200 "} 
    else if(theme === 'secondary'){ themeSolidClasses = "  text-white bg-purple-500 hover:bg-purple-400 " ; themeOutlineClasses =" border-2 border-purple-500 bg-purple-100 text-purple-600 hover:bg-purple-200 "}
 
    var lookClasses = (look === 'solid')? ( " "+themeSolidClasses+" ") : (" "+ themeOutlineClasses + " ")

  return (
    <div className="space-x-2">
    <button
          {...rest}
          className= {"transition-shadow px-5 py-2 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 " + className + " " + lookClasses }
          >
          <span className="absolute left-0 pl-1 inset-y-0 flex items-center pl-3">
            {/* <HiLockClosed className="h-5 w-5 " aria-hidden="true" /> */}
          </span>
          {children}
    </button>
    </div>
  );
};

Button.defaultProps = {
    theme: 'primary',
    children: "",
    look : 'solid'
}

export default  memo(Button);