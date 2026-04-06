import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

const TypingAnimation: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const getWordList = () => {
        return [
            t("typing.developer"),
            t("typing.solver"),
            t("typing.position")
        ];
    };

    useEffect(() => {
        const wordList = getWordList();
        const handleTyping = () => {
            const currentWord = wordList[loopNum % wordList.length];
            const updatedText = isDeleting
                ? currentWord.substring(0, displayText.length - 1)
                : currentWord.substring(0, displayText.length + 1);

            setDisplayText(updatedText);

            // Speed up typing when deleting
            setTypingSpeed(isDeleting ? 100 : 150);

            // When word is complete
            if (!isDeleting && updatedText === currentWord) {
                // Pause before deleting
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                // Move to the next word
                setLoopNum(loopNum + 1);
            }
        };

        const typingTimeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimeout);
    }, [displayText, isDeleting, loopNum, typingSpeed, i18n.language]);

    return (
        <>
            {t("typing.prefix")}<span className={"text-blue-700 dark:text-blue-400"}>{displayText}</span>
            <span className="blinking-cursor"></span>
        </>
    );
};

export default TypingAnimation;
