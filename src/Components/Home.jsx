import React from 'react';
import { FaDownload } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import reactimage from '../assets/react.svg';

//   import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
 import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import Typewriter from 'typewriter-effect';
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
    
    
      const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }
    return (
        <div >
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
                        direction: "top-right",
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
                            area: 300,
                        },
                        value: 300,
                    },
                    opacity: {
                        value: 0.8,
                    },
                    shape: {
                        type: ["image","circle"],
                        image: {
                          src:reactimage
                            
                        },
                        polygon: {
                            nb_sides: 5
                          },
                      },
                    size: {
                        value: { min: 5, max: 10 }
                    },
                },
                detectRetina: true,
            }}
        />
}
<div className='mx-auto text-left' >
   <div className='pt-20 pl-10'>
   <h1 className='text-3xl text-white font-bold text-left'>Hi! I Am Shopnil.</h1>
    <div className='text-3xl text-orange-300 mx-auto  text-left  font-bold'>
    <h1  >
       
        
    <Typewriter
  options={{
    strings: ['I am a Junior MERN Stack Developer'],
    autoStart: true,
    loop: true,
  }}
/>
     </h1>
    <h1 className='text-2xl text-white mx-auto  text-left  font-bold'>I am looking for opportunities to improve my skills</h1>
    </div>
      <button className='btn btn-accent text-left border-b-4 border-b-zinc-600'><a href="/src/assets/Assignment2.pdf" download className='flex align-middle gap-2'>Resume<FaDownload /></a></button>
   </div>
    </div>
        </div> 
    );
};

export default Home;