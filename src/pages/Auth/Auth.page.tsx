import {FC,memo} from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthHero from '../../components/AuthHero';
import LoginPage from './Login.page';
import SignupPage from './Signup.page';
import { User } from "../../models/User";


interface Props {
  onLogin : (user : User) => void;
}

const Auth: FC<Props> = ({ onLogin }) => {
  return (
    <div className="flex flex-row justify-between">
      <Switch>
          <Route path="/login">
          <LoginPage onLogin={onLogin} />
          </Route>
          <Route path="/signup">
              <SignupPage></SignupPage>
          </Route>
      </Switch>
      <AuthHero></AuthHero>
    </div>
  );
};

Auth.defaultProps = {
}

export default  memo(Auth);