import { Box, Button } from "@chakra-ui/react"

const Hero = () => {
    return (
        <Box 
            w="100vw"
            h="100vh"
            display="block"
            overflow="hidden"
            bgImage="url('green-background.jpg')" 
            bgSize="cover"                  
            bgPosition="center"             
            bgRepeat="no-repeat"
            p="8"
            
        >
            <Box        
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <h2>Learn &</h2>
                <h3>DISCOVER</h3>
            </Box>


        </Box>
    )
}

export default Hero;