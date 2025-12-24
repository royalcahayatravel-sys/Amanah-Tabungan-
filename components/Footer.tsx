
import React from 'react';

const InstagramIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/>
    </svg>
);

const TikTokIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.8-1.59-1.87-2.32-4.2-2.1-6.6.22-2.4 1.56-4.59 3.43-5.95 1.87-1.37 4.1-2.02 6.33-1.88.12 2.19-.01 4.4.02 6.59-.21.15-.4-.09-.58-.13-.62-.16-1.25-.3-1.85-.45-.35-.09-.68-.16-.99-.24-1.11-.28-2.3-.51-3.32-1.04-.32-.17-.62-.39-.9-.63-.01-2.5.01-4.99-.02-7.48-.02-1.17.43-2.33 1.25-3.25.82-.92 1.95-1.47 3.14-1.58z"/>
    </svg>
);

const partners = ["IATA", "SISKO PATUH", "HIMPUH", "Turkish Airlines", "Emirates", "Scoot", "Lion Air", "Saudia"];

const Footer: React.FC = () => {
    return (
        <footer className="py-12 mt-10 border-t border-yellow-400 border-opacity-20 text-center">
            <div className="bg-yellow-500 text-black p-4 rounded-lg mb-8 inline-flex flex-col md:flex-row items-center gap-4 md:gap-8 shadow-lg">
                <p><span className="font-bold">Keberangkatan:</span> Oktober 2027</p>
                <p className="hidden md:block">|</p>
                <p><span className="font-bold">Kurs Dolar:</span> Rp 16.800</p>
            </div>
            
            <div className="mb-8">
                <h3 className="text-lg text-yellow-300 mb-4">Airline & Association Partners</h3>
                <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-gray-400">
                    {partners.map(p => <span key={p} className="text-sm">{p}</span>)}
                </div>
            </div>
            
            <div className="flex justify-center items-center space-x-6">
                <a href="#" className="flex items-center space-x-2 hover:text-yellow-300 transition-colors">
                    <InstagramIcon />
                    <span>royalcahayatravel</span>
                </a>
                 <a href="#" className="flex items-center space-x-2 hover:text-yellow-300 transition-colors">
                    <TikTokIcon />
                    <span>royalcahayatravel</span>
                </a>
            </div>
            
            <div className="mt-8 text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Royal Cahaya Travel. All Rights Reserved.</p>
                <a href="#" className="hover:text-yellow-400">royalcahayatravel.com</a>
            </div>
        </footer>
    );
};

export default Footer;
