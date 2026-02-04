import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import ServiceCard from '../components/common/ServiceCard';
import Button from '../components/common/Button';
import { generateOrganizationSchema, generateBreadcrumbSchema } from '../utils/schema';
import './Home.css';

const Home = () => {
    const organizationSchema = generateOrganizationSchema();
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://www.zillioninternational.com/' }
    ]);

    const services = [
        {
            icon: '🎧',
            title: 'Customer Support Outsourcing',
            description: 'Deliver exceptional customer experiences with our 24/7 multilingual support teams trained in your industry.',
            link: '/services'
        },
        {
            icon: '💻',
            title: 'Technical Support Services',
            description: 'Expert technical support outsourcing for software, hardware, and IT infrastructure with rapid resolution times.',
            link: '/services'
        },
        {
            icon: '📊',
            title: 'Back Office Outsourcing',
            description: 'Streamline operations with our data entry, processing, and administrative support services.',
            link: '/services'
        },
        {
            icon: '⚙️',
            title: 'IT & Software Solutions',
            description: 'Custom software development, cloud solutions, and IT infrastructure management for growing businesses.',
            link: '/services'
        },
        {
            icon: '📈',
            title: 'Lead Generation',
            description: 'Drive growth with targeted lead generation and appointment setting services for B2B companies.',
            link: '/services'
        }
    ];

    return (
        <>
            <SEO
                title="Global BPO & IT Solutions for USA, UK & UAE Businesses"
                description="Leading BPO services for US companies, IT solutions provider UK UAE. Outsourced customer support services, back office outsourcing, and technical support outsourcing company."
                keywords="BPO services for US companies, IT solutions provider UK UAE, outsourced customer support services, back office outsourcing services, technical support outsourcing company"
                canonical="/"
                schema={[organizationSchema, breadcrumbSchema]}
            />

            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero__content">
                        <h1 className="hero__title fade-in">
                            Global BPO & IT Solutions for USA, UK & UAE Businesses
                        </h1>
                        <p className="hero__subtitle slide-in-left">
                            Transform your business operations with world-class outsourced customer support services,
                            technical support, and back office solutions. Trusted by leading companies across USA, UK, and UAE.
                        </p>
                        <div className="hero__cta slide-in-right">
                            <Link to="/contact">
                                <Button variant="primary" size="lg">
                                    Get a Free Quote
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button variant="secondary" size="lg">
                                    Explore Services
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Signals */}
            <section className="trust-section section">
                <div className="container">
                    <div className="trust-stats">
                        <div className="trust-stat">
                            <div className="trust-stat__value">500+</div>
                            <div className="trust-stat__label">Global Clients</div>
                        </div>
                        <div className="trust-stat">
                            <div className="trust-stat__value">98%</div>
                            <div className="trust-stat__label">Client Satisfaction</div>
                        </div>
                        <div className="trust-stat">
                            <div className="trust-stat__value">24/7</div>
                            <div className="trust-stat__label">Support Available</div>
                        </div>
                        <div className="trust-stat">
                            <div className="trust-stat__value">15+</div>
                            <div className="trust-stat__label">Years Experience</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Comprehensive BPO & IT Solutions</h2>
                        <p className="section-subtitle">
                            Delivering excellence in customer support, technical support, and back office outsourcing services
                            to businesses across USA, UK, and UAE markets.
                        </p>
                    </div>
                    <div className="grid grid-3">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                    <div className="section-cta text-center">
                        <Link to="/services">
                            <Button variant="primary" size="lg">
                                View All Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-section section bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Why Choose Zillion International</h2>
                        <p className="section-subtitle">
                            Your trusted BPO & IT solutions provider for USA, UK, and UAE markets
                        </p>
                    </div>
                    <div className="grid grid-2">
                        <div className="feature-card card">
                            <h3>🌍 Global Reach, Local Expertise</h3>
                            <p>
                                With dedicated teams serving USA, UK, and UAE markets, we understand local business needs
                                and cultural nuances while delivering world-class BPO services.
                            </p>
                        </div>
                        <div className="feature-card card">
                            <h3>💼 Industry-Specific Solutions</h3>
                            <p>
                                Specialized outsourcing services for Healthcare, FinTech, E-commerce, SaaS, Logistics,
                                and Real Estate industries with proven track records.
                            </p>
                        </div>
                        <div className="feature-card card">
                            <h3>🔒 Data Security & Compliance</h3>
                            <p>
                                ISO certified processes, GDPR compliant operations, and enterprise-grade security
                                for your sensitive business data and customer information.
                            </p>
                        </div>
                        <div className="feature-card card">
                            <h3>📊 Scalable & Flexible</h3>
                            <p>
                                Scale your operations up or down based on demand. Our flexible engagement models
                                adapt to your business needs and growth trajectory.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Ready to Transform Your Business Operations?</h2>
                        <p>
                            Get a free consultation with our BPO experts and discover how we can help you
                            reduce costs, improve efficiency, and scale your business.
                        </p>
                        <Link to="/contact">
                            <Button variant="primary" size="lg">
                                Schedule Free Consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
