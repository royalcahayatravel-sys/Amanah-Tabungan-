
import React, { useState } from 'react';

interface PaymentPageProps {
  installmentNumber: number;
  onBackToDashboard: () => void;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ installmentNumber, onBackToDashboard }) => {
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const bankAccountNumber = '7000351428';
  const installmentAmount = 1500000;

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
    if(paymentProof) {
        // Here you would typically send the proof to the backend
        console.log(`Submitting proof for installment #${installmentNumber}`);
        setIsSubmitted(true);
    }
  };
  
  if (isSubmitted) {
      return (
          <div className="py-20 text-center">
              <div className="bg-gray-800 bg-opacity-70 max-w-lg mx-auto p-10 rounded-lg shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-3xl font-bold text-white mb-4">Pembayaran Terkirim!</h2>
                <p className="text-gray-300 mb-6">Terima kasih. Pembayaran Anda untuk Tabungan #{installmentNumber} sedang dalam proses verifikasi oleh tim kami. Status di dasbor Anda akan diperbarui setelah disetujui.</p>
                <button onClick={onBackToDashboard} className="bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition-colors duration-300">
                    Kembali ke Dasbor
                </button>
              </div>
          </div>
      )
  }

  return (
    <section className="py-12 md:py-20 flex justify-center items-start">
      <div className="w-full max-w-lg mx-auto bg-gray-800 bg-opacity-50 rounded-lg shadow-2xl overflow-hidden">
        <div className="p-8">
            <h2 className="text-3xl font-bold text-yellow-400 mb-2">Pembayaran Tabungan #{installmentNumber}</h2>
            <p className="text-gray-300 mb-6">Selesaikan pembayaran untuk melanjutkan tabungan Umrah Anda.</p>
            
            <div className="space-y-6">
                <div>
                    <p className="text-gray-300">Jumlah Setoran:</p>
                    <p className="text-4xl font-bold text-white">Rp {installmentAmount.toLocaleString('id-ID')},-</p>
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

                <form onSubmit={handleSubmit} className="space-y-4">
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
                     <div className="pt-4">
                        <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-4 rounded-md hover:opacity-90 transition-opacity duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed" disabled={!paymentProof}>
                            Konfirmasi Pembayaran
                        </button>
                    </div>
                </form>

            </div>
        </div>
      </div>
    </section>
  );
};
export default PaymentPage;
