import Button from "../../commons/Button";
import { useState } from 'react';



function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleChangeUsername = event => {
        setUsername(event.target.value)
        
    };
    const handleChangePassword = event => {
        setPassword(event.target.value)
    }

    return <div className="loginPage">
        <h1 className="loginPage-title">Log in to ReactPop</h1>
        <form>
            <input
                type="text"
                name="username"
                value={username}
                onChange={handleChangeUsername} />
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChangePassword} />
            <Button
                type="submit"
                variant="primary"
                disabled={!username || !password}>
                Log in
            </Button>
        </form>
    </div>
};
export default LoginPage;