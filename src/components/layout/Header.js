import classNames from "classnames";
import Button from "../commons/Button";

import {ReactComponent as Icon} from '../../assets/logo.svg'

function Header(className) {
    return (
        <header className={classNames('header', className)}>
        <div className="header-logo">
            <Icon width="32" height="32"/>
        </div>
        <nav className="header-nav">
        <Button variant ="primary" className="header-button"/>
        </nav>
    </header>
    )
}

export default Header;