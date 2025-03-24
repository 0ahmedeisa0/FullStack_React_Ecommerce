import { Box, Grid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { IProduct } from "../Tyeps/types";



const Products = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await fetch(import.meta.env.VITE_API_URL);
    
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return response.json();
    },
  });

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred: {error.message}</p>;


  const productList: IProduct[] = data?.data || [];

  return (
    <Box padding={"20px"}>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
        gap={6}
      >
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
