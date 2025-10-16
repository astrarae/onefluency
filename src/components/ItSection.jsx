import { Box } from "@chakra-ui/react";
import InteractiveSection from './InteractiveSection'
import { useState } from 'react'
import PriceBox from './PriceBox'
import CourseDescription from './CourseDescription'
import cards from '../it-courses-info'


const ItSection = () => {
    const [activeImg, setActiveImg] = useState(0);

    return (
        <Box
            id="main"
            w="auto"
            h="auto"
            display="block"
            overflowX="hidden"
            bgColor="white"
        >
            <InteractiveSection firstSlideImageSrc={cards[0].imgSrc} secondSlideImageSrc={cards[1].imgSrc} marginBottom={4} onSlideChange={e => setActiveImg(e)}/>
            <PriceBox 
                monthlyFullPayment={"1 800 000"} 
                monthlyActualPayment={"1 400 000"} 
                dailyPayment={"150 000"} 
                marginBottom={4}
                economyPercentage={"22"}
                economyTotalSum={"400 000"}
            />
            <CourseDescription 
                title={cards[activeImg].title} 
                description={cards[activeImg].description} 
                marginLeft={1}
            />
        </Box>
    )
}

export default ItSection;