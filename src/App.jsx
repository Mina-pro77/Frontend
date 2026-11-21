
import Vite from '../Components/VitePage'
import '../src/App.css'
import Val1 from '../Components/MulValues'
import ProbsObjs from '../Components/ProbsObjs'

const myval1 = {
  Name: "ESP32_4",
  Temp: 25,
  Hum: 78
}
const myval2 = {
  Name: "ESP32_5",
  Temp: 65,
  Hum: 87
}

function App() {

  return (
    <>
      <Vite />
      <Val1 Name="ESP32_1" Temp={34} Hum={89} />
      <Val1 Name="ESP32_2" Temp={35} Hum={90} />
      <Val1 Name="ESP32_3" Temp={36} Hum={91} />
      <ProbsObjs val={myval1} />
      <ProbsObjs val={myval2} />
    </>
  )
}

export default App
