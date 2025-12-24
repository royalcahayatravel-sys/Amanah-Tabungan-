
import React, { useState } from 'react';

type Tab = 'itinerary' | 'accommodation' | 'terms';

const PackageDetails: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('itinerary');

    const tabButtonClasses = (tabName: Tab) => 
        `px-6 py-3 font-bold text-lg rounded-t-lg transition-colors duration-300 focus:outline-none ${
        activeTab === tabName 
            ? 'bg-gray-800 text-yellow-400' 
            : 'bg-gray-700 bg-opacity-50 text-gray-300 hover:bg-gray-700'
        }`;

    const ItineraryContent = () => (
        <ul className="space-y-4">
            {[
                { day: "Hari 1-2", title: "Perjalanan & Tiba di Madinah", desc: "Berkumpul di bandara, penerbangan menuju Madinah. Tiba, proses imigrasi, dan check-in hotel. Memperbanyak ibadah di Masjid Nabawi." },
                { day: "Hari 3", title: "Ziarah Madinah", desc: "Mengunjungi tempat-tempat bersejarah di Madinah seperti Masjid Quba, Jabal Uhud, dan Kebun Kurma." },
                { day: "Hari 4", title: "Perjalanan ke Makkah", desc: "Mandi sunnah ihram, mengambil miqat di Bir Ali, dan perjalanan menuju Makkah untuk melaksanakan Umroh." },
                { day: "Hari 5-7", title: "Ibadah di Makkah", desc: "Fokus memperbanyak ibadah di Masjidil Haram, tawaf sunnah, dan itikaf." },
                { day: "Hari 8", title: "Ziarah Makkah & City Tour Thaif", desc: "Ziarah ke Jabal Tsur, Jabal Rahmah, Arafah, Mina. Dilanjutkan perjalanan ke kota Thaif yang sejuk." },
                { day: "Hari 9", title: "Tawaf Wada & Persiapan Pulang", desc: "Melaksanakan Tawaf Wada sebagai perpisahan dengan Baitullah. Persiapan check-out hotel." },
                { day: "Hari 10-12", title: "Perjalanan Pulang & Tiba di Tanah Air", desc: "Penerbangan kembali ke Indonesia. Tiba dengan selamat membawa kenangan dan keberkahan." },
            ].map(item => (
                <li key={item.day} className="p-4 bg-gray-900 bg-opacity-50 rounded-lg">
                    <p className="font-bold text-yellow-400">{item.day}: {item.title}</p>
                    <p className="text-gray-300">{item.desc}</p>
                </li>
            ))}
        </ul>
    );

    const AccommodationContent = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded-lg">
                <h3 className="font-bold text-xl text-yellow-400 mb-2">Hotel Madinah</h3>
                <p className="font-semibold">Anwar Al Madinah Mövenpick Hotel (Bintang 4)</p>
                <p className="text-sm text-gray-300">Lokasi strategis dekat dengan Masjid Nabawi, memberikan kenyamanan akses untuk beribadah.</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded-lg">
                <h3 className="font-bold text-xl text-yellow-400 mb-2">Hotel Makkah</h3>
                <p className="font-semibold">Swissôtel Al Maqam Makkah (Bintang 4)</p>
                <p className="text-sm text-gray-300">Menghadap Ka'bah Suci, menawarkan pemandangan indah dan akses mudah ke Masjidil Haram.</p>
            </div>
        </div>
    );
    
    const TermsContent = () => (
         <div className="space-y-6">
            <div>
                <h3 className="font-bold text-xl text-yellow-400 mb-2">Persyaratan Visa & Dokumen</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Paspor dengan masa berlaku minimal 7 bulan sebelum keberangkatan.</li>
                    <li>Nama di paspor minimal 2 suku kata.</li>
                    <li>Kartu Tanda Penduduk (KTP) & Kartu Keluarga (KK).</li>
                    <li>Buku nikah bagi suami istri.</li>
                    <li>Pas foto terbaru dengan latar belakang putih, wajah 80%.</li>
                    <li>Sertifikat vaksin meningitis.</li>
                </ul>
            </div>
             <div>
                <h3 className="font-bold text-xl text-yellow-400 mb-2">Kebijakan Pembatalan</h3>
                <p className="text-gray-300">Informasi mengenai kebijakan pembatalan dan pengembalian dana akan dijelaskan secara rinci saat proses pendaftaran.</p>
            </div>
        </div>
    );


    return (
        <section className="my-16">
            <h2 className="text-3xl font-bold text-center text-yellow-400 mb-10">Detail Paket Umrah PLUS THAIF</h2>
            <div className="w-full">
                <div className="border-b border-gray-700">
                    <nav className="-mb-px flex space-x-2" aria-label="Tabs">
                        <button onClick={() => setActiveTab('itinerary')} className={tabButtonClasses('itinerary')}>
                            Rencana Perjalanan
                        </button>
                        <button onClick={() => setActiveTab('accommodation')} className={tabButtonClasses('accommodation')}>
                            Akomodasi
                        </button>
                         <button onClick={() => setActiveTab('terms')} className={tabButtonClasses('terms')}>
                            Syarat & Ketentuan
                        </button>
                    </nav>
                </div>
                <div className="bg-gray-800 bg-opacity-70 p-6 rounded-b-lg">
                    {activeTab === 'itinerary' && <ItineraryContent />}
                    {activeTab === 'accommodation' && <AccommodationContent />}
                    {activeTab === 'terms' && <TermsContent />}
                </div>
            </div>
        </section>
    );
};

export default PackageDetails;
