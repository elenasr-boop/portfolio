import { Nav, NavLink } from "./Navigation.styled";

export function Navigation () {
    return (
        <Nav>
            <NavLink to="/" data-content="Home" >Home</NavLink>
            <NavLink to="/about" data-content="About" >About</NavLink>
            <NavLink to="/contacts" data-content="Contacts" >Contacts</NavLink>
        </Nav>
    )
}