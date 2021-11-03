import './App.css';
import AnuncioDetailPage from './components/anuncios/AnuncioDetailPage/AnuncioDetailPage';
import AnunciosPage from './components/anuncios/anunciosPage/AnunciosPage';
import NewAnuncioPage from './components/anuncios/newAnuncioPage/newAnuncioPage';
import LoginPage from './components/auth/LoginPage';



function App() {
  return (
    <div className='app' >
      {/* <AnunciosPage />
      <NewAnuncioPage />
      <AnuncioDetailPage/> */}
      <LoginPage/>
    </div>
  );
}

export default App;
