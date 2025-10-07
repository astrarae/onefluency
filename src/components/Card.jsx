import { Button, Box, Image, Group } from "@chakra-ui/react";

const LangCard = ( {onClickNext, img} ) => {
    return (
        <Box
            w="full"
            h="full"
            marginBottom={4}
        >
            <Image w="100%" h="95%" marginBottom={4} src={img} rounded="md"/>
            <Button 
                onClick={onClickNext}
                w="full"
                colorPalette="gray"
                variant="subtle"
            > 
                Next 
            </Button>
            
        </Box>
    )
}

export default LangCard;