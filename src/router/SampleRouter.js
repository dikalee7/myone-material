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
            title: 'Sample1',
            hideBack: false,
            hideHome: false,
          }}
        />
      ),
    },
  ];
  return { router };
};

export default SampleRouter;
