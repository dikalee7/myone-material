import { baseHeader } from '../constants/HeaderInfo';
import Sample1 from '../pages/sample/Sample1';

const SampleRouter = () => {
  const router = [
    {
      path: '/sample1',
      element: (
        <Sample1
          headerInfo={{
            ...baseHeader,
            title: 'MY ONE',
            hideBack: true,
            hideHome: true,
          }}
        />
      ),
    },
  ];
  return { router };
};

export default SampleRouter;
