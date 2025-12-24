
import React from 'react';

const BonusCircle: React.FC<{ title: string, amount: string, tier?: string }> = ({ title, amount, tier }) => (
    <div className="relative w-40 h-40 sm:w-48 sm:h-48">
        <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold py-1 px-3 rounded-full z-10 transform -translate-y-1/3 translate-x-1/4 rotate-12">
            BONUS
        </div>
        <div className="p-1 bg-gradient-to-br from-yellow-300 to-amber-600 rounded-full w-full h-full">
            <div className="bg-[#003C43] rounded-full w-full h-full flex flex-col items-center justify-center p-2 text-center">
                <span className="text-xs text-yellow-300">{title}</span>
                {tier && <span className="text-xs text-yellow-300">{tier}</span>}
                <span className="text-3xl sm:text-4xl font-bold text-white leading-tight">{amount}</span>
            </div>
        </div>
    </div>
);

const FreeBonus: React.FC = () => (
     <div className="relative w-40 h-40 sm:w-48 sm:h-48">
        <div className="absolute -top-2 -left-2 text-3xl font-extrabold text-red-500 animate-pulse transform -rotate-12">
            FREE!
        </div>
        <div className="p-1 bg-gradient-to-br from-yellow-300 to-amber-600 rounded-full w-full h-full">
            <div className="bg-[#003C43] rounded-full w-full h-full flex flex-col items-center justify-center p-2 text-center">
                <span className="text-6xl font-bold text-white">6+1</span>
                <span className="text-xs text-gray-300 mt-1">tidak berlaku kelipatan</span>
            </div>
        </div>
    </div>
)

const BonusSection: React.FC = () => {
    return (
        <section className="my-16 py-12 bg-gray-800 bg-opacity-30 rounded-2xl">
            <h2 className="text-3xl font-bold text-center text-yellow-400 mb-10">Promo & Bonus Spesial</h2>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                <BonusCircle title="Syiar Jama'ah" amount="1 juta" />
                <BonusCircle title="Syiar Jama'ah" tier="(tier1)" amount="500rb" />
                <BonusCircle title="Syiar Jama'ah" tier="(tier2)" amount="500rb" />
                <FreeBonus />
            </div>
            <p className="text-center mt-8 text-yellow-200">Bonus /jama'ah setelah 6 pertama</p>
        </section>
    );
}

export default BonusSection;
