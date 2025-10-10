import { Button, Box, Image, Group } from "@chakra-ui/react";
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion";
const Card = ( {onClickNext, img, ...otherProps} ) => {
    return (
        <Box
            w="full"
            h="400px"
            {...otherProps}
        >
            <AnimatePresence>
                <motion.div
                    key={img}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.6}}
                    
                >
                    <Image w="100%" h="380px" marginBottom={4} src={img} rounded="md"/>
                </motion.div>
            </AnimatePresence>
            <Group grow>
                <Button 
                    onClick={onClickNext}
                    color="black"
                    variant="plain"
                    border="1px solid black"
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