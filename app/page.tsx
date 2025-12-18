import Link from 'next/link';
import React, {JSX} from 'react';
import './globals.css';

export default function HomePage(): JSX.Element {
    return (
        <main className="home-container">
            <h1 className="home-title">Accueil</h1>
            <p>
                <Link href="/cv" className="cv-link">Voir mon CV</Link>
            </p>
        </main>
    );
}
