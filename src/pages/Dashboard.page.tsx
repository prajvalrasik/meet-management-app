import {FC,memo} from 'react';
import { Link } from 'react-router-dom';

interface Props {
}

const Dashboard: FC<Props> = (props) => {
  return (
    <div className="mt-4 ml-4">
      Welcome To The Dashboard
      <Link to="/recordings"><span className="text-blue-500">    Let's Go To Recordings</span></Link>
    </div>
  );
};

Dashboard.defaultProps = {
}

export default  memo(Dashboard);