import MainScreen from "./screens/MainScreen"
import { Routes, Route, useLocation } from "react-router-dom"
import ContactsScreen from "./screens/ContactsScreen"
import { AnimatePresence, motion } from "framer-motion"
import { Box } from '@chakra-ui/react'
import NotFoundScreen from "./screens/NotFoundScreen"


const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{x: -700}}
      animate={{x: 0}}
      exit={{ opacity: 0}}
      transition={{
        type: "spring",
        stiffness: 60,   // lower = softer
        damping: 15,     // higher = less bounce
      }}
    >
      {children}
    </motion.div>
  )
}

const LandingWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{y: -700}}
      animate={{y: 0}}
      exit={{y: 700, opacity: 0}}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 15,
      }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const location = useLocation();
  
  return (
    <Box bgColor="white">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* <Route path="/" element={<LandingWrapper> <LandingScreen/> </LandingWrapper>}/> */}
          <Route path="/" element={<PageWrapper> <MainScreen /> </PageWrapper>} />
          <Route path="/contacts" element={<PageWrapper>  <ContactsScreen /> </PageWrapper>}/>  
          <Route path="*" element={<PageWrapper>  <NotFoundScreen /> </PageWrapper>}/>
        </Routes>
      </AnimatePresence>
    </Box>
    
  )
}

export default App
