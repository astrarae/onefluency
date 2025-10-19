import { Box, Avatar, Text, Button } from '@chakra-ui/react'
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard'



const ContactCard = ({title, avatar, link}) => {
    return (
        <Box
            w="full"
            h="60px"
            p={3}
            display="flex"
            boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
            alignItems="center"
            justifyContent="space-between"
            rounded="lg"
            gap={2}
        >
            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap={4}
            >
                <Avatar.Root borderless>
                    <Avatar.Fallback name="avatar"/>
                    <Avatar.Image  src={avatar}/>
                </Avatar.Root>

                <Text fontSize="1.2rem" color="black" fontWeight={500}>{title}</Text>
            </Box>

            <Button onClick={() => window.open(link)}><ChevronRight size={18} strokeWidth={2}/></Button>
        </Box>
    )
}


const ContactsScreen = () => {
    return  (
        <Box 
            display="block" 
            bg="white" 
            w="full" 
            minH="100vh"
            minW="100vw"
            overflowX="hidden"
            p={4}
        > 
            <ProfileCard 
                avatarImage="avatarr.jpg"
                backgroundImage="https://images.pexels.com/photos/1824273/pexels-photo-1824273.jpeg"
            />

            <Box 
                marginTop={4} 
                display="flex"
                flexDirection="column"
                gap={4}
                mb={8} 
            >
                <ContactCard title="Telegram" avatar="https://cdn.pixabay.com/photo/2021/12/27/10/50/telegram-6896827_1280.png" link="https://t.me/v4LeR4ik"/>
                <ContactCard title="Facebook" avatar="facebook.png" link="https://www.facebook.com/profile.php?id=61554697711034"/>
                <ContactCard title="Discord" avatar="discord.jpg" link="https://discord.gg/P5Keaq9N"/>
            </Box>

            {/* <Link to="/">
                <Button 
                    position="fixed"
                    bottom="20px"
                    left="15px"
                    rounded="50%"
                    variant="plain"
                    
                    color="gray.400"
                    h="55px"
                    w="55px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    boxShadow="1px 1px 7px rgba(0, 0, 0, 0.4)"
                        
                >
                    <ChevronLeft size={18} strokeWidth={2} />
                </Button>
            </Link> */}
        </Box>
    )
}

export default ContactsScreen;