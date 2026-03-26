import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomJumbotron } from "@/shop/components/CustomJumbotron"
import { ProductsGrid } from "@/shop/components/ProductsGrid"
import { useProduct } from "@/shop/hooks/useProduct"


export const Home = () => {

  const {data} = useProduct();
  return (

    <>
      <CustomJumbotron title="Todos los productos"></CustomJumbotron>
      <ProductsGrid products={data?.products || []}></ProductsGrid>
      <CustomPagination totalPages={data?.pages || 0}></CustomPagination>
    </> 
    
  )
}
