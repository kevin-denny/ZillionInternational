import { useState } from 'react';
import Button from '../common/Button';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.company.trim()) {
            newErrors.company = 'Company name is required';
        }

        if (!formData.service) {
            newErrors.service = 'Please select a service';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Success
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                service: '',
                message: ''
            });

            console.log('Form submitted:', formData);
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                        Full Name <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className={`form-input ${errors.name ? 'error' : ''}`}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        Email Address <span className="required">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="company" className="form-label">
                        Company Name <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        className={`form-input ${errors.company ? 'error' : ''}`}
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                    />
                    {errors.company && <span className="form-error">{errors.company}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (XXX) XXX-XXXX"
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="service" className="form-label">
                    Service Interested In <span className="required">*</span>
                </label>
                <select
                    id="service"
                    name="service"
                    className={`form-select ${errors.service ? 'error' : ''}`}
                    value={formData.service}
                    onChange={handleChange}
                >
                    <option value="">Select a service</option>
                    <option value="customer-support">Customer Support Outsourcing</option>
                    <option value="technical-support">Technical Support Services</option>
                    <option value="back-office">Back Office & Admin Outsourcing</option>
                    <option value="it-solutions">IT & Software Solutions</option>
                    <option value="lead-generation">Lead Generation & Appointment Setting</option>
                </select>
                {errors.service && <span className="form-error">{errors.service}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="message" className="form-label">
                    Message <span className="required">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows="5"
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            {submitStatus === 'success' && (
                <div className="form-success">
                    ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="form-error-message">
                    ✗ Something went wrong. Please try again later.
                </div>
            )}

            <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="contact-form__submit"
            >
                {isSubmitting ? (
                    <>
                        <span className="spinner"></span>
                        Sending...
                    </>
                ) : (
                    'Get Free Quote'
                )}
            </Button>
        </form>
    );
};

export default ContactForm;
