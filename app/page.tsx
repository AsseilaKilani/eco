// file: app/page.tsx
import Link from 'next/link';
import React from 'react';

export default function HomePage(): JSX.Element {
    return (
        <main style={{ maxWidth: 800, margin: '2rem auto', padding: '1rem' }}>
            <h1>Accueil</h1>
            <p>
                <Link href="/cv">Voir mon CV</Link>
            </p>
        </main>
    );
}
