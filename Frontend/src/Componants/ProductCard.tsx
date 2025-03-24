import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Image, Heading, Text, Stack, Button } from "@chakra-ui/react";
import { spliceString } from "../Helpers/textHelpers";
import { IProduct } from "../Tyeps/types";



const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Card 
      overflow="hidden"
      boxShadow="md"
      borderRadius="4px"
      border="1px solid #E2E8F0"
      padding="10px"
    >
      <Image
        borderRadius="4px"
        src={`http://localhost:1337${product.thumbnail.url}`} 
        alt={product.title}
      />

      <CardBody padding="5px">
        <Stack gap={3}>
          <Heading size="md">{product.title}</Heading>
          <Text color="gray.600" height={"70px"}>
            {spliceString(product.description, 150)}
          </Text>
          <Text fontSize="2xl" fontWeight="medium" letterSpacing="tight">
            ${product.price}
          </Text>
        </Stack>
      </CardBody>

      <CardFooter display="flex" justifyContent="space-between" mt="auto">
        <Button
          colorScheme="blue"
          _hover={{ backgroundColor: "red.600", transition: "0.3s ease-in-out" }}
        >
          Buy now
        </Button>
        <Button variant="outline" colorScheme="blue">
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
