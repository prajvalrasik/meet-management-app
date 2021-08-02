import { InputHTMLAttributes } from 'react';
import { FC,memo} from 'react';
import { IconType } from "react-icons";


interface Props extends InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
    error?: string;
    placeholder?: string;
    Icon? : IconType;
    Iconclass? : string;

}

const Input: FC<Props> = ({touched, error , className, Icon, Iconclass, placeholder, id , ...rest}) => {
  return (
    <>
      <div>
      { Icon && ( <Icon className= {" absolute h-6 w-6 text-blue-600 fill-blue " + Iconclass} /> )}

       { id && placeholder && (<label htmlFor={id} className="sr-only">  {/* sr-only makes the div hidden but able to be read by screen reader thus making it useful for screen readers */}
            {placeholder}
        </label>) }
        <input
            id={id}
            {...rest}
            className={"appearance-none rounded-none relative block w-full py-2 my-3 border-b border-gray-400 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" + className }
            placeholder={placeholder}
        />
        </div>
        { touched && <div className="text-red-600">{error}</div> }
    </>
  );
};

Input.defaultProps = {
  placeholder: "Enter Your Details",
}

export default  memo(Input);