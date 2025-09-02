
import React from 'react';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d=" M16 4 A12 12 0 0 0 4 16 A12 12 0 0 0 16 28 A12 12 0 0 0 28 16 A12 12 0 0 0 16 4 Z" fill="#25D366"/>
    <path d="M22.31,17.23c-0.27-0.14-1.61-0.79-1.85-0.88c-0.25-0.09-0.43-0.14-0.61,0.14c-0.18,0.28-0.7,0.88-0.86,1.06 c-0.16,0.18-0.32,0.2-0.59,0.07c-0.27-0.13-1.14-0.42-2.17-1.34c-0.81-0.72-1.35-1.61-1.51-1.88c-0.16-0.27-0.02-0.42,0.12-0.56 c0.13-0.13,0.29-0.34,0.43-0.51c0.14-0.17,0.19-0.28,0.28-0.47c0.09-0.19,0.05-0.36-0.02-0.5c-0.07-0.14-0.61-1.5-0.84-2.05 c-0.22-0.55-0.45-0.47-0.61-0.47c-0.15,0-0.34-0.02-0.52-0.02c-0.18,0-0.47,0.07-0.72,0.34c-0.25,0.27-0.98,0.96-0.98,2.35 c0,1.39,1,2.72,1.14,2.92c0.14,0.2,1.74,2.65,4.24,3.74c0.59,0.26,1.06,0.41,1.41,0.53c0.56,0.18,1.08,0.16,1.48,0.1 c0.44-0.07,1.39-0.56,1.58-1.1c0.2-0.54,0.2-1.01,0.13-1.1c-0.07-0.1-0.25-0.16-0.52-0.29C22.6,17.37,22.31,17.23,22.31,17.23z" fill="#FFFFFF"/>
  </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

export const TestDriveIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 0 .094-1.598m15.002 3.472a3.375 3.375 0 0 0-.094-1.598m-15.002 3.472 3.75-3.75m11.252 3.75-3.75-3.75M3 14.25v-3.375c0-.621.504-1.125 1.125-1.125h1.5c.621 0 1.125.504 1.125 1.125v3.375m0 0c-.375.621-.625 1.292-.625 2.016V17.25m11.25 0v-2.234c0-.724-.25-1.395-.625-2.016m-10.625 0h9.375" />
    </svg>
);

export const CalculatorIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export const ContactIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="url(#instagram-gradient-icon)" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="instagram-gradient-icon" cx="30%" cy="107%" r="150%">
                <stop offset="0%" stopColor="#fdf497" />
                <stop offset="5%" stopColor="#fdf497" />
                <stop offset="45%" stopColor="#fd5949" />
                <stop offset="60%" stopColor="#d6249f" />
                <stop offset="90%" stopColor="#285AEB" />
            </radialGradient>
        </defs>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947C23.728 2.69 21.31.273 16.948.072 15.667.014 15.259 0 12 0z"/>
        <path d="M12 6.865c-2.835 0-5.135 2.3-5.135 5.135s2.3 5.135 5.135 5.135 5.135-2.3 5.135-5.135-2.3-5.135-5.135-5.135zm0 8.27c-1.733 0-3.135-1.402-3.135-3.135s1.402-3.135 3.135-3.135 3.135 1.402 3.135 3.135-1.402 3.135-3.135 3.135z"/>
        <circle cx="16.95" cy="7.05" r="1.235"/>
    </svg>
);

export const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.88-.36-7.02-1.88-1.82-1.26-3.15-3.16-3.86-5.23-.42-1.2-.64-2.48-.66-3.75.02-1.5.23-3.01.63-4.45.93-3.41 3.1-6.3 6.18-8.15 2.15-1.29 4.6-1.97 7.02-1.84.07-1.53.07-3.08.06-4.61.24-.01.47-.02.7-.02zM12.14 7.04c-1.31.02-2.61.01-3.92-.02-1.55.08-3.05.78-4.21 1.89-1.19 1.14-1.92 2.72-2.11 4.39-.15 1.37-.1 2.82.16 4.2.46 2.45 1.92 4.54 3.91 5.9 2.21 1.51 4.93 2.01 7.55 1.32 1.63-.43 3.08-1.5 4.2-2.86.99-1.2 1.64-2.64 1.8-4.18.13-1.27.06-2.57-.12-3.83-.22-1.52-.7-2.99-1.45-4.35-1.07-1.9-2.65-3.42-4.55-4.4-.6-.31-1.24-.53-1.89-.72-.02 1.52-.03 3.04-.02 4.57z"/>
    </svg>
);

export const TagIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
    </svg>
);

export const ExchangeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h18m-7.5-12L21 9m0 0L16.5 4.5M21 9H3" />
    </svg>
);

export const TruckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m6 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-12.75 0H3V11.25A2.25 2.25 0 0 1 5.25 9h6A2.25 2.25 0 0 1 13.5 11.25v7.5m-9-7.5h10.5m0 0a2.25 2.25 0 0 1 2.25 2.25v4.5a2.25 2.25 0 0 1-2.25 2.25H16.5" />
    </svg>
);

export const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
);

export const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);

export const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
);
