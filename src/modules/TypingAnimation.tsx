import { useEffect, useState } from 'react';

const TypingAnimation: React.FC = () => {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const wordList = ['Student', 'Full Stack Developer']; // Words to loop through

    useEffect(() => {
        const handleTyping = () => {
            // Current word in the loop
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
    }, [displayText, isDeleting, loopNum, typingSpeed, wordList]);

    return (
        <h1 className="text-3xl">
            I am <span className={"text-blue-700"}>{displayText}</span>
            <span className="blinking-cursor"></span>
        </h1>
    );
};

export default TypingAnimation;
