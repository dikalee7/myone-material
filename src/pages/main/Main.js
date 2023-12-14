import WithBase from 'components/layout/WithBase';
import CardView from 'components/ui/CardView';
import { useEffect } from 'react';

const Main = ({ $baseInit, $mo }) => {
  useEffect(() => {
    $baseInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <CardView />
    </>
  );
};

export default WithBase(Main, 'Main');
