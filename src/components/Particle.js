import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Particle() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "polygon",
            polygon: {
              sides: 5
            }
          },
          opacity: {
            value: 0.4,
            random: false,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            animation: {
              enable: false,
              speed: 4,
              minimumValue: 0.3,
              sync: false
            }
          },
          links: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out"
            },
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600
            }
          }
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: false,
              mode: "grab"
            },
            onClick: {
              enable: true,
              mode: "remove"
            },
            resize: {
              enable: true
            }
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 1
              }
            },
            bubble: {
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0
            },
            repulse: {
              distance: 400,
              duration: 0.4
            },
            push: {
              quantity: 4
            },
            remove: {
              quantity: 2
            }
          }
        },
        detectRetina: true
      }}
    />
  );
}

export default Particle;
