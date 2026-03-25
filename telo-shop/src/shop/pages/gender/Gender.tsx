import  { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/mocks/products.mock"
import  { CustomJumbotron } from "@/shop/components/CustomJumbotron"
import  { ProductsGrid } from "@/shop/components/ProductsGrid"
import { useParams } from "react-router"


export const Gender = () => {

  const {gender} = useParams();
  const genderLabel = gender === "men" ? ("Hombres") : (gender === "women"? ("Mujeres") : ("Niños") );
  return (
    <>
      <CustomJumbotron title={`Prodcutos para ${genderLabel}`}></CustomJumbotron>
            <ProductsGrid products={products}></ProductsGrid>
            <CustomPagination totalPages={9}></CustomPagination>
    </>
  )
}
