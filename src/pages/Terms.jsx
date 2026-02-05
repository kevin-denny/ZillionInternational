import SEO from '../components/common/SEO';
import Breadcrumb from '../components/layout/Breadcrumb';
import './Legal.css';

const Terms = () => {
    return (
        <>
            <SEO
                title="Terms of Service - Zillion International (Pvt) Ltd"
                description="Terms of Service for Zillion International (Pvt) Ltd. Read our terms and conditions for using our website and services."
                keywords="terms of service, terms and conditions, legal, user agreement"
                canonical="/terms"
            />

            <Breadcrumb />

            <section className="page-header">
                <div className="container">
                    <h1>Terms of Service</h1>
                    <p className="page-subtitle">
                        Please read these terms and conditions carefully before using our service
                    </p>
                </div>
            </section>

            <section className="section legal-page">
                <div className="container">
                    <div className="legal-content">
                        <div className="legal-section">
                            <h2>1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these specific services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>2. Use of Services</h2>
                            <p>
                                You agree to use the services provided by Zillion International (Pvt) Ltd only for the purposes that are permitted by (a) the Terms and (b) any applicable law, regulation or generally accepted practices or guidelines in the relevant jurisdictions.
                            </p>
                            <p>
                                You agree not to access (or attempt to access) any of the Services by any means other than through the interface that is provided by Zillion International (Pvt) Ltd, unless you have been specifically allowed to do so in a separate agreement with Zillion International (Pvt) Ltd.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>3. Intellectual Property</h2>
                            <p>
                                This site and its original content, features, and functionality are owned by Zillion International (Pvt) Ltd and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>4. Termination</h2>
                            <p>
                                We may terminate your access to the Site, without cause or notice, which may result in the forfeiture and destruction of all information associated with you. All provisions of this Agreement that by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>5. Governing Law</h2>
                            <p>
                                This Agreement (and any further rules, polices, or guidelines incorporated by reference) shall be governed and construed in accordance with the laws of United States, United Kingdom, and United Arab Emirates, without giving effect to any principles of conflicts of law.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>6. Changes to This Agreement</h2>
                            <p>
                                We reserve the right, at our sole discretion, to modify or replace these Terms by posting the updated terms on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>7. Contact Us</h2>
                            <p>
                                If you have any questions about this Agreement, please contact us at zillioninternationalbpo@gmail.com.
                            </p>
                        </div>

                        <p className="legal-last-updated">Last Updated: February 5, 2026</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Terms;
