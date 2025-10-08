import { Box, Text } from '@chakra-ui/react'

const CourseDescription = ({title, description, ...otherProps}) => {
    return (
        <Box {...otherProps}>
            <h1>{title}</h1>
            <Text color="black" fontSize="20px" fontWeight="500">{description}</Text>
        </Box>
    )
}

export default CourseDescription;