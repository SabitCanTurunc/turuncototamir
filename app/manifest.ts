import { MetadataRoute } from 'next';
import { APP_CONFIG } from './constants';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: APP_CONFIG.companyFullName,
        short_name: APP_CONFIG.companyName,
        description: "Hatay'ın 1 numaralı oto tamir servisi. Garantili işçilik, 7/24 hizmet.",
        start_url: '/',
        display: 'standalone',
        background_color: '#020617',
        theme_color: '#f97316', // Orange-500
        icons: [
            {
                src: '/BeyazHeaderLogo.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/BeyazHeaderLogo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
