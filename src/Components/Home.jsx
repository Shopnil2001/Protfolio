import React from 'react';

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import reactimage from '../assets/react.svg';

//   import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
 import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.


const Home = () => {
    const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            // await loadAll(engine);
            await loadFull(engine);
            await loadSlim(engine);
            
            
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div className='w-full'>
           { init && <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 5,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.8,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#baeeed",
                    },
                    
                    links: {
                        color: "#39db94",
                        distance: 100,
                        enable: true,
                        opacity: .7,
                        width: 1,
                    },
                    
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 4,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 500,
                        },
                        value: 500,
                    },
                    opacity: {
                        value: 0.8,
                    },
                    shape: {
                        type: ["image","circle"],
                        image: {
                          src:reactimage
                            
                        }
                      },
                    size: {
                        value: { min: 5, max: 10 }
                    },
                },
                detectRetina: true,
            }}
        />
}
        
        </div> 
    );
};

export default Home;