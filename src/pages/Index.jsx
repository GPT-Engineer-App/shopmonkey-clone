import React from "react";
import { Box, Heading, Text, Button, Flex, Image, Stack, Grid, Icon } from "@chakra-ui/react";
import { FaCheck, FaTools, FaCar, FaUsers } from "react-icons/fa";

const Feature = ({ title, description, icon }) => (
  <Box textAlign="center" p={6}>
    <Icon as={icon} boxSize={12} mb={4} />
    <Heading as="h3" size="md" mb={2}>
      {title}
    </Heading>
    <Text>{description}</Text>
  </Box>
);

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex direction={["column", "row"]} align="center" justify="space-between" py={20} px={[4, 8]} bg="gray.100">
        <Box maxW="lg" mr={[0, 8]} mb={[8, 0]}>
          <Heading as="h1" size="2xl" mb={4}>
            Streamline Your Auto Shop Operations
          </Heading>
          <Text fontSize="xl" mb={8}>
            All-in-one software to manage your auto repair shop efficiently. Simplify your workflow and boost your productivity.
          </Text>
          <Button colorScheme="blue" size="lg">
            Get Started
          </Button>
        </Box>
        <Image src="https://images.unsplash.com/photo-1632733711679-529326f6db12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdXRvJTIwcmVwYWlyJTIwc2hvcCUyMHNvZnR3YXJlfGVufDB8fHx8MTcxMjUyMzUyN3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Auto Shop Software" maxW="lg" />
      </Flex>

      {/* Features Section */}
      <Box py={20} px={[4, 8]}>
        <Heading as="h2" size="xl" textAlign="center" mb={12}>
          Key Features
        </Heading>
        <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]} gap={8}>
          <Feature title="Appointment Scheduling" description="Easily schedule and manage customer appointments." icon={FaCheck} />
          <Feature title="Inventory Management" description="Track and manage your auto parts inventory." icon={FaTools} />
          <Feature title="Vehicle History" description="Maintain detailed records of vehicle service history." icon={FaCar} />
          <Feature title="Customer Management" description="Manage customer information and communication." icon={FaUsers} />
        </Grid>
      </Box>

      {/* CTA Section */}
      <Box bg="blue.600" py={20} px={[4, 8]} textAlign="center">
        <Heading as="h2" size="xl" color="white" mb={8}>
          Simplify Your Shop Management Today
        </Heading>
        <Button colorScheme="white" size="lg">
          Start Free Trial
        </Button>
      </Box>
    </Box>
  );
};

export default Index;
