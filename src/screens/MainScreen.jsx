import Hero from './LandingScreen'
import { Box } from "@chakra-ui/react"
import LanguageSection from '../components/LanguageSection'
import TabsSection  from '@/components/Tabs'
import { useState } from 'react'
import ItSection from '../components/ItSection'
import Navbar from '../components/Navbar'


const MainScreen = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [currentCountry, setCurrentCountry] = useState(1)
    
    const languageHandler = () => {
        setActiveTab(() => 1)
    }

    const itHandler = () => {
        setActiveTab(() => 2)
    }

    const onClickHandle = (value) => {
        setCurrentCountry(value)
    }

    return (
        <Box 
            display="block" 
            bg="white" 
            w="full" 
            minH="100vh"
            minW="100vw"
            overflow="hidden"
            p={4}
        >
            <Navbar currentCountry={currentCountry} onClickHandle={onClickHandle} mb={4}/> 
            <TabsSection mb={4} activeTab={activeTab} languageHandler={languageHandler} itHandler={itHandler}/>
            {activeTab == 1 ? (
                <LanguageSection currentCountry={currentCountry}/>
            ) : (
                <ItSection currentCountry={currentCountry}/>
            )}
        </Box>
    )
}

export default MainScreen;