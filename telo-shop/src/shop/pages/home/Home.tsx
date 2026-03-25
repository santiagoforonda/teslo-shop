import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/mocks/products.mock"
import { CustomJumbotron } from "@/shop/components/CustomJumbotron"
import { ProductsGrid } from "@/shop/components/ProductsGrid"


export const Home = () => {
  return (

    <>
      <CustomJumbotron title="Todos los productos"></CustomJumbotron>
      <ProductsGrid products={products}></ProductsGrid>
      <CustomPagination totalPages={9}></CustomPagination>
    </> 
    
  )
}
