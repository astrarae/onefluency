import { Box } from "@chakra-ui/react";
import InteractiveSection from './InteractiveSection'
import { useState } from 'react'
import PriceBox from './PriceBox'
import CourseDescription from './CourseDescription'
import cards from '../info'

const ActiveSection = () => {
    const [activeImg, setActiveImg] = useState(0);

    return (
        <Box
            id="main"
            w="100vw"
            h="100vh"
            display="block"
            overflowX="hidden"
            bgColor="white"
            p="4"
        >
            <InteractiveSection marginBottom={4} onSlideChange={e => setActiveImg(e)}/>
            <PriceBox marginBottom="10px"/>
            <CourseDescription title={cards[activeImg].title} description={cards[activeImg].description} marginLeft={1}/>
        </Box>
    )
}

export default ActiveSection;