import NavBar from "../Components/NavBar";
import Reveal from "../Components/Reveal";
import { TypeAnimation } from "react-type-animation";
function Home() {
  return (
    <div>
      {" "}
      <NavBar />
      <Reveal width="100%">
        <section>
          <div className="hero">
            <h1>Jasmine is a</h1>

            <h1>
              <span>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "User-obsessed Engineer",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Data-driven Designer",
                    1000,
                    "Hackathon Enthusiast",
                    1000,
                  ]}
                  wrapper="span"
                  speed={10}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p>18 y.o. design engineer building @ NASA</p>
          </div>
        </section>
      </Reveal>
    </div>
  );
}

export default Home;
