import { Container } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Router from './components/Router';



function App() {
  return (
      <BrowserRouter>
        <Header /> 
        <Container sx={{ mt: 8, mb: 2 }}>
          <Router />
        </Container>
      </BrowserRouter>
  )
}

export default App;
