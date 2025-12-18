// file: `app/contact/page.tsx`
import React from 'react';

export default function ContactPage() {
    const email = 'votre@domaine.tld'; // remplacer par votre adresse
    const subject = encodeURIComponent('Contact depuis le site');
    const body = encodeURIComponent('Bonjour,\n\nJe vous contacte au sujet de ...\n\nCordialement,');
    const mailto = `mailto:${email}?subject=${subject}&body=${body}`;

    return (
        <main className="max-w-3xl mx-auto p-6">
            <section className="bg-white rounded-lg p-6 shadow-sm text-center">
                <h1 className="text-2xl font-semibold mb-2">Contact</h1>
                <p className="text-sm text-gray-500 mb-4">Cliquez pour ouvrir votre client mail</p>
                <a href={mailto} className="inline-block px-4 py-2 bg-blue-600 text-white rounded">
                    Envoyer un message
                </a>
            </section>
        </main>
    );
}
