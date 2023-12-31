import { ref } from 'vue'

export const particlesOption = ref({
    fpsLimit: 60,
    interactivity: {
        events: {
        onClick: {
            enable: true,
            mode: 'repulse'
        },
        onHover: {
            enable: true,
            mode: 'grab'
        },
        resize: true
        },
        modes: {
        bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40
        },
        push: {
            quantity: 4
        },
        repulse: {
            distance: 200,
            duration: 0.4
        }
        }
    },
    particles: {
        color: {
        value: '#ffffff'
        },
        links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
        },
        collisions: {
        enable: true
        },
        move: {
        direction: 'none',
        enable: true,
        outModes: {
            default: 'bounce'
        },
        random: false,
        speed: 1,
        straight: false
        },
        number: {
        density: {
            enable: true,
            area: 1000
        },
        value: 80
        },
        opacity: {
        value: 0.5
        },
        shape: {
        type: 'circle'
        },
        size: {
        value: { min: 1, max: 5 },
        }
    },
    detectRetina: true
    }
)