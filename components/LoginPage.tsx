
import React, { useState } from 'react';

interface LoginPageProps {
  onLoginSuccess: (role: 'member' | 'admin') => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  const handleFormSubmit = (e: React.FormEvent, role: 'member' | 'admin' = 'member') => {
    e.preventDefault();
    onLoginSuccess(role);
  };

  const tabButtonClasses = (tabName: 'login' | 'register') => 
    `w-1/2 py-3 text-center font-bold text-lg cursor-pointer transition-colors duration-300 rounded-t-lg ${
      activeTab === tabName 
        ? 'bg-gray-800 text-yellow-400' 
        : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
    }`;

  return (
    <section className="py-12 md:py-20 flex justify-center items-center">
      <div className="w-full max-w-md mx-auto bg-gray-800 bg-opacity-50 rounded-lg shadow-2xl overflow-hidden">
        <div className="flex">
          <button onClick={() => setActiveTab('login')} className={tabButtonClasses('login')}>
            Login
          </button>
          <button onClick={() => setActiveTab('register')} className={tabButtonClasses('register')}>
            Daftar
          </button>
        </div>
        
        <div className="p-8">
          {activeTab === 'login' ? (
            <form onSubmit={(e) => handleFormSubmit(e, 'member')} className="space-y-6">
              <h2 className="text-3xl font-bold text-center text-white mb-6">Selamat Datang Kembali</h2>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input type="email" id="email" required className="w-full mt-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500" />
              </div>
              <div>
                <label htmlFor="password-login" className="block text-sm font-medium text-gray-300">Password</label>
                <input type="password" id="password-login" required className="w-full mt-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500" />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold py-3 px-4 rounded-md hover:opacity-90 transition-opacity duration-300 shadow-lg">
                Login
              </button>
              <div className="text-center">
                <a href="#" onClick={(e) => handleFormSubmit(e, 'admin')} className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                  Login Admin
                </a>
              </div>
            </form>
          ) : (
            <form onSubmit={(e) => handleFormSubmit(e, 'member')} className="space-y-4">
               <h2 className="text-3xl font-bold text-center text-white mb-6">Daftar Akun Afiliasi</h2>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nama Lengkap</label>
                <input type="text" id="name" required className="w-full mt-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500" />
              </div>
              <div>
                <label htmlFor="email-register" className="block text-sm font-medium text-gray-300">Email</label>
                <input type="email" id="email-register" required className="w-full mt-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500" />
              </div>
              <div>
                <label htmlFor="password-register" className="block text-sm font-medium text-gray-300">Password</label>
                <input type="password" id="password-register" required className="w-full mt-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500" />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold py-3 px-4 rounded-md hover:opacity-90 transition-opacity duration-300 shadow-lg">
                Buat Akun
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
