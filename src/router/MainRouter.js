import Main from '../pages/main/Main';
import { baseHeader } from '../constants/HeaderInfo';

const MainRouter = () => {
  const router = [
    {
      path: '/',
      element: (
        <Main
          headerInfo={{
            ...baseHeader,
            title: 'MY ONE',
            hideBack: true,
            hideHome: true,
          }}
        />
      ),
    },
    {
      path: '/*',
      element: (
        <Main
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

export default MainRouter;
