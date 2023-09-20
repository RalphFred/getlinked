import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Rules from "./components/Rules"
import Judging from "./components/Judging"
import FAQ from "./components/FAQ"

export default function App() {
  return(
    <div>
      <Navbar />
      <Hero />
      <Intro />
      <Rules />
      <Judging />
      <FAQ />
    </div>
  )
}