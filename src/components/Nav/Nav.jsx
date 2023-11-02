import { useReducer } from 'react';
import { switchLinkNav } from '../../libr/utils/switchLinkNav';
import { Link } from 'react-router-dom';
import {Container} from './NavStyled';

export const Nav = () => {
    const [state, dispatch] = useReducer(switchLinkNav, {
        home: false,
        startShips: true,
    }); 

    const { home,startShips } = state;
    return (
    <Container>
    <ul>
        <li
        onClick={()=>dispatch({type:"homeClick"})}
        className={home ? "active" : ""}
        >
            <Link to="">Home</Link>

        </li>

        <li
        onClick={()=>dispatch({type:"startShipsClick"})}
        className={startShips ? "active" : ""}
        >
            <Link to="">StartShips</Link>
        </li>
    </ul>
    </Container> 

 )
}