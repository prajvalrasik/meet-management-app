import {FC,memo} from 'react';
import {FaSpinner} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {useFormik,} from "formik";
import * as yup from "yup";
import InputBox from '../components/InputBox/InputBox';
import Button from '../components/Button/Button';

interface Props {
}

const SignupPage: FC<Props> = (props) => {
  const {handleSubmit , getFieldProps , touched , isSubmitting , errors} = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: ""
    },
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(8, (min)=> "Atleast" + min+ " characters" ),
      username: yup.string().required().min(2)
    }),
    onSubmit: (data , { setSubmitting })=> {
      console.log("form submitting",data);
      setTimeout(()=>{
        console.log("Form submitted successfully");
        setSubmitting(false);
      },5000)
    }
  })
  
  return (
    <div className="min-h-screen w-1/2 flex items-center justify-center bg-gray-50">
      <div className="space-y-4">
      <p className="text-4xl">Get started with a <br/>free account</p>
      <p className="mt-2 text-base">Already have an account? <Link to="/login" className="text-red-900 underline">Log in</Link></p>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} >

          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">

            <InputBox
              id="Username"
              type="username"
              autoComplete="username"
              placeholder="User Name"
              required
              {...getFieldProps("username")}
              touched= {touched.username}
              error= {errors.username}
            ></InputBox>

            <InputBox
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
            

            <div className="text-sm">
            <div className="flex">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-5 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded "
              />
              <label htmlFor="remember-me" className="ml-2 mb-2 block text-sm text-gray-400">
                I agree to the terms and conditions.
              </label>
          </div>
            </div>
          </div>

          <div className="flex flex-row  w-full justify-end">
            <Button theme="primary" look="solid" >Log In</Button>
            {isSubmitting && <FaSpinner className="animate-spin mt-5"></FaSpinner> }
          </div>
        </form>

        

        <p className="pt-6">© 2020 All Rights Reserved.<span className="text-red-900"> CORK</span> is a product of <br /> Designreset. <span className="text-red-900 ">Cookie Preferences, Privacy, and Terms.</span></p>
      </div>
    </div>
  );
};

SignupPage.defaultProps = {
}

export default  memo(SignupPage);