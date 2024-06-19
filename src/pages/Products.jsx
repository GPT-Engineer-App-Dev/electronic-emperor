import { Box, SimpleGrid, Image, Text, VStack, Heading } from "@chakra-ui/react";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg" },
];

const Products = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">Products</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {sampleProducts.map(product => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.image} alt={product.name} />
            <VStack spacing={2} mt={4}>
              <Text fontSize="lg" fontWeight="bold">{product.name}</Text>
              <Text fontSize="md" color="gray.500">{product.price}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;