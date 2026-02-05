import SEO from '../components/common/SEO';
import Breadcrumb from '../components/layout/Breadcrumb';
import CaseStudyCard from '../components/common/CaseStudyCard';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { generateArticleSchema } from '../utils/schema';
import './CaseStudies.css';

const CaseStudies = () => {
    const caseStudies = [
        {
            title: 'E-commerce Giant Reduces Support Costs by 55%',
            industry: 'E-commerce',
            challenge: 'A rapidly growing online retailer was struggling with high customer support costs and inconsistent service quality across multiple channels. Peak season demands were overwhelming their in-house team.',
            solution: 'We implemented a scalable 24/7 customer support outsourcing solution with dedicated teams for phone, email, and chat support. Our team was trained on their product catalog and integrated with their CRM system.',
            results: 'Within 6 months, the client achieved 55% cost reduction, 98% customer satisfaction scores, and successfully handled 3x volume during peak season without additional hiring.',
            metrics: [
                { value: '55%', label: 'Cost Reduction' },
                { value: '98%', label: 'CSAT Score' },
                { value: '3x', label: 'Volume Handled' }
            ]
        },
        {
            title: 'SaaS Company Scales Technical Support Globally',
            industry: 'SaaS',
            challenge: 'A B2B SaaS platform needed to provide 24/7 technical support across multiple time zones but lacked the infrastructure and expertise to build global teams.',
            solution: 'We deployed certified technical support teams across three continents, providing L1 and L2 support with seamless handoffs. Implemented comprehensive knowledge base and ticketing system integration.',
            results: 'Achieved 24/7 coverage with average response time under 2 hours, 92% first-contact resolution rate, and enabled the client to expand into new markets without support infrastructure investment.',
            metrics: [
                { value: '<2hrs', label: 'Response Time' },
                { value: '92%', label: 'FCR Rate' },
                { value: '24/7', label: 'Global Coverage' }
            ]
        },
    ];

    const articleSchemas = caseStudies.map(study => generateArticleSchema({
        headline: study.title,
        description: study.challenge,
        datePublished: '2026-01-01',
        dateModified: '2026-02-04'
    }));

    return (
        <>
            <SEO
                title="Case Studies - Proven Empowering Global Solutions Success Stories"
                description="Real-world BPO success stories from USA, UK, and UAE clients. See how our outsourced customer support services and technical support solutions delivered measurable results."
                keywords="BPO case studies, outsourcing success stories, customer support case studies, BPO ROI, outsourcing results"
                canonical="/case-studies"
                schema={articleSchemas}
            />

            <Breadcrumb />

            <section className="page-header">
                <div className="container">
                    <h1>Client Success Stories</h1>
                    <p className="page-subtitle">
                        Discover how businesses across USA, UK, and UAE transformed their operations
                        with our BPO and IT solutions
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="case-studies-intro">
                        <h2>Proven Results Across Industries</h2>
                        <p>
                            Our BPO services have helped companies reduce costs, improve customer satisfaction,
                            and scale operations efficiently. These case studies demonstrate the real-world impact
                            of partnering with Zillion International (Pvt) Ltd for your outsourcing needs.
                        </p>
                    </div>

                    <div className="case-studies-list">
                        {caseStudies.map((study, index) => (
                            <CaseStudyCard key={index} {...study} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Ready to Achieve Similar Results?</h2>
                        <p>
                            Let's discuss how our BPO and IT solutions can help you achieve your business goals.
                            Schedule a free consultation with our experts today.
                        </p>
                        <Link to="/contact">
                            <Button variant="primary" size="lg">
                                Get Your Free Consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CaseStudies;
