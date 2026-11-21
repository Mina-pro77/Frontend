
import Vite from '../Components/VitePage'
import '../src/App.css'
import Val1 from '../Components/MulValues'
function App() {

  return (
    <>
      <Vite />
      <Val1 Name="ESP32_1" Temp={34} Hum={89} />
      <Val1 Name="ESP32_2" Temp={35} Hum={90} />
      <Val1 Name="ESP32_3" Temp={36} Hum={91} />
    </>
  )
}

export default App
