export const fadeIn = (direction, delay) => {
    return{
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            delay: delay,
            transition: {
                type: 'tween',
                duration: 0.8,
                ease: [0.25, 0.25, 0.25, 0.25],
            }
        }
    }
};