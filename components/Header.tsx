
import React from 'react';

const KaabaLogo: React.FC = () => (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400">
        <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12L21 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12V22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12L3 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 9.5L17 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

interface HeaderProps {
  userRole: 'member' | 'admin' | null;
  onLoginClick: () => void;
  onDashboardClick: () => void;
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ userRole, onLoginClick, onDashboardClick, onLogoClick }) => {
  return (
    <header className="py-6 flex items-center justify-between">
      <div className="flex items-center space-x-4 cursor-pointer logo-container-style" onClick={onLogoClick}>
        <KaabaLogo />
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-yellow-400" style={{fontFamily: `'Cinzel', serif`}}>
            ROYAL CAHAYA TRAVEL
          </h1>
          <p className="text-sm text-yellow-200 opacity-80">Ibadah Semurni Emas</p>
          <p className="text-xs text-gray-400 mt-1">PPIU 09102300155360003</p>
        </div>
      </div>
      <div>
        {userRole ? (
          <button onClick={onDashboardClick} className="bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg">
            {userRole === 'admin' ? 'Admin Dashboard' : 'Dashboard'}
          </button>
        ) : (
          <button onClick={onLoginClick} className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold py-2 px-6 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300">
            Login Anggota
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;