import Button from "../../commons/Button";
import { useState } from 'react';
import { login } from '../service';
import { FormField } from '../../commons'
import "./LoginPage.css"
import { AuthContextConsumer } from "../context";
import T from 'prop-types';


function LoginPage({onLogin, history, location}) {

    const [value, setValue] = useState({ username: '', password: '' });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const resetError = () => setError(null)
   
    
    const handleChange = event => {
        setValue((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
        
    };
   
    const handledSubmit =  async event => {
        event.preventDefault();
        setIsLoading(true);
        resetError();
        try {
            await login(value);
            setIsLoading(false)
            onLogin();
            const{from}  = location.state || {from:{pathname:'/'}}
            history.replace(from)
            
        } catch (error) {
            setError(error);
            setIsLoading(false)
        } 

    }

    return <div className="loginPage">
        <h1 className="loginPage-title">Log in to ReactPop</h1>
        <form  className="loginForm" onSubmit={handledSubmit}>
            <FormField
                type="text"
                name="username"
                label="phone, email or username"
                className = "loginForm-field"
                value={value.username}
                onChange={handleChange}
                autofocus
            />
            <FormField
                type="password"
                name="password"
                label = "password"
                value={value.password}
                onChange={handleChange} />
            <Button
                className="loginForm-submit"
                type="submit"
                variant="primary"
                disabled={isLoading || !value.username || !value.password}>
                Log in
            </Button>
        </form>
        {error && <div onClick={resetError} className="loginPage-error">{error.message }</div>}
    </div>
};

LoginPage.propTypes = {
    onLogin:T.func.isRequired
}

const ConnectedLoginPage = (props) => (
    
    <AuthContextConsumer>
        {auth => <LoginPage onLogin={auth.handleLogin} {...props} />}
    </AuthContextConsumer>
);

export default ConnectedLoginPage;

