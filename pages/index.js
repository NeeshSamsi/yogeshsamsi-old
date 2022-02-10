// Components
import HeadComponent from "../components/HeadComponent"
import NavBar from "../components/NavBar"

import { Hero, About, Schedule, MediaTestimonials } from "../containers/Home"

const Home = () => {
  return (
    <>
      <HeadComponent />

      <NavBar theme={{ background: "darker", foreground: "lighter" }} />
      <Hero />
      <About />
      <Schedule />
      <MediaTestimonials />
    </>
  )
}

export default Home
