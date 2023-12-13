/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import LoadingOverlay from 'components/LoadingOverlay';

import { LoadingContext, CmnContext, HeaderContext } from 'App';
import { baseHeader } from 'constants/HeaderInfo';
import { useEmitter, useMo } from 'utils';
import useApi from 'services';

import { Container } from '@mui/material';

const Body = () => {
  const $loading = useState(false);
  const $header = useState(baseHeader);

  const $emitter = useCallback(useEmitter(), []);
  const $mo = useCallback(useMo($emitter), [$emitter]);
  const $api = useCallback(useApi($mo, $loading), [$emitter]);
  return (
    <>
      <CmnContext.Provider value={{ $emitter, $mo, $api }}>
        <LoadingContext.Provider value={{ $loading }}>
          <HeaderContext.Provider value={{ $header }}>
            <Header />
            <main>
              <Container style={{ minHeight: '80vh' }}>
                <Outlet />
              </Container>
            </main>
            <Footer />
            <LoadingOverlay />
          </HeaderContext.Provider>
        </LoadingContext.Provider>
      </CmnContext.Provider>
    </>
  );
};

export default Body;
