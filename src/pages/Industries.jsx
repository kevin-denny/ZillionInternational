import SEO from '../components/common/SEO';
import Breadcrumb from '../components/layout/Breadcrumb';
import IndustryCard from '../components/common/IndustryCard';
import './Industries.css';

const Industries = () => {
    const industries = [
        {
            icon: '🏥',
            title: 'Healthcare',
            description: 'HIPAA-compliant BPO services for healthcare providers including patient support, appointment scheduling, medical billing, and claims processing.',
            link: '/contact'
        },
        {
            icon: '💳',
            title: 'FinTech',
            description: 'Secure financial services outsourcing for banking, insurance, and fintech companies with PCI-DSS compliance and fraud prevention expertise.',
            link: '/contact'
        },
        {
            icon: '🛒',
            title: 'E-commerce',
            description: 'End-to-end e-commerce support including customer service, order processing, inventory management, and returns handling for online retailers.',
            link: '/contact'
        },
        {
            icon: '☁️',
            title: 'SaaS',
            description: 'Specialized support for SaaS companies including technical support, onboarding, customer success, and subscription management services.',
            link: '/contact'
        },
        {
            icon: '🚚',
            title: 'Logistics',
            description: 'Supply chain and logistics BPO services including dispatch support, shipment tracking, carrier coordination, and customer notifications.',
            link: '/contact'
        },
        {
            icon: '🏠',
            title: 'Real Estate',
            description: 'Real estate BPO services including lead qualification, appointment setting, property management support, and tenant communication.',
            link: '/contact'
        }
    ];

    return (
        <>
            <SEO
                title="Industries We Support - Healthcare, FinTech, E-commerce, SaaS & More"
                description="Specialized BPO services for Healthcare, FinTech, E-commerce, SaaS, Logistics, and Real Estate industries. Industry-specific outsourcing solutions for USA, UK, and UAE markets."
                keywords="healthcare BPO services, fintech outsourcing, e-commerce customer support, SaaS technical support, logistics BPO, real estate outsourcing"
                canonical="/industries"
            />

            <Breadcrumb />

            <section className="page-header">
                <div className="container">
                    <h1>Industries We Support</h1>
                    <p className="page-subtitle">
                        Industry-specific BPO and IT solutions tailored to your vertical's unique challenges
                        and compliance requirements across USA, UK, and UAE markets.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="industries-intro">
                        <h2>Vertical-Specific Expertise</h2>
                        <p>
                            Our industry-focused approach ensures that our teams understand your business challenges,
                            regulatory requirements, and customer expectations. We deliver specialized BPO services
                            that drive results in your specific vertical.
                        </p>
                    </div>

                    <div className="grid grid-3">
                        {industries.map((industry, index) => (
                            <IndustryCard key={index} {...industry} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="industry-benefits section bg-light">
                <div className="container">
                    <h2 className="text-center">Why Industry Specialization Matters</h2>
                    <div className="grid grid-2">
                        <div className="card">
                            <h3>🎯 Deep Domain Knowledge</h3>
                            <p>
                                Our teams are trained in industry-specific processes, terminology, and best practices
                                to deliver expert support from day one.
                            </p>
                        </div>
                        <div className="card">
                            <h3>📋 Compliance & Security</h3>
                            <p>
                                We maintain industry-specific certifications and compliance standards including HIPAA,
                                PCI-DSS, GDPR, and SOC 2.
                            </p>
                        </div>
                        <div className="card">
                            <h3>⚡ Faster Onboarding</h3>
                            <p>
                                Industry experience means shorter training cycles and faster time-to-productivity
                                for your outsourced teams.
                            </p>
                        </div>
                        <div className="card">
                            <h3>💡 Best Practices</h3>
                            <p>
                                Benefit from proven processes and workflows refined through years of experience
                                in your specific industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Industries;
