import React from 'react';
import '../ui/globals.css';
import SideNav from '../ui/cv/sidenav';

export default function CvLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex">
            <aside className="w-80 hidden md:block border-r">
                <SideNav />
            </aside>
            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    );
}