import { Box } from "@chakra-ui/react";

const PriceBox = ({...props}) => {
    return (
        <Box
            w="full"
            h="125px"
            rounded="lg"
            boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
            p={2}
            {...props}
        >
            <h1>
                <span style={{fontSize:"1.5rem"}}>1 560 000 so'm</span>
                <span style={{fontSize:"1.5rem", color: "#726D6D"}}> /мес.</span>
            </h1>

            <Box
                p={3}
                display="flex"
                bgColor="gray.300"
                justifyContent="center"
                alignItems="center"
                rounded="lg"
                gap={2}
            >
                <span
                    style={{
                        fontWeight: "700",        
                        color: "black",
                    }}
                >
                    Ежедевной оплатой 
                </span>
                <Box
                    rounded="lg"
                    bgColor="#1f90ff"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    color="white"
                    p={2}
                >
                    <span 
                        style={{
                            fontWeight: "700"        
                        }}
                    >
                        130 000 so'm
                    </span>
                </Box>
            </Box>
        </Box>
    )
}

export default PriceBox;