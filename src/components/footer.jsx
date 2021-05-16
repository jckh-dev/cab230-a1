import {
    Link
}
    from "react-router-dom";
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
const Footer = () => {
    return (
        <footer>
            <Nav className="justify-content-around">
                <NavItem>
                    <NavLink tag={Link} to="/home" >Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/home" >About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/home" >Privacy</NavLink>
                </NavItem>
            </Nav>
        </footer>
    );
};

export default Footer;