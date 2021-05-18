import {
    Link, Redirect
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
            {/* footer elements to display */}
            <Nav className="justify-content-around">
                <NavItem>
                    <Redirect from="/" to ="/home" />
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