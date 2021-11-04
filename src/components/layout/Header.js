import classNames from "classnames";
import Button from "../commons/Button";

import {ReactComponent as Icon} from '../../assets/logo.svg'

function Header({ className, isLogged }) {
    return (
        <header className={classNames('header', className)}>
        <div className="header-logo">
            <Icon width="32" height="32"/>
        </div>
            <nav className="header-nav">
                {isLogged ? (
                    <Button  className="header-button">Log out</Button>
                ) : (
                    <Button variant ="primary" className="header-button">Log in</Button>  
                )

                }
        </nav>
    </header>
    )
}

export default Header;