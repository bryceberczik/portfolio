import AboutCard from "../components/AboutCard";
import ProfilePic from "../images/IMG_0240.jpg";

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="mt-[150px] w-[150px] mx-auto h-[150px] ">
        <img
          src={ProfilePic}
          className="rounded-full w-full h-full object-cover box"
          alt="Profile picture of Bryce Berczik"
        />
      </div>
      <div className="text-center">
        <h1 className="text-white text-lg mt-5 font-semibold">Hey I'm Bryce. 🧑‍💻</h1>
        <p className="jse text-2xl mt-2">Junior Software Engineer</p>
        <p className="text-white text-2xl mt-4 px-3">
          Focused on building impactful apps and mastering new technologies.
        </p>
      </div>

      <div id="about" className="w-full text-center mt-[100px]">
        <h1 className="text-white font-semibold text-2xl">About</h1>
        <AboutCard />
      </div>
    </div>
  );
};

export default Home;
