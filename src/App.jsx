import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Rules from "./components/Rules"
import Judging from "./components/Judging"
import FAQ from "./components/FAQ"
import Timeline from "./components/Timeline"
import Rewards from "./components/Rewards"
import Partners from "./components/Partners"
import Privacy from "./components/Privacy"
import Footer from "./components/Footer"

export default function App() {
  return(
    <div>
      <Navbar />
      <Hero />
      <Intro />
      <Rules />
      <Judging />
      <FAQ />
      <Timeline />
      <Rewards />
      <Partners />
      <Privacy />
      <Footer />
    </div>
  )
}