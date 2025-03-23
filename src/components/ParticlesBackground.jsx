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
            value: "#d8e2e8", // match your theme
          },
        },
      }}
    />
  );
}
