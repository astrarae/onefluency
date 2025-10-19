import MainScreen from "./screens/MainScreen"
import ContactsScreen from "./screens/ContactsScreen"
import NotFoundScreen from "./screens/NotFoundScreen"
import TitleManager from "./functions/TitleManager"
import RegularPageWrapper from './functions/RegularPageWrapper'
import { 
  Routes, 
  Route, 
  useLocation 
} from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { 
  Box, 
} from '@chakra-ui/react'


function App() {
  const location = useLocation();
  
  return (
    <Box bgColor="white">
      <TitleManager />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<RegularPageWrapper> <MainScreen /> </RegularPageWrapper>} />
          <Route path="/contacts" element={<RegularPageWrapper>  <ContactsScreen /> </RegularPageWrapper>}/>  
          <Route path="*" element={<RegularPageWrapper>  <NotFoundScreen /> </RegularPageWrapper>}/>
        </Routes>
      </AnimatePresence>
    </Box>
    
  )
}

export default App
