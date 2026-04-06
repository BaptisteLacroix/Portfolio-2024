import React from 'react';

const CreditComponent: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="container mx-auto max-w-7xl pb-12 px-12">
            <div className="flex flex-col justify-center items-center gap-1"><p
                className="text-sm text-default-400">© Copyright {currentYear} Baptiste Lacroix.</p></div>
        </footer>
    );
};

export default CreditComponent;