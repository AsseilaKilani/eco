import React from 'react';
import './global.css';

export default function Page() {
    const photoPath = encodeURI('/téléchargement.jpeg');
    const cvPath = '/cv.pdf';

    return (
        <main className="container cv-page">
            <iframe src={cvPath} title="CV" className="cv-iframe" />

            <a
                href={photoPath}
                target="_blank"
                rel="noopener noreferrer"
                className="avatar-link"
                aria-label="Ouvrir la photo"
            >
                <img src={photoPath} alt="Photo" className="avatar" />
            </a>

            <a href={cvPath} download className="btn download-btn" aria-label="Télécharger le CV">
                Télécharger le CV
            </a>
        </main>
    );
}
