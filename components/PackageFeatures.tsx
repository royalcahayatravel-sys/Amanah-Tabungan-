
import React from 'react';

const FeatureIcon: React.FC<{ icon: React.ReactNode, title: string, subtitle: string }> = ({ icon, title, subtitle }) => (
    <div className="flex flex-col items-center text-center space-y-2">
        <div className="bg-gray-800 bg-opacity-50 rounded-full p-4">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm font-light">{subtitle}</p>
        </div>
    </div>
);

const PackageFeatures: React.FC = () => {
    return (
        <section className="my-16">
            <div className="bg-gradient-to-br from-yellow-500 to-amber-600 text-gray-900 rounded-3xl p-8 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <FeatureIcon 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                        title="12 Hari"
                        subtitle="Umroh"
                    />
                     <FeatureIcon 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-4h1m-1 4h1m-1-8h1m-5 8h1m-1-4h1m-1-4h1" /></svg>}
                        title="Hotel"
                        subtitle="Bintang 4"
                    />
                     <FeatureIcon 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                        title="Ziarah"
                        subtitle="Kota Thaif"
                    />
                     <FeatureIcon 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
                        title="Pembimbing"
                        subtitle="Ibadah"
                    />
                </div>
            </div>
        </section>
    );
};

export default PackageFeatures;
