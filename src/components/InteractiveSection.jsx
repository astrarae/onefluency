import { Button, Box, Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import './InteractiveSection.css'


const InteractiveSection = ( { onSlideChange, ...otherProps } ) => {
    
    return (
        <Box
            {...otherProps}
        >   
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                onSlideChange={e => onSlideChange(e.activeIndex)}
                slidesPerView={1}
                spaceBetween={30}
            >
                <SwiperSlide>
                    <Image src="https://images.unsplash.com/photo-1619179834700-7a886aac80cc?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" rounded="md"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://images.unsplash.com/photo-1603989872628-7880d83bb581?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" rounded="md"/>
                </SwiperSlide>
            </Swiper>


            <Link style={{flex: 1}} to="/contacts">
                <Button
                    w="100%"
                    colorPalette="gray"
                    variant="subtle"
                    mt={4}
                    rounded="md"
                >
                    Записаться на курс
                </Button>
            </Link>

        </Box>
    )
}

export default InteractiveSection;