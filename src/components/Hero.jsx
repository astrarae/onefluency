import { Box, Button } from "@chakra-ui/react"

const Hero = () => {

    const handleScroll = () => {
        const section = document.getElementById('main')
        section?.scrollIntoView({behavior: 'smooth'})
    }

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
                <h2>Learn &</h2>
                <h3>DISCOVER</h3>
            </Box>

            <Button
                onClick={handleScroll}
            >
                Get Started
            </Button>

        </Box>
    )
}

export default Hero;