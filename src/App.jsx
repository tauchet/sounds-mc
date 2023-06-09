import sounds from "./files/assets.json";
import './App.css'
import { Sound } from "./components/Sound";

const SOUNDS = Object.entries(sounds)
    .map(([key, value]) => value.sounds)
    .flat()
    .map(item => item.name ? item.name : item)
    .map(item => item.split("\/").join("."))

function App() {
  return (
    <>
      {SOUNDS.map(sound => {
        return <Sound id={sound} key={sound} path={sound.split("\.").join("/")} />
      })}
    </>
  )
}

export default App
