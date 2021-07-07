import React from "react";
import Particles from 'react-particles-js';

import "./particles.css";

const particlesOptions = {
    particles: {
      number: {
        value: 77,
        density: {
          enable: true,
          value_area: 1000
        }
      }
    }
  }

export default function ParticlesGC() {

    return <Particles className="particles" params={particlesOptions}/>

}

