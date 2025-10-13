import { Box, Button, Text, Image } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import './LandingScreen.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation';



const LandingScreen = () => {

    return (
        <Box 
            w="100vw"
            h="100vh"
            overflow="hidden"
            bgColor="white"
        >
            {/* <Box        
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <h2
                    style={{
                        color: 'black',
                        fontSize: '60px',
                        fontFamily: 'Monsieur La Doulaise',
                    }}
                >Learn &</h2>
                <h3>DISCOVER</h3>
            </Box> */}
            <Box
                p={4}
                bgColor="black"
                w="full"
                h="60px"
                display="flex"
                flexDirection="row"
                alignItems="center"
                position="absolute"
            >
                <Text color="white" fontWeight={700} fontSize="12px">One Fluency</Text>
            </Box>

            <Box
                mt={16}
                p={2}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                h="93%"
>
                <Box>
                    <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Navigation]}
                    navigation={true} 
                    >
                        <SwiperSlide>
                            <Image
                                src="EnglishBanner.png"
                                alt="English Banner"
                                w="full"
                                h="full"
                                rounded={0}
                                objectFit="none"
                                objectPosition="center"  
                            />
                        
                        </SwiperSlide>
                        <SwiperSlide>
                        
                            <Image
                                src="KoreanBanner.png"
                                alt="English Banner"
                                w="full"
                                h="full"
                                rounded={0}
                                objectFit="none"
                                objectPosition="center"  
                            />
                        
                        </SwiperSlide>
                    </Swiper>
                </Box>
            
                <Link to="/main">
                    <Button
                        mb={5}
                        bgColor="black"
                        p={4}
                        h="50px"
                        w="full"
                        color="white"
                    >
                        Начать
                    </Button>
                </Link>
            </Box>

           

            

            

            
        </Box>
    )
}

export default LandingScreen;