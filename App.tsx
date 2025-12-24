
import React, { useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import PackageFeatures from './components/PackageFeatures.tsx';
import PricingDetails from './components/PricingDetails.tsx';
import PackageDetails from './components/PackageDetails.tsx';
import BonusSection from './components/BonusSection.tsx';
import Footer from './components/Footer.tsx';
import LoginPage from './components/LoginPage.tsx';
import AffiliateDashboard from './components/AffiliateDashboard.tsx';
import AdminDashboard from './components/AdminDashboard.tsx';
import RegistrationPage from './components/RegistrationPage.tsx';
import PaymentPage from './components/PaymentPage.tsx';

type View = 'home' | 'login' | 'dashboard' | 'admin_dashboard' | 'registration' | 'payment';
type UserRole = 'member' | 'admin' | null;

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [currentInstallment, setCurrentInstallment] = useState<number | null>(null);

  const handleLoginSuccess = (role: UserRole) => {
    setUserRole(role);
    setView(role === 'admin' ? 'admin_dashboard' : 'dashboard');
  };

  const handleLogout = () => {
    setUserRole(null);
    setView('home');
  };

  const handlePayInstallment = (installmentNumber: number) => {
      setCurrentInstallment(installmentNumber);
      setView('payment');
  };

  const renderContent = () => {
    switch (view) {
      case 'login':
        return <LoginPage onLoginSuccess={handleLoginSuccess} />;
      case 'dashboard':
        return <AffiliateDashboard onLogout={handleLogout} onPayInstallment={handlePayInstallment} />;
      case 'admin_dashboard':
        return <AdminDashboard onLogout={handleLogout} />;
      case 'registration':
        return <RegistrationPage onBackToHome={() => setView('home')} />;
      case 'payment':
        return <PaymentPage installmentNumber={currentInstallment || 0} onBackToDashboard={() => setView('dashboard')} />;
      case 'home':
      default:
        return (
          <>
            <main>
              <Hero onRegisterClick={() => setView('registration')} />
              <PackageFeatures />
              <PricingDetails />
              <PackageDetails />
              <BonusSection />
            </main>
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#003C43] text-white font-sans overflow-x-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23e9c46a\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <Header 
          userRole={userRole} 
          onLoginClick={() => setView('login')} 
          onDashboardClick={() => setView(userRole === 'admin' ? 'admin_dashboard' : 'dashboard')}
          onLogoClick={() => setView('home')}
        />
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
