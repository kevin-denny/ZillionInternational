import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './IndustryCard.css';

const IndustryCard = ({ icon, title, description, link }) => {
    return (
        <Link to={link} className="industry-card card">
            <div className="industry-card__icon">{icon}</div>
            <h3 className="industry-card__title">{title}</h3>
            <p className="industry-card__description">{description}</p>
            <span className="industry-card__cta">Explore Solutions →</span>
        </Link>
    );
};

IndustryCard.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default IndustryCard;
