// Components
import HeadComponent from "../components/HeadComponent";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <HeadComponent />

      <NavBar theme={{ background: "dark", foreground: "light" }} />

      <main></main>
    </>
  );
};

export default Home;
