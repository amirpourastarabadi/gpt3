import {
  Features,
  Blog,
  WhatGPT3,
  Header,
  Footer,
  Possibility,
} from "./sections"
import { CTA, Brand, Navbar } from "./components"

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
