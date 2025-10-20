import { Box } from '@chakra-ui/react'
import ProfileCard from '../components/ProfileCard'
import Footer from '../components/Footer'
import CertificateCard from '../components/CertificateCard'
import ContactCard from '../components/ContactCard'

const ContactsScreen = () => {
    return  (
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
                display="flex"
                flexDir="column"
                alignItems="center" 
                bg="white" 
                w={{base: "100vw", md: "500px", lg: "600px"}}
                minH="100vh"
                overflowX="hidden"
                p={4}
            > 
                <ProfileCard 
                    avatarImage="avatarr.jpg"
                    backgroundImage="https://images.pexels.com/photos/1824273/pexels-photo-1824273.jpeg"
                >
                    <CertificateCard title="IELTS Certificate" link="https://photos.app.goo.gl/R3Ur63Xrd7Vm5xnP6" color="rgba(8, 0, 255, 0.74)"/>
                    <CertificateCard title="TOPIK Certificate" link="https://photos.app.goo.gl/1uaFz2nF8dfxrKVR6" color="rgba(86, 0, 249, 0.56)"/>
                </ProfileCard>

                <Box 
                    w="full"
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

                <Footer />
            </Box>
            
        </Box>
    )
}

export default ContactsScreen;