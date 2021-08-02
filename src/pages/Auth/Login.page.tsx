import {FC,memo} from 'react';
import {useHistory} from "react-router-dom";
import {FiLock, FiUser} from "react-icons/fi"
import {FaSpinner} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {useFormik} from "formik";
import * as yup from "yup";
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';
import { login } from '../../api/auth';
import { User } from "../../models/User";



interface Props {
  onLogin : (user : User ) => void;

}

const LoginPage: FC<Props> = (props) => {

  const history=useHistory();


  const {handleSubmit , getFieldProps , touched , isSubmitting , errors} = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(8, (min)=> "Atleast" + min+ " characters" )
    }),
    onSubmit :(data) => {
      console.log("form submiting ",data);
      login(data).then((u) =>
      {
        props.onLogin(u);
        history.push("/dashboard");
      });
    },
  });
  
  return (
    <div className="min-h-screen w-1/2 flex items-center justify-center bg-gray-50">
      <div className="space-y-8">
      <p className="text-4xl">Log In to <span className="text-gray-700 font-semibold">MEETEMP</span></p>
      <p className="mt-2 text-base">New Here? <Link to="/signup" className="text-red-900 underline">Create an account</Link></p>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} >

          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">

            <InputBox
              Icon={FiUser}
              id="email-address"
              type="email"
              autoComplete="email"
              placeholder="Email Address"
              required
              {...getFieldProps("email")}
              touched= {touched.email}
              error= {errors.email}
            ></InputBox>

            <InputBox
              Icon={FiLock}
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              required
              {...getFieldProps("password")}
              touched= {touched.password}
              error= {errors.password}
            ></InputBox>

            
          </div>

          <div className="flex items-center justify-between">
          <div className="flex">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-5 w-4 text-red-800 focus:ring-red-800 border-gray-300 rounded "
              />
              <label htmlFor="remember-me" className="ml-2 mb-2 block text-sm text-gray-400">
                Keep me logged in
              </label>
          </div>

            {/* <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div> */}
          </div>

          <div className="flex flex-row  w-full justify-end">
            <Button theme="primary" look="solid" >Log In</Button>
            {isSubmitting && <FaSpinner className="animate-spin mt-5"></FaSpinner> }
          </div>
        </form>

        <div className="w-full text-center items-center">

          <Link to="/forgot-password" className="font-medium w-full text-center text-gray-800 hover:text-red-800">
                Forgot password?
          </Link>
        </div>

        <p className="mt-2">© 2020 All Rights Reserved.<Link to="/dashboard" className="text-red-900"> CORK</Link> is a product of <br /> Designreset. <span className="text-red-900 ">Cookie Preferences, Privacy, and Terms.</span></p>
      </div>
    </div>
  );
};

LoginPage.defaultProps = {
}

export default  memo(LoginPage);