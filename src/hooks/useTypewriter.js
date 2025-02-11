import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 50) => {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer;

        const animateText = () => {
            if (!isDeleting) {
                if (displayText.length < text.length) {
                    setDisplayText(prev => prev + text.charAt(prev.length));
                    timer = setTimeout(animateText, speed);
                } else {
                    // Esperar un momento antes de comenzar a borrar
                    timer = setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(prev => prev.slice(0, -1));
                    timer = setTimeout(animateText, speed / 2);
                } else {
                    setIsDeleting(false);
                    // Esperar un momento antes de comenzar a escribir de nuevo
                    timer = setTimeout(animateText, 500);
                }
            }
        };

        timer = setTimeout(animateText, speed);

        return () => clearTimeout(timer);
    }, [text, speed, displayText, isDeleting]);

    return displayText;
};

export default useTypewriter; 