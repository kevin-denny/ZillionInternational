import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header className="header">
            <div className="container">
                <nav className="nav" role="navigation" aria-label="Main navigation">
                    <Link to="/" className="nav__logo">
                        <img src="/images/ZillionInt_withbg.jpeg" alt="Zillion International" className="nav__logo-img" />
                    </Link>

                    <button
                        className={`nav__toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul className={`nav__menu ${isMenuOpen ? 'active' : ''}`}>
                        <li className="nav__item">
                            <Link
                                to="/"
                                className={`nav__link ${isActive('/')}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to="/services"
                                className={`nav__link ${isActive('/services')}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to="/industries"
                                className={`nav__link ${isActive('/industries')}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Industries
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to="/about"
                                className={`nav__link ${isActive('/about')}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to="/case-studies"
                                className={`nav__link ${isActive('/case-studies')}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Case Studies
                            </Link>
                        </li>
                        <li className="nav__item nav__item--cta">
                            <Link
                                to="/contact"
                                className="btn btn-primary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
