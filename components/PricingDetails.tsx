
import React from 'react';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const PricingDetails: React.FC = () => {
    const included = [
        "Tiket pesawat PP", "Hotel bintang 4", "Visa Umroh", "Muthowif", "Tour Guide",
        "Free Kereta Cepat Mekkah-Madinah", "Perlengkapan (koper besar, kecil, seragam)",
        "Handling", "Bus VIP", "Air Zam-zam 5 liter"
    ];

    const excluded = ["Paspor", "Vaksin", "Kelebihan bagasi"];

    return (
        <section className="my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="bg-gray-800 bg-opacity-30 rounded-2xl p-6">
                    <h2 className="text-2xl font-bold bg-green-600 inline-block px-4 py-1 rounded-lg mb-4">Harga Sudah Termasuk :</h2>
                    <ul className="space-y-3">
                        {included.map((item, index) => (
                            <li key={index} className="flex items-start space-x-3">
                                <CheckIcon />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-gray-800 bg-opacity-30 rounded-2xl p-6">
                    <h2 className="text-2xl font-bold bg-red-600 inline-block px-4 py-1 rounded-lg mb-4">Harga Belum Termasuk :</h2>
                     <ul className="space-y-3">
                        {excluded.map((item, index) => (
                            <li key={index} className="flex items-start space-x-3">
                                <XIcon />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default PricingDetails;
