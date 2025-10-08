import { Box } from "@chakra-ui/react";
import Card from './Card'
import { useState } from 'react'
import PriceBox from './PriceBox'
import CourseDescription from './CourseDescription'
import cards from '../info'

const ActiveSection = () => {
    const [activeCard, setActiveCard] = useState(0);

    const onClickNext = () => {
        setActiveCard(prev => (prev === 0 ? 1 : 0))
        console.log(cards[activeCard].title);
    }

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
            <h1>Языки<span style={{color: "#726D6D"}}>, которые преподаю</span></h1>

            <Card onClickNext={onClickNext} img={cards[activeCard].imgSrc} marginBottom={12}/>
            <PriceBox marginBottom="10px"/>
            <CourseDescription title={cards[activeCard].title} description={cards[activeCard].description} marginLeft={1}/>
            
        </Box>
    )
}

export default ActiveSection;