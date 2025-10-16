import { Box } from "@chakra-ui/react";
import InteractiveSection from './InteractiveSection'
import { useState } from 'react'
import PriceBox from './PriceBox'
import CourseDescription from './CourseDescription'
import cards from '../language-courses-info'


const LanguageSection = () => {
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
                monthlyFullPayment={"1 560 000"} 
                monthlyActualPayment={"1 200 000"} 
                dailyPayment={"130 000"} 
                marginBottom={4}
                economyPercentage={"23"}
                economyTotalSum={"360 000"}
            />
            <CourseDescription 
                title={cards[activeImg].title} 
                description={cards[activeImg].description} 
                marginLeft={1}
            />
        </Box>
    )
}

export default LanguageSection;