
import React, { useState } from 'react';

interface AffiliateDashboardProps {
  onLogout: () => void;
  onPayInstallment: (installmentNumber: number) => void;
}

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
  <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg flex items-center space-x-4">
    <div className="text-yellow-400">{icon}</div>
    <div>
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const ProgressBar: React.FC<{ value: number; max: number }> = ({ value, max }) => {
    const percentage = Math.min((value / max) * 100, 100);
    return (
        <div>
            <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-yellow-300">Jama'ah Terkumpul</span>
                <span className="text-sm font-bold text-white">{value} / {max}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-gradient-to-r from-yellow-400 to-amber-500 h-4 rounded-full" style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
};

type InstallmentStatus = 'lunas' | 'menunggu konfirmasi' | 'belum dibayar';
interface Installment {
    id: number;
    status: InstallmentStatus;
}

const AffiliateDashboard: React.FC<AffiliateDashboardProps> = ({ onLogout, onPayInstallment }) => {
    const affiliateLink = "https://royalcahayatravel.com/ref/user123";
    
    // Mock data
    const tier1Referrals = 7;
    const tier2Referrals = 15;
    const tier3Referrals = 8;
    const umrahBonusClaimed = tier1Referrals >= 6;
    const [installments, setInstallments] = useState<Installment[]>(
        Array.from({ length: 17 }, (_, i) => ({
            id: i + 1,
            status: i < 2 ? 'lunas' : i === 2 ? 'menunggu konfirmasi' : 'belum dibayar',
        }))
    );

    const tier1Commission = 1000000;
    const tier2Commission = 500000;
    const tier3Commission = 500000;
    const hajiPointValue = 500000;
    const umrahBonusDeduction = 6000000;

    let totalCommission = (tier1Referrals * tier1Commission) + (tier2Referrals * tier2Commission) + (tier3Referrals * tier3Commission);
    if (umrahBonusClaimed) {
        totalCommission -= umrahBonusDeduction;
    }
    
    const totalHajiPoints = (tier2Referrals + tier3Referrals) * hajiPointValue;
    
    const copyLink = () => {
        navigator.clipboard.writeText(affiliateLink);
        alert('Link afiliasi disalin!');
    };
    
    const getStatusBadge = (status: InstallmentStatus) => {
        switch(status) {
            case 'lunas': return <span className="text-xs font-bold text-green-400">LUNAS</span>;
            case 'menunggu konfirmasi': return <span className="text-xs font-bold text-orange-400">MENUNGGU KONFIRMASI</span>;
            case 'belum dibayar': return <span className="text-xs font-bold text-gray-400">BELUM DIBAYAR</span>
        }
    }
    
    const getStatusBgColor = (status: InstallmentStatus) => {
        switch(status) {
            case 'lunas': return 'bg-green-900 bg-opacity-50 border-green-500';
            case 'menunggu konfirmasi': return 'bg-orange-900 bg-opacity-50 border-orange-500';
            case 'belum dibayar': return 'bg-gray-700 bg-opacity-80 border-gray-600';
        }
    }

  return (
    <div className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-white">Dasbor Afiliasi</h1>
        <button onClick={onLogout} className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-500 transition-colors duration-300">
          Logout
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Komisi Total (Setelah Penyesuaian)" value={`Rp ${totalCommission.toLocaleString('id-ID')}`} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} />
        <StatCard title="Poin Haji Khusus" value={`Rp ${totalHajiPoints.toLocaleString('id-ID')}`} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 1.5A2.25 2.25 0 009.75 3.75v.563A2.25 2.25 0 0112 3.75h0A2.25 2.25 0 0114.25 6.313v-.563A2.25 2.25 0 0012 3.75h0A2.25 2.25 0 0012 1.5z" /><path fillRule="evenodd" d="M12 2.25c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zM6.75 11.25a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 00-1.5 0v1.5a3.75 3.75 0 11-7.5 0v-1.5a.75.75 0 00-1.5 0v1.5z" clipRule="evenodd" /></svg>} />
        <StatCard title="Referral Tier 1" value={tier1Referrals.toString()} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} />
        <StatCard title="Referral Tier 2 & 3" value={`${tier2Referrals + tier3Referrals}`} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.28-1.25-.7-1.686M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.28-1.25.7-1.686m0 0A10.97 10.97 0 0112 13c2.994 0 5.717 1.12 7.753 2.964M12 10a4 4 0 110-8 4 4 0 010 8zm0 0c-5.523 0-10 4.477-10 10v1h20v-1c0-5.523-4.477-10-10-10z" /></svg>} />
      </div>

       {/* Savings Installments */}
      <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold text-yellow-400 mb-4">Status Tabungan Umrah</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {installments.map(inst => (
                <div key={inst.id} className={`p-4 rounded-lg border text-center flex flex-col justify-between ${getStatusBgColor(inst.status)}`}>
                    <div>
                        <p className="font-bold text-lg text-white">Tabungan #{inst.id}</p>
                        {getStatusBadge(inst.status)}
                    </div>
                    {inst.status === 'belum dibayar' && (
                        <button onClick={() => onPayInstallment(inst.id)} className="mt-4 w-full bg-yellow-500 text-black font-bold text-sm py-2 px-3 rounded-md hover:bg-yellow-400 transition-colors">
                            Setor
                        </button>
                    )}
                </div>
            ))}
        </div>
      </div>

      {/* Umrah Bonus & Affiliate Link */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
        <div className="lg:col-span-3 bg-gray-800 bg-opacity-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">Progress Bonus Umroh Gratis (Tier 1)</h2>
          <ProgressBar value={tier1Referrals} max={6} />
          {umrahBonusClaimed ? (
             <div className="mt-4 p-4 bg-green-900 border border-green-500 rounded-lg text-center">
                 <h3 className="font-bold text-lg text-white">🎉 Selamat! Anda Mendapatkan Umroh Gratis!</h3>
                 <p className="text-green-300">Bonus senilai Rp 28.500.000,- telah diklaim. Sebagai bagian dari bonus ini, total komisi Anda telah disesuaikan sebesar Rp 6.000.000,-.</p>
             </div>
          ) : (
            <p className="text-sm text-gray-400 mt-3">Dapatkan 6 jama'ah dari referral langsung (Tier 1) untuk mendapatkan 1 paket Umroh gratis.</p>
          )}
        </div>
        <div className="lg:col-span-2 bg-gray-800 bg-opacity-50 p-6 rounded-lg flex flex-col justify-center">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">Link Afiliasi Anda</h2>
          <div className="flex items-stretch">
            <input type="text" readOnly value={affiliateLink} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-l-md text-gray-300"/>
            <button onClick={copyLink} className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-r-md hover:bg-yellow-400 transition-colors">Salin</button>
          </div>
        </div>
      </div>

       {/* Commission Breakdown */}
      <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
         <h2 className="text-xl font-bold text-yellow-400 mb-4">Rincian Skema Komisi Anda</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold text-lg">Tier 1</h3>
                <p className="text-2xl font-bold text-yellow-400">Rp {tier1Commission.toLocaleString('id-ID')}</p>
                <p className="text-xs text-gray-400">per jama'ah</p>
            </div>
             <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold text-lg">Tier 2</h3>
                <p className="text-2xl font-bold text-yellow-400">Rp {tier2Commission.toLocaleString('id-ID')}</p>
                <p className="text-xs text-gray-400">per jama'ah</p>
            </div>
             <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold text-lg">Tier 3</h3>
                <p className="text-2xl font-bold text-yellow-400">Rp {tier3Commission.toLocaleString('id-ID')}</p>
                <p className="text-xs text-gray-400">per jama'ah</p>
            </div>
         </div>
      </div>

    </div>
  );
};

export default AffiliateDashboard;
