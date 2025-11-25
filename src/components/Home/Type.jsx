import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
        delay: 50, // Typing speed (lower is faster)
        deleteSpeed: 70, // Deleting speed
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Software Developer")
          .pauseFor(1000) // Pause for 1 second after typing
          .deleteAll()
          .typeString("Mobile App Developer")
          .pauseFor(1000)
          .deleteAll()
          .typeString("MERN Stack Developer")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Freelancer")
          .pauseFor(1000)
          .start();
      }}
    />
  );
}

export default Type;