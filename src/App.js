import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainRouter from './router/MainRouter';
import Body from './components/layout/Body';
import SampleRouter from './router/SampleRouter';

function App() {
  const router = createBrowserRouter([
    {
      element: <Body />,
      children: [...MainRouter().router, ...SampleRouter().router],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
