import Typewriter from "typewriter-effect";
function TypeRoles() {
  return (
    <div>
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "Competitive Programmer",
            "Computer Science Engineer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 40,
          speed: 60,
        }}
      />
    </div>
  );
}

export default TypeRoles;
