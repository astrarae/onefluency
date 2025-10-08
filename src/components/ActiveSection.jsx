import { Text, Box, Grid, GridItem } from "@chakra-ui/react";
import Card from './Card'
import { useState } from 'react'
import PriceBox from './PriceBox'

const ActiveSection = () => {
    const [activeCard, setActiveCard] = useState(0);

    const cards = [
        {
            title: "Корейский язык",
            description: "Начни обучение корейскому языку даже с нуля. Этот курс нацелен на тех, кто хочет владеть языком свободно или в целях сдачи международного теста TOPIK. ",
            imgSrc: "https://images.unsplash.com/photo-1619179834700-7a886aac80cc?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, 
        {
            title: "Английский язык",
            description: "Целевая аудитория этого курса - люди, что желают обрести свободное владение языком или что желают сдать международный тест IELTS.",
            imgSrc: "https://images.unsplash.com/photo-1603989872628-7880d83bb581?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];

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

            <Card 
                onClickNext={onClickNext} 
                img={cards[activeCard].imgSrc}    
            />

            <PriceBox marginBottom="10px"/>

            <Box
                marginLeft={1}
            >
                <h1>{cards[activeCard].title}</h1>
                <Text color="black" fontSize="20px" fontWeight="500">{cards[activeCard].description}</Text>
            </Box>
            {/* <Grid
                mt="4" 
                h="full"
                w="full"
                // templateRows="repeat(1, 1fr)"
                // templateColumns="repeat(1, 1fr)"
                gap="4"
            >
                <GridItem>
                    
                </GridItem>
                <GridItem>
                    
                </GridItem>
                <GridItem
                    // colSpan="2"
                    // mt={8}
                >
                    
                </GridItem>
            </Grid> */}

        </Box>
    )
}

export default ActiveSection;