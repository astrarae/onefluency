import { Button, Box, Image, Group } from "@chakra-ui/react";
import { Link } from 'react-router-dom'

const Card = ( {onClickNext, img, ...otherProps} ) => {
    return (
        <Box
            w="full"
            h="400px"
            {...otherProps}
        >
            <Image w="100%" h="95%" marginBottom={4} src={img} rounded="md"/>
            <Group grow>
                <Button 
                    onClick={onClickNext}
                    color="black"
                    variant="outline"
                    
                > 
                    Другой курс 
                </Button>

                <Link to="/contacts">
                    <Button
                        colorPalette="gray"
                        variant="subtle"
                        
                    >
                        Записаться на курс
                    </Button>
                </Link>
            </Group>
            
            
        </Box>
    )
}

export default Card;