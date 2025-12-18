export default function ExperiencePage() {
    return (
        <main className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-semibold mb-6">Expériences</h1>

            <section className="space-y-6">
                <article className="bg-white rounded-lg p-6 shadow-sm">
                    <header className="flex items-baseline justify-between">
                        <div>
                            <h2 className="text-xl font-medium">Animateur / Animatrice</h2>
                            <p className="text-sm text-gray-500">Centres de loisirs, colonies — missions saisonnières</p>
                        </div>
                        <time className="text-sm text-gray-400">Plusieurs saisons</time>
                    </header>
                    <ul className="mt-3 list-disc list-inside text-sm text-gray-700">
                        <li>Encadrement d&#39;enfants (3–12 ans) et animation d&#39;ateliers ludiques et éducatifs.</li>
                        <li>Conception de programmes d&#39;activités, gestion des plannings et des équipes.</li>
                        <li>Garantir la sécurité, la communication avec les familles et le respect des consignes.</li>
                    </ul>
                </article>

                <article className="bg-white rounded-lg p-6 shadow-sm">
                    <header className="flex items-baseline justify-between">
                        <div>
                            <h2 className="text-xl font-medium">Intérim / Missions ponctuelles</h2>
                            <p className="text-sm text-gray-500">Agences d&#39;intérim — divers secteurs</p>
                        </div>
                        <time className="text-sm text-gray-400">Missions variées</time>
                    </header>
                    <ul className="mt-3 list-disc list-inside text-sm text-gray-700">
                        <li>Postes en logistique, production et manutention : polyvalence et respect des procédures.</li>
                        <li>Adaptation rapide aux environnements et procédures clients.</li>
                        <li>Travail en équipe, ponctualité et sécurité au poste.</li>
                    </ul>
                </article>

                <article className="bg-white rounded-lg p-6 shadow-sm">
                    <header className="flex items-baseline justify-between">
                        <div>
                            <h2 className="text-xl font-medium">Stage — Développeur Web</h2>
                            <p className="text-sm text-gray-500">Maison de l&#39;emploi et des métiers d&#39;Arras</p>
                        </div>
                        <time className="text-sm text-gray-400">Stage (durée à préciser)</time>
                    </header>
                    <ul className="mt-3 list-disc list-inside text-sm text-gray-700">
                        <li>Développement d&#39;une application web interne et maintenance du site public.</li>
                        <li>Technologies : TypeScript, React, Next.js — création de pages, composants réutilisables.</li>
                        <li>Tests basiques, optimisation des performances et déploiement/validation avec l&#39;équipe.</li>
                        <li>Accompagnement des utilisateurs et documentation des fonctionnalités livrées.</li>
                    </ul>
                </article>

                <article className="bg-white rounded-lg p-6 shadow-sm">
                    <header className="flex items-baseline justify-between">
                        <div>
                            <h2 className="text-xl font-medium">Contrat étudiant — Assistant numérique</h2>
                            <p className="text-sm text-gray-500">Maison de l&#39;emploi et des métiers d&#39;Arras</p>
                        </div>
                        <time className="text-sm text-gray-400">Contrat étudiant</time>
                    </header>
                    <ul className="mt-3 list-disc list-inside text-sm text-gray-700">
                        <li>Accueil du public, mise à jour de contenus et aide à l&#39;utilisation d&#39;outils numériques pour la recherche d&#39; emploi.</li>
                        <li>Soutien pour la création de CV en ligne, ateliers collectifs et gestion de petites tâches web.</li>
                        <li>Collaboration avec les équipes pour améliorer la visibilité des services locaux.</li>
                    </ul>
                </article>
            </section>
        </main>
    );
}
