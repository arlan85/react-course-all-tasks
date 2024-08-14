import { Box, Button, Flex, Heading, Spacer, Tag, Text } from '@chakra-ui/react';

export function LaunchItem(launch) {
    return (
    <Box bg="gray.100" p={4} m={4} borderRadius={3}>
      <Flex display='flex'>
      <Heading as="h3" p={4} size="sm">{launch.mission_name}</Heading>
      <Text fontSize="2x1" p={4}>({launch.launch_year})</Text>
      <Spacer/>
      <Tag colorScheme={launch.launch_success? 'green': 'red'}>{launch.launch_success? 'Success': 'Failure'}</Tag>
      </Flex>

      <Button colorScheme='purple'>More Details</Button>
    </Box>
    )
}