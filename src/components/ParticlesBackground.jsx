import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSnowPreset } from 'tsparticles-preset-snow';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSnowPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: 'snow',
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: {
            value: '#d8e2e8',
          },
        },
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              area: 800,
            },
          },
          size: {
            value: { min: 1, max: 4 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
              sync: false,
            },
          },
          move: {
            direction: 'bottom',
            enable: true,
            speed: 1.2,
            straight: false,
            random: true,
            outModes: {
              default: 'out',
            },
            trail: {
              enable: true,
              length: 5,
              fillColor: '#d8e2e8',
            },
          },
          opacity: {
            value: 0.8,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.3,
              sync: false,
            },
          },
          color: {
            value: ['#ffffff', '#d0e7ff', '#eef6fa'], // snowy whites & light blues
          },
          shape: {
            type: 'circle',
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 0.4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
