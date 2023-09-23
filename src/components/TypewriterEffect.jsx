import Typewriter from "typewriter-effect";

export default function TypewriterEffect() {
  return (
    <Typewriter
      options={{
        strings: ["Igniting a Revolution in HR Innovation"],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
