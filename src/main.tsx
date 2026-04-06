import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react';
import './i18n';

createRoot(document.getElementById('root')!).render(
    <NextUIProvider>
        <App />
    </NextUIProvider>,
);