import WithBase from 'components/layout/WithBase';
import { useEffect } from 'react';

const Main = ({ $baseInit, $mo }) => {
  useEffect(() => {
    $baseInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>Hello world</>;
};

export default WithBase(Main, 'Main');
