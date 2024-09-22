import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
    return (
        <>
            <Navbar />
            <main className="p-8 max-w-4xl mx-auto bg-white">
                <h1 className="text-4xl font-bold mb-8">Refund & Cancellation Policy</h1>
                <p className="text-lg leading-relaxed">
                    There is a strict no refund & no cancellation policy. You are entitled to a refund only in the case where you have not been allotted the course after payment.
                </p>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </main>
            <Footer />
        </>
    );
};

export default Privacy;
