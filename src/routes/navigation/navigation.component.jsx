import { Fragment } from 'react'; // Fragment is a component that doesn't render anything to the DOM, it just wraps other components
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'; // ReactComponent is a special import syntax that tells Create React App
// that you want a React component that renders an SVG, rather than its filename
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link to="/" className="logo-container">
                    <Logo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link to="/shop" className="nav-link">SHOP</Link>
                    <Link to="/sign-in" className="nav-link">SIGN IN</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
