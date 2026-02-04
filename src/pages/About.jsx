import SEO from '../components/common/SEO';
import Breadcrumb from '../components/layout/Breadcrumb';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { generateOrganizationSchema } from '../utils/schema';
import './About.css';

const About = () => {
    const organizationSchema = generateOrganizationSchema();

    return (
        <>
            <SEO
                title="About Us - Global BPO & IT Solutions Provider"
                description="Leading BPO and IT solutions provider serving USA, UK, and UAE markets. 15+ years of excellence in customer support outsourcing, technical support, and back office services."
                keywords="BPO company, IT solutions provider, outsourcing company USA UK UAE, global BPO services"
                canonical="/about"
                schema={organizationSchema}
            />

            <Breadcrumb />

            <section className="page-header">
                <div className="container">
                    <h1>About Zillion International</h1>
                    <p className="page-subtitle">
                        Your trusted partner for BPO and IT solutions across USA, UK, and UAE markets
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="about-content">
                        <div className="about-section">
                            <h2>Our Mission</h2>
                            <p>
                                At Zillion International, our mission is to empower businesses across USA, UK, and UAE
                                to achieve operational excellence through world-class BPO and IT solutions. We combine
                                cutting-edge technology with human expertise to deliver outsourcing services that drive
                                measurable business results.
                            </p>
                        </div>

                        <div className="about-section">
                            <h2>Who We Are</h2>
                            <p>
                                Founded with a vision to transform business operations globally, Zillion International
                                has grown into a leading BPO services provider trusted by Fortune 500 companies and
                                fast-growing startups alike. With over 15 years of industry experience, we've successfully
                                delivered outsourced customer support services, technical support, and back office solutions
                                to clients across diverse industries.
                            </p>
                        </div>

                        <div className="about-section">
                            <h2>Global Delivery Model</h2>
                            <p>
                                Our strategically located delivery centers enable us to provide 24/7 support across all
                                time zones. We serve clients in USA, UK, and UAE markets with dedicated teams that understand
                                local business culture, compliance requirements, and customer expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="values-section section bg-light">
                <div className="container">
                    <h2 className="text-center">Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card card">
                            <div className="value-icon">🎯</div>
                            <h3>Excellence</h3>
                            <p>
                                We strive for excellence in every interaction, delivering quality that exceeds
                                client expectations consistently.
                            </p>
                        </div>
                        <div className="value-card card">
                            <div className="value-icon">🤝</div>
                            <h3>Integrity</h3>
                            <p>
                                Transparency, honesty, and ethical practices form the foundation of all our
                                client relationships.
                            </p>
                        </div>
                        <div className="value-card card">
                            <div className="value-icon">💡</div>
                            <h3>Innovation</h3>
                            <p>
                                We continuously invest in technology and process improvements to stay ahead
                                of industry trends.
                            </p>
                        </div>
                        <div className="value-card card">
                            <div className="value-icon">🌟</div>
                            <h3>Customer Focus</h3>
                            <p>
                                Our clients' success is our success. We tailor solutions to meet unique
                                business needs and goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="certifications-section section">
                <div className="container">
                    <h2 className="text-center">Certifications & Compliance</h2>
                    <div className="certifications-grid">
                        <div className="cert-item">
                            <h3>ISO 9001:2015</h3>
                            <p>Quality Management Systems</p>
                        </div>
                        <div className="cert-item">
                            <h3>ISO 27001</h3>
                            <p>Information Security</p>
                        </div>
                        <div className="cert-item">
                            <h3>HIPAA</h3>
                            <p>Healthcare Compliance</p>
                        </div>
                        <div className="cert-item">
                            <h3>PCI-DSS</h3>
                            <p>Payment Card Security</p>
                        </div>
                        <div className="cert-item">
                            <h3>GDPR</h3>
                            <p>Data Protection</p>
                        </div>
                        <div className="cert-item">
                            <h3>SOC 2</h3>
                            <p>Service Organization Controls</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Partner With Us</h2>
                        <p>
                            Join hundreds of companies that trust Zillion International for their BPO and IT needs.
                            Let's discuss how we can help your business grow.
                        </p>
                        <Link to="/contact">
                            <Button variant="primary" size="lg">
                                Get in Touch
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
