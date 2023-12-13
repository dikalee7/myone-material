import WithBase from 'components/layout/WithBase';
import { useEffect } from 'react';

const Sample1 = ({ $baseInit, $mo }) => {
  useEffect(() => {
    $baseInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>Sample1</>;
};

export default WithBase(Sample1, 'Sample1');
