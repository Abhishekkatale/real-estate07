import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
    return (
        <>
            <Navbar />
            <main className="p-8 max-w-4xl mx-auto bg-white">
                <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
                <section className="mb-8">
                    <p className="text-lg leading-relaxed mb-6">
                        Your privacy is important to us. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Information We Collect</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        We may collect information about you in a variety of ways. The information we may collect includes personal data, such as your name, email address, and contact information.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4">How We Use Your Information</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        We use the information we collect to provide and manage our services, communicate with you, and improve our website.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Sharing Your Information</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        We may share your information with third parties who provide services on our behalf or as required by law.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Your Choices</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        You have choices regarding the collection, use, and disclosure of your personal data. You can review and update your information or opt out of certain practices.
                    </p>
                </section>Refund & Cancellation Policy
                There is a Strict no refund & no cancellation policy. You are entitled to a refund only in the case where you have not been allotted the course after payment.
                <section>
                    <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-lg leading-relaxed">
                        If you have any questions or concerns about this privacy policy, please contact us at{' '}
                        <a href="mailto:support@codehelp.in" className="text-green-500 hover:underline">contact@musitech.in</a>.
                    </p>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Privacy;
