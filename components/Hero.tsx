
import React from 'react';

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <section className="py-12 md:py-20 text-center relative">
      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black p-2 px-4 transform -skew-x-12 shadow-lg">
        <h3 className="font-bold text-lg">BATCH 2</h3>
        <p className="text-sm">Kuota Terbatas</p>
      </div>

      <h2 className="text-2xl md:text-3xl text-yellow-300 italic">"Amanah Tabungan Baitullah"</h2>
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white my-2 uppercase tracking-wider">
        Plus Thaif
      </h1>

      <button 
        onClick={onRegisterClick}
        className="mt-8 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold text-xl py-4 px-10 rounded-lg hover:scale-105 transform transition-transform duration-300 shadow-2xl animate-pulse"
      >
        Daftar Sekarang
      </button>

      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="hidden md:block w-60 h-40 rounded-lg overflow-hidden shadow-2xl transform -rotate-6">
            <img src="https://picsum.photos/300/200?image=1072" alt="Thaif Cable Car" className="w-full h-full object-cover"/>
        </div>

        <div className="relative">
          <div className="p-2 bg-gradient-to-br from-yellow-300 to-amber-600 rounded-full shadow-2xl">
            <div className="bg-[#003C43] rounded-full w-64 h-64 sm:w-72 sm:h-72 flex flex-col items-center justify-center p-4">
              <span className="text-7xl sm:text-8xl font-bold text-white">28,5</span>
              <span className="text-3xl sm:text-4xl font-semibold text-yellow-400 -mt-2">juta</span>
              <div className="mt-4 text-center">
                <p className="text-lg font-medium text-white">DP <span className="font-bold">3 juta</span></p>
                <p className="text-sm text-gray-300">tabungan 17 x <span className="font-bold">1,5 juta</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block w-60 h-40 rounded-lg overflow-hidden shadow-2xl transform rotate-6">
            <img src="https://picsum.photos/300/200?image=1073" alt="Makkah-Madinah High Speed Train" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <span className="bg-red-600 text-white text-xl font-bold py-1 px-4 transform -rotate-12">GRATIS</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
