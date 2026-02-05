import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__section">
                        <h3 className="footer__title">Zillion International</h3>
                        <p className="footer__description">
                            Empowering Global Solutions provider serving USA, UK, and UAE markets with excellence in customer support, technical support, and back office outsourcing.
                        </p>
                        <div className="footer__social">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer__section">
                        <h4 className="footer__heading">Services</h4>
                        <ul className="footer__links">
                            <li><Link to="/services">Customer Support Outsourcing</Link></li>
                            <li><Link to="/services">Technical Support Services</Link></li>
                            <li><Link to="/services">Back Office Outsourcing</Link></li>
                            <li><Link to="/services">IT & Software Solutions</Link></li>
                            <li><Link to="/services">Lead Generation</Link></li>
                        </ul>
                    </div>

                    <div className="footer__section">
                        <h4 className="footer__heading">Industries</h4>
                        <ul className="footer__links">
                            <li><Link to="/industries">Healthcare</Link></li>
                            <li><Link to="/industries">FinTech</Link></li>
                            <li><Link to="/industries">E-commerce</Link></li>
                            <li><Link to="/industries">SaaS</Link></li>
                            <li><Link to="/industries">Logistics</Link></li>
                            <li><Link to="/industries">Real Estate</Link></li>
                        </ul>
                    </div>

                    <div className="footer__section">
                        <h4 className="footer__heading">Company</h4>
                        <ul className="footer__links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/case-studies">Case Studies</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer__section">
                        <h4 className="footer__heading">Contact</h4>
                        <ul className="footer__contact">
                            <li>info@zillioninternational.com</li>
                            <li>+1 (XXX) XXX-XXXX</li>
                            <li>USA | UK | UAE</li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>&copy; {currentYear} Zillion International. All rights reserved.</p>
                    <div className="footer__legal">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
