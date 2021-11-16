// Components
import HeadComponent from "../components/HeadComponent";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <HeadComponent />

      <NavBar theme={{ background: "dark", foreground: "light" }} />
    </>
  );
};

export default Home;
