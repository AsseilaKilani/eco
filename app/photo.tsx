import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Photo() {
    return (
        <div
            className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
            <Image
                src="/telechargement.jpeg" // ou '/t%C3%A9l%C3%A9chargement.jpeg' si vous gardez l'accent dans le nom
                alt="Photo de profil"
                width={1000}
                height={1000}
                className="rounded-full object-cover"
            />
            <p className="text-[44px]">Acme</p>
        </div>
    );
}
