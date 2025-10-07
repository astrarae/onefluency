import { Box, Button } from "@chakra-ui/react"

const Hero = () => {
    return (
        <Box 
            w="100vw"
            h="100vh"
            display="block"
            overflow="hidden"
            bgImage="url('https://images.unsplash.com/photo-1510172951991-856a654063f9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" 
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