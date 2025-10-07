import Hero from './components/Hero'
import { Box, Button } from "@chakra-ui/react"
import ActiveSection from './components/ActiveSection'

function App() {
  
  const handleScroll = () => {
    const section = document.getElementById('main')
    section?.scrollIntoView({behavior: 'smooth'})
  }
  
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
      <Button
        position="fixed"
        bottom="15px"
        variant="solid"
        left="15px"
        onClick={handleScroll}
      >Scroll Down</Button>
      {/* <CardHolder /> */}
    </Box>
  )
}

export default App
