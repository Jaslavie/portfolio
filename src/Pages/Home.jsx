import NavBar from "../Components/NavBar";
import Reveal from "../Components/Reveal";

function Home() {
  return (
    <div>
      {" "}
      <NavBar />
      <Reveal width="100%">
        <h1>Welcome to the Landing Page</h1>
      </Reveal>
    </div>
  );
}

export default Home;
