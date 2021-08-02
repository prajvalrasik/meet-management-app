import { useState } from 'react';
import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route , Redirect, Switch } from 'react-router-dom';
import { me } from './api/auth';
import { LS_LOGIN_TOKEN } from './api/base';
import { User } from './models/User';
import AppContainerPageLazy from './pages/AppContainer/AppContainer.lazy';
import AppContainerPage from './pages/AppContainer/AppContainer.page';
import AuthPageLazy from './pages/Auth/Auth.lazy';
import AuthPage from './pages/Auth/Auth.page';
import NotFoundPage from './pages/NotFound.page';
import {ImSpinner2} from "react-icons/im"


function App() { 

  const [user, setuser ] = useState<User>()
  const token = localStorage.getItem( LS_LOGIN_TOKEN );

  useEffect(() => {
    if(!token) {
      return;
    }
    me().then((u) => setuser(u));
  },[]);

if(!user && token){
  return <ImSpinner2 className=" h-20 w-20 m-auto my-56 animate-spin text-gray-800 " />
}

  return (
    <Suspense fallback = {<ImSpinner2 className=" h-20 w-20 m-auto my-60 animate-spin text-gray-800 " ></ImSpinner2>  } >
     <BrowserRouter>
      <Switch>
       <Route path="/" exact>
         {user ? <Redirect to= "/dashboard"></Redirect> : <Redirect to="/login"></Redirect>}
      </Route>
       <Route path={["/Login", "/Signup"]} exact>
         { user ? <Redirect to="/dashboard" /> :  <AuthPageLazy onLogin={setuser} /> }
       </Route>
       <Route path={["/dashboard", "/recordings", "/batch/:batchNumber/lecture/:lectureNumber"]} exact>
        { user ? <AppContainerPageLazy user={user!} /> : <Redirect to="/login" /> }
       </Route>
        <Route>
          <NotFoundPage />

        </Route>
      
      </Switch>
      </BrowserRouter>
      </Suspense>
      
  );
}

export default App;