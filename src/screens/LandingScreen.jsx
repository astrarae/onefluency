import { Box, Button } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const LandingScreen = () => {

    return (
        <Box 
            w="100vw"
            h="100vh"
            display="flex"
            overflow="hidden"
            bgImage="url('green-background.jpg')" 
            bgSize="cover"                  
            bgPosition="center"             
            bgRepeat="no-repeat"
            p="8"
            justifyContent="space-between"
            flexDirection="column"
            
        >
            <Box        
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <h2
                    style={{
                        color: 'black',
                        fontSize: '60px',
                        fontFamily: 'Monsieur La Doulaise',
                    }}
                >Learn &</h2>
                <h3>DISCOVER</h3>
            </Box>

            <Link to="/main">
                <Button>Get Started</Button>
            </Link>
        </Box>
    )
}

export default LandingScreen;