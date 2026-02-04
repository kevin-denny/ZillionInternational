import PropTypes from 'prop-types';
import './CaseStudyCard.css';

const CaseStudyCard = ({ title, industry, challenge, solution, results, metrics }) => {
    return (
        <article className="case-study-card card">
            <div className="case-study-card__header">
                <span className="case-study-card__industry">{industry}</span>
                <h3 className="case-study-card__title">{title}</h3>
            </div>

            <div className="case-study-card__content">
                <div className="case-study-card__section">
                    <h4>Challenge</h4>
                    <p>{challenge}</p>
                </div>

                <div className="case-study-card__section">
                    <h4>Solution</h4>
                    <p>{solution}</p>
                </div>

                <div className="case-study-card__section">
                    <h4>Results</h4>
                    <p>{results}</p>
                </div>
            </div>

            {metrics && (
                <div className="case-study-card__metrics">
                    {metrics.map((metric, index) => (
                        <div key={index} className="metric">
                            <div className="metric__value">{metric.value}</div>
                            <div className="metric__label">{metric.label}</div>
                        </div>
                    ))}
                </div>
            )}
        </article>
    );
};

CaseStudyCard.propTypes = {
    title: PropTypes.string.isRequired,
    industry: PropTypes.string.isRequired,
    challenge: PropTypes.string.isRequired,
    solution: PropTypes.string.isRequired,
    results: PropTypes.string.isRequired,
    metrics: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    )
};

export default CaseStudyCard;
