import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
    return (
        <>
            <Navbar />
            <div className="p-8 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
                <p className="text-lg mb-6"><strong>Effective Date:</strong> [Insert Date]</p>

                <h2 className="text-3xl font-semibold mt-12 mb-4">1. Introduction</h2>
                <p className="text-lg mb-6">
                    Welcome to MusiTech. We are dedicated to safeguarding your privacy and ensuring that your personal information is managed with the utmost care and responsibility. This Privacy Policy delineates the manner in which we collect, utilize, disclose, and protect your information when you engage with our website [your website URL] and utilize our services.
                </p>

                <h2 className="text-3xl font-semibold mt-12 mb-4">2. Information Collection</h2>
                <p className="text-lg mb-4">We may gather the following types of information:</p>
                <ul className="list-disc list-inside text-lg mb-6 pl-6">
                    <li><strong>Personal Data:</strong> Including, but not limited to, your name, email address, telephone number, and other contact details you provide when reaching out to us or requesting information about our offerings.</li>
                    <li><strong>Usage Data:</strong> Information regarding your interaction with our website, such as IP address, browser type, operating system, and browsing patterns.</li>
                    <li><strong>Cookies and Tracking Technologies:</strong> We employ cookies and similar tracking technologies to enhance your experience on our website and to collect data on your usage of our services.</li>
                </ul>

                <h2 className="text-3xl font-semibold mt-12 mb-4">3. Use of Information</h2>
                <p className="text-lg mb-4">The information collected may be used for the following purposes:</p>
                <ul className="list-disc list-inside text-lg mb-6 pl-6">
                    <li>To provide, maintain, and improve our services.</li>
                    <li>To communicate with you, including addressing inquiries and delivering updates.</li>
                    <li>To personalize your experience on our website.</li>
                    <li>To analyze usage and trends to enhance our website and services.</li>
                    <li>To comply with legal obligations and protect our rights.</li>
                </ul>

                <h2 className="text-3xl font-semibold mt-12 mb-4">4. Information Sharing</h2>
                <p className="text-lg mb-4">We do not sell, trade, or otherwise transfer your personal data to third parties except in the following circumstances:</p>
                <ul className="list-disc list-inside text-lg mb-6 pl-6">
                    <li><strong>Service Providers:</strong> We may disclose information to third-party service providers who assist us in operating our website and delivering our services, subject to their commitment to confidentiality.</li>
                    <li><strong>Legal Obligations:</strong> We may disclose information if required to do so by law or in response to legal processes such as subpoenas or court orders.</li>
                    <li><strong>Business Transactions:</strong> In the event of a merger, acquisition, or other business transition, your information may be transferred as part of such transactions.</li>
                </ul>

                <h2 className="text-3xl font-semibold mt-12 mb-4">5. Data Security</h2>
                <p className="text-lg mb-6">
                    We implement reasonable and appropriate security measures to protect your personal data from unauthorized access, use, or disclosure. However, no security system is infallible, and we cannot guarantee the absolute security of your information.
                </p>

                <h2 className="text-3xl font-semibold mt-12 mb-4">6. Your Rights</h2>
                <p className="text-lg mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-lg mb-6 pl-6">
                    <li>Access and correct your personal data.</li>
                    <li>Opt-out of receiving promotional communications from us by following the instructions provided in such communications or by contacting us directly.</li>
                </ul>

                <h2 className="text-3xl font-semibold mt-12 mb-4">7. Policy Amendments</h2>
                <p className="text-lg mb-6">
                    We may revise this Privacy Policy periodically to reflect changes in our practices or legal requirements. Any updates will be posted on our website, with the effective date noted at the top of this document.
                </p>

                <h2 className="text-3xl font-semibold mt-12 mb-4">8. Contact Information</h2>
                <p className="text-lg mb-6">
                    For any questions or concerns regarding this Privacy Policy or our data handling practices, please contact us at:
                </p>
                <p className="text-lg">
                    <strong>MusiTech</strong><br />
                    Email: <a href="mailto:support@codehelp.in" className="text-blue-500 hover:underline">support@codehelp.in</a><br />
                    Address: [Your Address]
                </p>
            </div>
            <Footer />
        </>
    );
};

export default Privacy;
