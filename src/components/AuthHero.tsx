import {FC,memo} from 'react';

interface Props {
}

const AuthHero: FC<Props> = (props) => {
  return (
    <div className="h-screen w-1/2 bg-gray-800 flex items-center justify-center">
      <img src="https://pbs.twimg.com/media/E7Njh71XsAE-Mgb?format=png&name=small" />
    </div>
  );
};

AuthHero.defaultProps = {
}

export default  memo(AuthHero);