import './appHeader.scss';
//import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                
                    <a href="https://dim.gov.az/">
                        <span>Marvel</span> information portal
                    </a>
              

            </h1>
            <nav className="app__menu">
                <ul>
                    <li>
                        <NavLink
                        activeStyle={{'color':'#9f0013'}}
                         exact to="/">Characters</NavLink>
                    </li>/
                    <li>
                        <NavLink 
                        activeStyle={{'color':'#9f0013'}}
                        exact
                        to="/comics">Comics</NavLink>
                    </li>


                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;