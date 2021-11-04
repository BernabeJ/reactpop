import { useState } from 'react';
import './App.css';
import AnuncioDetailPage from './components/anuncios/AnuncioDetailPage/AnuncioDetailPage';
import AnunciosPage from './components/anuncios/anunciosPage/AnunciosPage';
import NewAnuncioPage from './components/anuncios/newAnuncioPage/newAnuncioPage';
import LoginPage from './components/auth/LoginPage';



function App() {
  
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => setIsLogged(true)

  return (
    <div className='app' >
      {/* <AnunciosPage />
      <NewAnuncioPage />
      <AnuncioDetailPage/> */}
      {isLogged ? <AnunciosPage isLogged={isLogged} /> : <LoginPage onLogin={ handleLogin }/> }
      
    </div>
  );
}

export default App;
