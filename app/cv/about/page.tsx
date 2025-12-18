// file: `app/cv/about/page.tsx`

export default function AboutPage() {
    return (
        <main className="max-w-3xl mx-auto p-6">

            <section id="about" className="bg-white rounded-lg p-6 shadow-sm">
                <header className="flex items-center gap-4">
                    <img src="/avatar.png" alt="Avatar" className="w-20 h-20 rounded-full object-cover" />
                    <div>
                        <h1 className="text-2xl font-semibold">Asseila Kilani</h1>
                        <p className="text-sm text-gray-500">Développeur Back-End/Devops</p>
                    </div>
                </header>

                <div className="mt-4 prose prose-sm">
                    <p>
                        Passionné par le développement back-end et les pratiques DevOps, je m&#39;efforce de créer des
                        solutions robustes et évolutives. Mon expertise inclut la gestion des infrastructures, autonomization
                        des déploiements et optimisation des performances des applications.
                    </p>

                    <h2 className="mt-4">Résumé</h2>
                    <ul>
                        <li>3ème année de BUT.</li>
                        <li>Architecture d&#39;applications, testsé, optimisation des performances.</li>
                        <li>Collaboration en équipe, revue de code et bonnes pratiques.</li>
                    </ul>

                    <h2 className="mt-4">Contact rapide</h2>
                    <p className="text-sm">
                        Email : <a href="mailto:kilani.asseila@gmail.com" className="text-blue-600">kilani.asseila@gmail.com </a>
                    </p>
                </div>
            </section>
        </main>
    );
}
