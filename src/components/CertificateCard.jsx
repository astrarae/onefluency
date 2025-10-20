import { Box, Text, Button } from '@chakra-ui/react'
import { Search } from 'lucide-react'

const CertificateCard = ( { color, title, link } ) => {
    let boxShadow = "1px 1px 5px " + color
    return (
        <Box
            w="full"
            p={2}
            display="flex"
            alignItems="center"
            // border="1px solid black"
            boxShadow={boxShadow}
            rounded="md"
            justifyContent="space-between"
            as="a" href={link}
        >
            <Text color="black" fontSize="17px">{title}</Text>
            {/* <Text color="black" fontWeight={400}>IELTS Certificate</Text> */}
            <Button 
                variant="plain"
                color={color}
                p={2}
            >
                <Search />
            </Button>
        </Box>
    )
}

export default CertificateCard;