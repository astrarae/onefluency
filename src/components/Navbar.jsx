import { Box, Text, Button } from "@chakra-ui/react";
import CountryChoice from "./CountryChoice";



const Navbar = ({onClickHandle,currentCountry,...otherProps}) => {
    

    return (
        <Box
            {...otherProps}
            w="fit"
            h="20px"
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={2}
            
        >
            <Text ml={0.5} color="black" fontWeight={700} fontSize="15px">Ваша страна: </Text>
            <CountryChoice currentCountry={currentCountry} onClickHandle={onClickHandle} />
    
        </Box>
    )
}

export default Navbar;