import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="pink.100"
      p={2}
    >
      <Box
        w="80%"
        h="66.6%"
        bg="pink.300"
        mb={4}
        display="flex"
        p={2}
      >
        <Box
          w="40%"
          h="100%"
          mr={2}
          bg="blue.200"
        >
          Backlog
        </Box>
        <Box
          w="60%"
          h="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            h="30%"
            bg="blue.300"
            mb={2}
          >
            Current
          </Box>
          <Box
            h="70%"
            bg="pink.100"
          >
            Comandos
          </Box>
        </Box>
      </Box>
      <Box
        w="80%"
        bg="pink.300"
        h="33.3%"
        p={2}
      >
        <Box
          w="100%"
          h="100%"
          bg="blue.200"
        >
          [   ___   ]
        </Box>
      </Box>
    </Box>
  );
}

export default App;