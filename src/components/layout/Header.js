import { AppBar, Box, Toolbar, Typography, Container } from '@mui/material';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import HomeIcon from '@mui/icons-material/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import { useContext, useEffect } from 'react';
import { HeaderContext } from 'App';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: teal,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const Header = () => {
  const { $header } = useContext(HeaderContext);
  const headerInfo = $header[0];
  const navigate = useNavigate();

  useEffect(() => {
    console.log('useEffect!!', headerInfo);
  });

  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };

  const goHome = () => {
    // articles 경로로 이동
    navigate('/');
  };

  const homeArea = <HomeIcon sx={{ mr: 1 }} onClick={goHome} />;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position='static'>
          <Container maxWidth='xl'>
            <Toolbar disableGutters>
              {headerInfo.hideBack ? (
                <AccountBalanceWalletTwoToneIcon sx={{ mr: 1 }} />
              ) : (
                <ArrowCircleLeftIcon sx={{ mr: 1 }} onClick={goBack} />
              )}

              <Typography
                variant='h6'
                noWrap
                // component='a'
                // href='#app-bar-with-responsive-menu'
                sx={{
                  mr: 2,
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                {headerInfo.title}
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              {!headerInfo.hideHome ? (
                <Box
                  sx={{
                    flexGrow: 0,
                    // display: {
                    //   xs: 'flex or none',
                    //   sm: 'flex or none',
                    //   md: 'flex or none',
                    //   lg: 'flex or none',
                    //   xl: 'flex or none',
                    // },
                  }}
                >
                  {homeArea}
                </Box>
              ) : (
                <Box sx={{ flexGrow: 0 }} />
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Header;
