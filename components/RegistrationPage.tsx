
import React, { useState } from 'react';

interface RegistrationPageProps {
  onBackToHome: () => void;
}

const RegistrationPage: React.FC<RegistrationPageProps> = ({ onBackToHome }) => {
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referralCode, setReferralCode] = useState('');

  const bankAccountNumber = '7000351428';

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPaymentProof(e.target.files[0]);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bankAccountNumber);
    alert('Nomor rekening disalin!');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this data would be sent to the backend.
    // The referral code is now captured and can be used to link the new user to the affiliate.
    if (referralCode) {
        console.log(`Submitting registration linked to referral code: ${referralCode}`);
        alert(`Pendaftaran Anda akan diproses dengan kode referral: ${referralCode}`);
    }
    setIsSubmitted(true);
  };
  
  if (isSubmitted) {
      return (
          <div className="py-20 text-center">
              <div className="bg-gray-800 bg-opacity-70 max-w-lg mx-auto p-10 rounded-lg shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-3xl font-bold text-white mb-4">Pendaftaran Berhasil!</h2>
                <p className="text-gray-300 mb-6">Terima kasih telah mendaftar. Pembayaran Anda sedang dalam proses verifikasi oleh tim kami. Anda akan menerima notifikasi email setelah pendaftaran Anda disetujui.</p>
                <button onClick={onBackToHome} className="bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition-colors duration-300">
                    Kembali ke Beranda
                </button>
              </div>
          </div>
      )
  }

  return (
    <section className="py-12 md:py-20 flex justify-center items-start">
      <div className="w-full max-w-4xl mx-auto bg-gray-800 bg-opacity-50 rounded-lg shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Form Section */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Pendaftaran Jama'ah</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nama Lengkap</label>
              <input type="text" id="name" required className="w-full mt-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500" />
            </div>
             <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input type="email" id="email" required className="w-full mt-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Nomor Telepon (WhatsApp)</label>
              <input type="tel" id="phone" required className="w-full mt-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500" />
            </div>
            <div>
              <label htmlFor="referral" className="block text-sm font-medium text-gray-300">Kode Referral (Opsional)</label>
              <input 
                type="text" 
                id="referral" 
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
                className="w-full mt-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500" 
              />
            </div>
            <div className="pt-4">
                <button type="submit" className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold py-3 px-4 rounded-md hover:opacity-90 transition-opacity duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed" disabled={!paymentProof}>
                    Konfirmasi Pendaftaran
                </button>
            </div>
          </form>
        </div>

        {/* Payment Instructions Section */}
        <div className="p-8 bg-gray-900 bg-opacity-40">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Instruksi Pembayaran</h2>
            <div className="space-y-6">
                <div>
                    <p className="text-gray-300">Total Pembayaran DP:</p>
                    <p className="text-4xl font-bold text-white">Rp 3.000.000,-</p>
                </div>
                <div className="p-4 bg-gray-700 rounded-lg">
                    <p className="text-sm text-gray-300">Silakan transfer ke rekening berikut:</p>
                    <p className="font-bold text-lg text-yellow-300">Bank BCA</p>
                    <div className="flex items-center justify-between mt-1">
                        <p className="text-2xl font-mono text-white tracking-widest">{bankAccountNumber}</p>
                        <button onClick={copyToClipboard} className="text-xs bg-gray-600 hover:bg-gray-500 text-white font-bold py-1 px-2 rounded">Salin</button>
                    </div>
                    <p className="text-sm font-semibold text-white mt-1">a/n Miko Ariyanto</p>
                </div>

                <div>
                    <label htmlFor="payment-proof" className="block text-sm font-medium text-gray-300 mb-2">Unggah Bukti Transfer</label>
                    <input 
                        type="file" 
                        id="payment-proof" 
                        required 
                        accept="image/png, image/jpeg, image/jpg, application/pdf"
                        onChange={handleFileChange}
                        className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-yellow-500 file:text-black hover:file:bg-yellow-400" 
                    />
                    {paymentProof && <p className="text-xs text-green-400 mt-2">File dipilih: {paymentProof.name}</p>}
                </div>
                <p className="text-xs text-gray-400">Pendaftaran Anda akan diproses setelah pembayaran DP kami verifikasi. Pastikan Anda telah mengunggah bukti transfer yang valid.</p>
            </div>
        </div>
      </div>
    </section>
  );
};
export default RegistrationPage;
