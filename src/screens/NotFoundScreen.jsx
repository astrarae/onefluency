import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom'

const NotFoundScreen = () => {
    return (
        <Box
            bgColor="white"
            h="100vh"
            w="100vw"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="center"
        >
            <Link to="/">
                <Button
                    variant="plain"
                    color="black"
                    borderBottom="1px solid black"
                    position="fixed"
                    left={2}
                    top={2}    
                >
                    Меню
                </Button>
            </Link>
            <Box
                position="relative"
                w="full"
            >
                <Image 
                    src="anya-forger-pointing.png"
                    position="absolute"
                    bottom={0}
                    left={-32}
                    w="500px"
                />
                <Image 
                    src="underconstruction.png"
                    mb={52}
                    w="full"
                />
            </Box>

        </Box>
    )
}

export default NotFoundScreen;