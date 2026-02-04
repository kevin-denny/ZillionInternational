import SEO from '../components/common/SEO';
import Breadcrumb from '../components/layout/Breadcrumb';
import ServiceCard from '../components/common/ServiceCard';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import { generateServiceSchema } from '../utils/schema';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: '🎧',
            title: 'Customer Support Outsourcing',
            description: 'Deliver exceptional customer experiences with our 24/7 multilingual support teams. Our outsourced customer support services include phone, email, chat, and social media support trained specifically for your industry and brand voice.',
            link: '/contact'
        },
        {
            icon: '💻',
            title: 'Technical Support Services',
            description: 'Expert technical support outsourcing for software, hardware, and IT infrastructure. Our certified technicians provide L1, L2, and L3 support with rapid resolution times and comprehensive documentation.',
            link: '/contact'
        },
        {
            icon: '📊',
            title: 'Back Office & Admin Outsourcing',
            description: 'Streamline your operations with our comprehensive back office outsourcing services including data entry, document processing, accounting support, HR administration, and workflow management.',
            link: '/contact'
        },
        {
            icon: '⚙️',
            title: 'IT & Software Solutions',
            description: 'Custom software development, cloud migration, infrastructure management, and IT consulting services. We help businesses leverage technology for competitive advantage and operational efficiency.',
            link: '/contact'
        },
        {
            icon: '📈',
            title: 'Lead Generation & Appointment Setting',
            description: 'Drive growth with targeted B2B lead generation, appointment setting, and sales support services. Our experienced teams help you fill your pipeline with qualified prospects.',
            link: '/contact'
        },
        {
            icon: '📞',
            title: 'Inbound & Outbound Call Center',
            description: 'Professional call center services for inbound customer service, outbound sales, telemarketing, surveys, and market research. Scalable solutions for businesses of all sizes.',
            link: '/contact'
        }
    ];

    const serviceSchemas = services.map(service => generateServiceSchema({
        name: service.title,
        description: service.description,
        type: 'BPO Service'
    }));

    return (
        <>
            <SEO
                title="BPO & IT Services - Customer Support, Technical Support & Back Office Outsourcing"
                description="Comprehensive BPO services for US companies including outsourced customer support services, technical support outsourcing, back office outsourcing services, and IT solutions for UK and UAE markets."
                keywords="BPO services for US companies, outsourced customer support services, technical support outsourcing company, back office outsourcing services, IT solutions provider UK UAE"
                canonical="/services"
                schema={serviceSchemas}
            />

            <Breadcrumb />

            <section className="page-header">
                <div className="container">
                    <h1>Comprehensive BPO & IT Solutions</h1>
                    <p className="page-subtitle">
                        World-class outsourcing services designed to reduce costs, improve efficiency,
                        and scale your business operations across USA, UK, and UAE markets.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="services-intro">
                        <h2>Our BPO Services</h2>
                        <p>
                            As a leading BPO services provider for US companies and IT solutions provider for UK and UAE markets,
                            we deliver comprehensive outsourcing solutions tailored to your industry needs. Our services help
                            businesses reduce operational costs by up to 60% while maintaining exceptional quality standards.
                        </p>
                    </div>

                    <div className="grid grid-2">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="benefits-section section bg-light">
                <div className="container">
                    <h2 className="text-center">Benefits of Our BPO Services</h2>
                    <div className="benefits-grid">
                        <div className="benefit-item">
                            <div className="benefit-icon">💰</div>
                            <h3>Cost Reduction</h3>
                            <p>Save up to 60% on operational costs compared to in-house teams</p>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">⚡</div>
                            <h3>24/7 Operations</h3>
                            <p>Round-the-clock support across all time zones</p>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">📈</div>
                            <h3>Scalability</h3>
                            <p>Easily scale up or down based on business demands</p>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">🎯</div>
                            <h3>Focus on Core Business</h3>
                            <p>Free up resources to focus on strategic initiatives</p>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">🏆</div>
                            <h3>Quality Assurance</h3>
                            <p>ISO-certified processes and continuous quality monitoring</p>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">🌐</div>
                            <h3>Global Expertise</h3>
                            <p>Experienced teams serving USA, UK, and UAE markets</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Ready to Optimize Your Business Operations?</h2>
                        <p>
                            Schedule a free consultation to discuss your BPO and IT outsourcing needs.
                            Our experts will help you design a custom solution that fits your budget and goals.
                        </p>
                        <Link to="/contact">
                            <Button variant="primary" size="lg">
                                Get Free Consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
