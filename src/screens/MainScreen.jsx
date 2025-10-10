import Hero from './LandingScreen'
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
            
            <ActiveSection />
        </Box>
    )
}

export default MainScreen;