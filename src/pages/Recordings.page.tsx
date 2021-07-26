import {FC,memo} from 'react';
import { Link } from 'react-router-dom';

interface Props {
}

const Recordings: FC<Props> = (props) => {
  return (
    <div className="mt-4 ml-4">
      Welcome To The Recording Page 
      <Link to="/dashboard"><span className="text-blue-500"> Let's Get Back To Dashboard</span></Link>
    </div>
  );
};

Recordings.defaultProps = {
}

export default  memo(Recordings);