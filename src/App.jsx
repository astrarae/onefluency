import MainScreen from "./screens/MainScreen"
import { Routes, Route, useLocation } from "react-router-dom"
import ContactsScreen from "./screens/ContactsScreen"
import { AnimatePresence, motion } from "framer-motion"
import { Box, Text, Image } from '@chakra-ui/react'
import LandingScreen from './screens/LandingScreen'
import { useState, useEffect } from 'react'

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
  const [isMobile, setIsMobile] = useState(true);
  
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobileCheck = /android|iphone|ipad|ipod|opera mini|iemobile|wpdesktop/i.test(userAgent);

    setIsMobile(mobileCheck || window.innerWidth < 768)
  }, [])

  if (!isMobile){
    return (
      <Box
        h="100vh"
        w="100vw"
        bgColor="black"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap={4}
      >
        <Box
          bgColor="#1f90ff"
          p={4}
          w="400px"
          h="70px"
          rounded="md"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="white" fontWeight={500}>This website is only available on mobile phones!</Text>
        </Box>
      </Box>
    )
  }
  
  return (
    <Box bgColor="white">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingWrapper> <LandingScreen/> </LandingWrapper>}/>
          <Route path="/main" element={<PageWrapper> <MainScreen /> </PageWrapper>} />
          <Route path="/contacts" element={<PageWrapper> <ContactsScreen/> </PageWrapper>}/>  
        </Routes>
      </AnimatePresence>
    </Box>
    
  )
}

export default App
