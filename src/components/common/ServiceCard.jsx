import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, link }) => {
    return (
        <div className="service-card card">
            <div className="service-card__icon">{icon}</div>
            <h3 className="service-card__title">{title}</h3>
            <p className="service-card__description">{description}</p>
            <Link to={link} className="service-card__link">
                Learn More →
            </Link>
        </div>
    );
};

ServiceCard.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default ServiceCard;
