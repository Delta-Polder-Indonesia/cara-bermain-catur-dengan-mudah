import React from 'react';

const Header = () => {
    return (
        <header className="header-bg p-8 md:p-12 flex flex-col md:flex-row justify-between items-center text-white gap-6">
            <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md">
                    <svg viewBox="0 0 100 100" className="w-12 h-12 fill-white">
                        <path d="M50 10c-15 0-20 10-20 15 0 10 5 15 5 25H30v10h40V50h-5c0-10 5-15 5-25 0-5-5-15-20-15z" />
                        <path d="M25 75h50v5H25zM20 85h60v5H20z" />
                    </svg>
                </div>
                <div>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                        Chess<span className="font-light opacity-80">.com</span>
                    </h1>
                    <p className="text-sm uppercase tracking-[0.3em] font-semibold opacity-70">
                        Official Hub Indonesia
                    </p>
                </div>
            </div>
            <div className="text-center md:text-right">
                <p className="text-lg md:text-xl font-bold uppercase tracking-widest leading-none opacity-80">
                    Panduan Mudah
                </p>
                <p className="text-4xl md:text-6xl font-black uppercase leading-tight mt-1">
                    Bermain Catur
                </p>
            </div>
        </header>
    );
};

export default Header;
