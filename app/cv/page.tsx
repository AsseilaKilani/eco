import React from 'react';

export default function Page() {
    const photoPath = encodeURI('/téléchargement.jpeg'); // ou '/telechargement.jpeg' si renommé
    const cvPath = '/cv.pdf';

    return (
        <main style={{ height: '100vh', margin: 0 }}>
            <iframe src={cvPath} title="CV" style={{ width: '100%', height: '100%', border: 'none' }} />

            {/* Vignette photo en haut à droite */}
            <a
                href={photoPath}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: 'fixed',
                    right: 16,
                    top: 16,
                    zIndex: 999,
                    display: 'inline-block',
                }}
            >
                <img
                    src={photoPath}
                    alt="Photo"
                    style={{
                        width: 96,
                        height: 96,
                        objectFit: 'cover',
                        borderRadius: '50%',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        display: 'block',
                    }}
                />
            </a>

            {/* Lien de téléchargement discret en haut à gauche */}
            <a
                href={cvPath}
                download
                style={{
                    position: 'fixed',
                    left: 16,
                    top: 16,
                    zIndex: 999,
                    background: 'rgba(255,255,255,0.9)',
                    padding: '8px 12px',
                    borderRadius: 8,
                    textDecoration: 'none',
                    color: '#111',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                    fontSize: 14,
                }}
            >
                Télécharger le CV
            </a>
        </main>
    );
}
