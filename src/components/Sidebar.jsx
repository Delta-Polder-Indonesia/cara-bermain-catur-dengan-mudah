import React from 'react';
import { navigation } from '../data/navigation';

const Sidebar = () => {
    return (
        <aside className="hidden lg:block w-72 shrink-0">
            <div className="sidebar bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-2 mb-8">
                    <svg viewBox="0 0 100 100" className="w-8 h-8 fill-[#81b64c]">
                        <path d="M50 10c-15 0-20 10-20 15 0 10 5 15 5 25H30v10h40V50h-5c0-10 5-15 5-25 0-5-5-15-20-15z" />
                        <path d="M25 75h50v5H25zM20 85h60v5H20z" />
                    </svg>
                    <h2 className="text-xl font-bold tracking-tight">Daftar Isi</h2>
                </div>
                <nav className="space-y-1">
                    {navigation.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="nav-link block py-2 px-3 rounded-lg text-sm font-medium text-slate-600 hover:text-chess-green"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
