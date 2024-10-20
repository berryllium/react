import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Router from './components/Router';
import { useState } from 'react';



function App() {

  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header switchDarkMode={() => setDarkMode(!darkMode)} />
        <Container sx={{ mt: 10 }}>
          <Router/>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
