// file: `app/cv/competence/page.tsx`
import React from 'react';

// file: `app/cv/competence/page.tsx`



export default function CompetencePage() {
    const skills = [
        { name: 'Java', src: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
        { name: 'Angular', src: 'https://angular.io/assets/images/logos/angular/angular.svg' }, // alternatif officiel
        { name: 'React', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
        { name: 'Flask', src: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg' },
        { name: 'Docker', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' },
        { name: 'Nomad', src: '/nomad.png' },
        { name: 'Jenkins', src: 'https://www.jenkins.io/images/logos/jenkins/jenkins.svg' },
        { name: 'Git', src: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
        { name: 'Laravel', src: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' },
        { name: 'Python', src: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' }, // variante sans texte
    ];
    return (
        <main className="max-w-3xl mx-auto p-6">
            <section className="bg-white rounded-lg p-6 shadow-sm">
                <header className="mb-4">
                    <h1 className="text-2xl font-semibold">Compétences</h1>
                    <p className="text-sm text-gray-500">Technologies et outils</p>
                </header>

                <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 items-center">
                    {skills.map((s) => (
                        <figure key={s.name} className="flex flex-col items-center text-center">
                            <img
                                src={s.src}
                                alt={s.name}
                                title={s.name}
                                loading="lazy"
                                className="w-full h-16 object-contain"
                            />
                            <figcaption className="mt-2 text-xs text-gray-600">{s.name}</figcaption>
                        </figure>
                    ))}
                </div>
            </section>
        </main>
    );
}
