import { useState, useEffect } from 'react';

const Eyes = ({ style }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            setMousePosition({ x: clientX, y: clientY });

            // Calculate eye movement
            const eye = document.querySelector('.eye');
            if (eye) {
                const eyeRect = eye.getBoundingClientRect();
                const eyeCenterX = eyeRect.left + eyeRect.width / 2;
                const eyeCenterY = eyeRect.top + eyeRect.height / 2;

                // Calculate angle between mouse and eye center
                const angle = Math.atan2(clientY - eyeCenterY, clientX - eyeCenterX);

                // Limit eye movement radius
                const radius = 5;
                const moveX = Math.cos(angle) * radius;
                const moveY = Math.sin(angle) * radius;

                setEyePosition({ x: moveX, y: moveY });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div style={{
            display: 'inline-block',
            position: 'relative',
            ...style
        }}>
            <div style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: 'white',
                border: '2px solid black',
                position: 'relative',
                overflow: 'hidden'
            }} className="eye">
                <div style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: 'black',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(calc(-50% + ${eyePosition.x}px), calc(-50% + ${eyePosition.y}px))`
                }} />
            </div>
        </div>
    );
};

export default Eyes;