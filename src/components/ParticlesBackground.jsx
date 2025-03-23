import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSnowPreset } from 'tsparticles-preset-snow';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSnowPreset(engine); // Load the snow preset into tsparticles
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: 'snow',
        fullScreen: {
          enable: true,
          zIndex: -1, // behind all content
        },
        background: {
          color: {
            value: "#d8e2e8", // Matches your current background tone
          },
        },
      }}
    />
  );
}
