import Footer from "../components/Footer"
import "../css/tailwind.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
