import LanguageSection from '../components/LanguageSection'
import TabsSection  from '@/components/Tabs'
import { useState } from 'react'
import ItSection from '../components/ItSection'
import Navbar from '../components/Navbar'
import { 
    Box,     
} from "@chakra-ui/react"


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
            w="100vw"
            h="100vh"
            overflowX="hidden"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <Box 
            display="block"  
            w={{base: "400px", md: "500px", lg: "600px"}}
            minH="100vh"
            
            overflowX="hidden"
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
        </Box>
        
    )
}

export default MainScreen;