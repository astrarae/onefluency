import Hero from './components/Hero'
import { Box, Button } from "@chakra-ui/react"
import ActiveSection from './components/ActiveSection'

function App() {
  
  
  
  return (
    <Box 
      display="block" 
      bg="white" 
      w="full" 
      minH="100vh"
      minW="100vw"
      overflow="hidden"
    > 
      <Hero />
      
      <ActiveSection />
      
      {/* <CardHolder /> */}
    </Box>
  )
}

export default App
