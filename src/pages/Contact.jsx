import SEO from '../components/common/SEO';
import Breadcrumb from '../components/layout/Breadcrumb';
import ContactForm from '../components/forms/ContactForm';
import { generateLocalBusinessSchema } from '../utils/schema';
import './Contact.css';

const Contact = () => {
    const localBusinessSchema = generateLocalBusinessSchema();

    return (
        <>
            <SEO
                title="Contact Our BPO & IT Solutions Experts"
                description="Contact Zillion International (Pvt) Ltd for BPO services, outsourced customer support, technical support outsourcing, and IT solutions."
                keywords="contact BPO company, outsourcing inquiry, BPO quote, IT solutions contact, customer support outsourcing"
                canonical="/contact"
                schema={localBusinessSchema}
            />

            <Breadcrumb />

            <section className="page-header">
                <div className="container">
                    <h1>Contact Our BPO & IT Solutions Experts</h1>
                    <p className="page-subtitle">
                        Get a free consultation and discover how our BPO services can transform your business operations
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2>Get in Touch</h2>
                            <p>
                                Whether you're looking for outsourced customer support services, technical support outsourcing,
                                or back office solutions, our team is ready to help. Fill out the form and we'll get back to
                                you within 24 hours.
                            </p>

                            <div className="contact-details">
                                <div className="contact-detail">
                                    <h3>Email</h3>
                                    <p>zillioninternationalbpo@gmail.com</p>
                                </div>

                                <div className="contact-detail">
                                    <h3>Phone</h3>
                                    <p>USA: +1 (XXX) XXX-XXXX</p>
                                    <p>UK: +44 (XX) XXXX XXXX</p>
                                    <p>UAE: +971 (X) XXX XXXX</p>
                                </div>

                                {/* <div className="contact-detail">
                                    <h3>Locations</h3>
                                    <p><strong>USA Office</strong><br />
                                        [Address Line 1]<br />
                                        [City, State ZIP]</p>

                                    <p><strong>UK Office</strong><br />
                                        [Address Line 1]<br />
                                        [City, Postcode]</p>

                                    <p><strong>UAE Office</strong><br />
                                        [Address Line 1]<br />
                                        [City, Emirates]</p>
                                </div> */}

                                <div className="contact-detail">
                                    <h3>Business Hours</h3>
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                                    <p>Sunday: Closed</p>
                                    <p className="text-primary"><strong>24/7 Support Available for Clients</strong></p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <h2>Request a Free Quote</h2>
                            <p>Fill out the form below and our BPO experts will contact you shortly.</p>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="map-section section bg-light">
                <div className="container">
                    <h2 className="text-center">Our Global Presence</h2>
                    <p className="text-center section-subtitle">
                        Serving clients across USA, UK, and UAE with local expertise and global capabilities
                    </p>
                    <div className="map-placeholder">
                        <p>Interactive Map Coming Soon</p>
                        <p>USA • United Kingdom • United Arab Emirates</p>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default Contact;
