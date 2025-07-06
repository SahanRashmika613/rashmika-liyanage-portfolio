import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
            width: "100%",
            height: "100%",
          }}
          options={{
            background: { color: "#000000" },
            fpsLimit: 60,
            particles: {
              number: { value: 100 },
              color: { value: ["#ffffff", "#ff0000"] }, // white + red
              links: {
                color: "#ff0000",
                enable: true,
                distance: 150,
                opacity: 0.5,
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
              size: {
                value: 2,
                random: true,
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 1,
                  sync: false,
                },
              },
              move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                outModes: "bounce",
              },
              twinkle: {
                particles: {
                  enable: true,
                  frequency: 0.1,
                  color: "#ffffff", // twinkle white
                  opacity: 1,
                },
              },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
              },
              modes: {
                repulse: { distance: 100 },
                push: { quantity: 4 },
              },
            },
          }}
        />
      )}
    </>
  );
}
