
import React, { useState } from 'react';

interface AdminDashboardProps {
  onLogout: () => void;
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

type CommissionType = 'nominal' | 'persen';
interface CommissionSetting {
    type: CommissionType;
    value: number;
}

const initialAffiliates = [
    { id: 1, name: 'Ahmad Subarjo', email: 'ahmad@example.com', referrals: { t1: 7, t2: 15, t3: 8 } },
    { id: 2, name: 'Siti Aminah', email: 'siti@example.com', referrals: { t1: 5, t2: 10, t3: 2 } },
    { id: 3, name: 'Budi Santoso', email: 'budi@example.com', referrals: { t1: 12, t2: 25, t3: 18 } },
    { id: 4, name: 'Dewi Lestari', email: 'dewi@example.com', referrals: { t1: 1, t2: 0, t3: 0 } },
];

interface PendingRegistration {
    id: number;
    name: string;
    email: string;
    phone: string;
    proofUrl: string;
    referralCode?: string;
}

interface PendingInstallment {
    id: number;
    memberName: string;
    installmentNumber: number;
    proofUrl: string;
}

const initialPendingRegistrations: PendingRegistration[] = [
    { id: 101, name: 'Fajar Nugraha', email: 'fajar.n@example.com', phone: '081234567890', proofUrl: 'https://i.imgur.com/2OF94g2.jpeg', referralCode: 'user123' },
    { id: 102, name: 'Rina Wulandari', email: 'rina.w@example.com', phone: '082345678901', proofUrl: 'https://i.imgur.com/2OF94g2.jpeg' },
];

const initialPendingInstallments: PendingInstallment[] = [
    { id: 201, memberName: 'Ahmad Subarjo', installmentNumber: 3, proofUrl: 'https://i.imgur.com/2OF94g2.jpeg' },
];

const CommissionInput: React.FC<{
    label: string;
    setting: CommissionSetting;
    onSettingChange: (newSetting: CommissionSetting) => void;
}> = ({ label, setting, onSettingChange }) => {
    return (
        <div>
            <label className="block text-sm font-bold text-white mb-2">{label}</label>
            <div className="flex">
                <select 
                    value={setting.type}
                    onChange={(e) => onSettingChange({ ...setting, type: e.target.value as CommissionType })}
                    className="bg-gray-900 border border-gray-600 rounded-l-md px-3 text-white focus:ring-yellow-500 focus:border-yellow-500"
                >
                    <option value="nominal">Rp</option>
                    <option value="persen">%</option>
                </select>
                <input 
                    type="number" 
                    value={setting.value}
                    onChange={(e) => onSettingChange({ ...setting, value: Number(e.target.value) })}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-r-md focus:ring-yellow-500 focus:border-yellow-500"
                />
            </div>
        </div>
    );
};

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
    const [affiliates] = useState(initialAffiliates);
    const [pendingRegistrations, setPendingRegistrations] = useState<PendingRegistration[]>(initialPendingRegistrations);
    const [pendingInstallments, setPendingInstallments] = useState<PendingInstallment[]>(initialPendingInstallments);

    const [commissions, setCommissions] = useState({
        tier1: { type: 'nominal', value: 1000000 } as CommissionSetting,
        tier2: { type: 'nominal', value: 500000 } as CommissionSetting,
        tier3: { type: 'nominal', value: 500000 } as CommissionSetting,
        hajiPoint: { type: 'nominal', value: 500000 } as CommissionSetting,
    });
    
    const handleCommissionChange = <K extends keyof typeof commissions>(tier: K, setting: CommissionSetting) => {
        setCommissions(prev => ({ ...prev, [tier]: setting }));
    };

    const handleRegistrationApproval = (id: number, action: 'approve' | 'reject') => {
        alert(`Pendaftar dengan ID ${id} telah di-${action === 'approve' ? 'setujui' : 'tolak'}.`);
        setPendingRegistrations(current => current.filter(p => p.id !== id));
    };

    const handleInstallmentApproval = (id: number, action: 'approve' | 'reject') => {
        alert(`Setoran dengan ID ${id} telah di-${action === 'approve' ? 'setujui' : 'tolak'}.`);
        setPendingInstallments(current => current.filter(p => p.id !== id));
    };

    return (
    <div className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
        <button onClick={onLogout} className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-500 transition-colors duration-300">
          Logout
        </button>
      </div>

      {/* Pending Registrations */}
      <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold text-yellow-400 mb-4">Persetujuan Pendaftaran Baru ({pendingRegistrations.length})</h2>
        {pendingRegistrations.length > 0 ? (
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-gray-700">
                            <th className="p-3">Nama</th>
                            <th className="p-3 hidden sm:table-cell">Kontak</th>
                            <th className="p-3 hidden md:table-cell">Kode Referral</th>
                            <th className="p-3 text-center">Bukti Bayar</th>
                            <th className="p-3 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pendingRegistrations.map((reg) => (
                            <tr key={reg.id} className="border-b border-gray-700 hover:bg-gray-700 bg-opacity-50">
                                <td className="p-3 font-medium">{reg.name}</td>
                                <td className="p-3 hidden sm:table-cell text-gray-400 text-sm">
                                    <div>{reg.email}</div>
                                    <div>{reg.phone}</div>
                                </td>
                                <td className="p-3 hidden md:table-cell text-sm font-mono">
                                    {reg.referralCode ? (
                                        <span className="bg-yellow-900 text-yellow-300 px-2 py-1 rounded-full text-xs">{reg.referralCode}</span>
                                    ) : (
                                        <span className="text-gray-500">-</span>
                                    )}
                                </td>
                                <td className="p-3 text-center">
                                    <a href={reg.proofUrl} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline text-sm">
                                        Lihat Bukti
                                    </a>
                                </td>
                                <td className="p-3 text-center space-x-2">
                                    <button onClick={() => handleRegistrationApproval(reg.id, 'approve')} className="bg-green-600 text-white font-bold py-1 px-3 rounded text-sm hover:bg-green-500">
                                        Setujui
                                    </button>
                                    <button onClick={() => handleRegistrationApproval(reg.id, 'reject')} className="bg-red-600 text-white font-bold py-1 px-3 rounded text-sm hover:bg-red-500">
                                        Tolak
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ) : (
            <p className="text-gray-400 text-center py-4">Tidak ada pendaftaran baru yang menunggu persetujuan.</p>
        )}
      </div>

      {/* Pending Installments */}
      <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold text-yellow-400 mb-4">Persetujuan Setoran Tabungan ({pendingInstallments.length})</h2>
        {pendingInstallments.length > 0 ? (
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-gray-700">
                            <th className="p-3">Nama Anggota</th>
                            <th className="p-3 text-center">Setoran Ke-</th>
                            <th className="p-3 text-center">Bukti Bayar</th>
                            <th className="p-3 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pendingInstallments.map((inst) => (
                            <tr key={inst.id} className="border-b border-gray-700 hover:bg-gray-700 bg-opacity-50">
                                <td className="p-3 font-medium">{inst.memberName}</td>
                                <td className="p-3 text-center font-mono">{inst.installmentNumber}</td>
                                <td className="p-3 text-center">
                                    <a href={inst.proofUrl} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline text-sm">
                                        Lihat Bukti
                                    </a>
                                </td>
                                <td className="p-3 text-center space-x-2">
                                    <button onClick={() => handleInstallmentApproval(inst.id, 'approve')} className="bg-green-600 text-white font-bold py-1 px-3 rounded text-sm hover:bg-green-500">
                                        Setujui
                                    </button>
                                    <button onClick={() => handleInstallmentApproval(inst.id, 'reject')} className="bg-red-600 text-white font-bold py-1 px-3 rounded text-sm hover:bg-red-500">
                                        Tolak
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ) : (
            <p className="text-gray-400 text-center py-4">Tidak ada setoran tabungan yang menunggu persetujuan.</p>
        )}
      </div>

       {/* Commission Settings */}
      <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg mb-8">
         <h2 className="text-xl font-bold text-yellow-400 mb-4">Pengaturan Komisi Afiliasi</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CommissionInput label="Komisi Tier 1" setting={commissions.tier1} onSettingChange={(s) => handleCommissionChange('tier1', s)} />
            <CommissionInput label="Komisi Tier 2" setting={commissions.tier2} onSettingChange={(s) => handleCommissionChange('tier2', s)} />
            <CommissionInput label="Komisi Tier 3" setting={commissions.tier3} onSettingChange={(s) => handleCommissionChange('tier3', s)} />
            <CommissionInput label="Poin Haji Khusus (T2 & T3)" setting={commissions.hajiPoint} onSettingChange={(s) => handleCommissionChange('hajiPoint', s)} />
         </div>
         <div className="mt-6 border-t border-gray-700 pt-4">
            <h3 className="font-bold text-white">Bonus Spesial Tier 1</h3>
            <p className="text-gray-400 text-sm">Dapatkan <span className="font-bold text-yellow-400">1 Umroh Gratis (senilai Rp 28.500.000,-)</span> setelah mereferensikan 6 jama'ah. Tidak berlaku kelipatan.</p>
         </div>
         <div className="mt-6 text-right">
            <button className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-500 transition-colors">
                Simpan Pengaturan Komisi
            </button>
         </div>
      </div>

      {/* Affiliate Management Table */}
      <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
         <h2 className="text-xl font-bold text-yellow-400 mb-4">Manajemen Afiliasi</h2>
         <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-gray-700">
                        <th className="p-3">Nama</th>
                        <th className="p-3 hidden lg:table-cell">Email</th>
                        <th className="p-3 text-center">Tier 1</th>
                        <th className="p-3 text-center">Tier 2</th>
                        <th className="p-3 text-center">Tier 3</th>
                    </tr>
                </thead>
                <tbody>
                    {affiliates.map((aff) => (
                         <tr key={aff.id} className="border-b border-gray-700 hover:bg-gray-700 bg-opacity-50">
                            <td className="p-3 font-medium">{aff.name}</td>
                            <td className="p-3 hidden lg:table-cell text-gray-400">{aff.email}</td>
                            <td className="p-3 text-center font-mono">{aff.referrals.t1}</td>
                            <td className="p-3 text-center font-mono">{aff.referrals.t2}</td>
                            <td className="p-3 text-center font-mono">{aff.referrals.t3}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
         </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
