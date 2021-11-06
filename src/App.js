import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect,} from 'react-router-dom';
import AnuncioDetailPage from './components/anuncios/AnuncioDetailPage/AnuncioDetailPage';
import AnunciosPage from './components/anuncios/anunciosPage/AnunciosPage';
import NewAnuncioPage from './components/anuncios/newAnuncioPage/newAnuncioPage';
import LoginPage, { PrivateRoute } from './components/auth/LoginPage';
import { logout } from './components/auth/service';
import { AuthContextProvider } from './components/auth/context';




function App({ isInitiallyLogged }) {
  
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => { setIsLogged(true) };

  const handleLogout = () => {
    logout().then(() => setIsLogged(false));
  };


  return (
    <Router>
      <AuthContextProvider value={{isLogged, handleLogout, handleLogin}}>
        <div className='app' >
          {/* <AnunciosPage />
          <NewAnuncioPage />
          <AnuncioDetailPage/> */}
          <Switch>
            <Route path="/login">
              {(routerProps) => <LoginPage {...routerProps} />}
            </Route>
            <PrivateRoute path="/anuncios/new" component={NewAnuncioPage} />
            <Route path="/anuncios/:anuncioId" component={AnuncioDetailPage}/>
            <Route path="/anuncios" component={AnunciosPage} />
            <Route path="/"><Redirect to="/anuncios"></Redirect></Route>
          </Switch>
        </div>
      </AuthContextProvider>
    </Router>
    );

  }
  export default App;

