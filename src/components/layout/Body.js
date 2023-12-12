import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Body = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Body;
