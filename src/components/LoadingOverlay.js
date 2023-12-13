import React, { useContext } from 'react';
import Spinner from 'assets/images/spinner-50.gif';
import 'styles/main.css';
import { LoadingContext } from 'App';
const LoadingOverlay = () => {
  const { $loading } = useContext(LoadingContext);
  const [loading] = $loading;

  return (
    <>
      {loading && (
        <div className='loadingBox'>
          <img src={Spinner} alt='로딩중' />
          <div className='loadingText'>Loading...</div>
        </div>
      )}
    </>
  );
};

export default LoadingOverlay;
