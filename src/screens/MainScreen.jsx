import Hero from '../components/Hero'
import { Box } from "@chakra-ui/react"
import ActiveSection from '../components/ActiveSection'


const MainScreen = () => {
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
        </Box>
    )
}

export default MainScreen;