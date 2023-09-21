import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Rules from "./components/Rules"
import Judging from "./components/Judging"
import FAQ from "./components/FAQ"
import Timeline from "./components/Timeline"

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
    </div>
  )
}