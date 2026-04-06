import React from "react";

interface ProtectedEmailLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    message: string;
    subject?: string
}

const ProtectedEmailLink: React.FC<ProtectedEmailLinkProps> = ({message, subject, ...props}) => {
    const email = 'contact@baptiste-lacroix.fr';
    const encodedEmail = email
        .split('')
        .map(char => `%${char.charCodeAt(0).toString(16).toUpperCase()}`)
        .join('');

    const mailto = `mailto:${encodedEmail}${subject ? `?subject=${subject}` : ''}`;

    return (
        <a href={mailto} {...props}>
            {message}
        </a>
    );
};

export default ProtectedEmailLink;