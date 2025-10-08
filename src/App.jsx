import MainScreen from "./screens/MainScreen"
import { Routes, Route } from "react-router-dom"
import ContactsScreen from "./screens/ContactsScreen"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/contacts" element={<ContactsScreen/>}/>  
    </Routes>
  )
}

export default App
