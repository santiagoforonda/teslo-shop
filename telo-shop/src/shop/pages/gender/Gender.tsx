import  { CustomPagination } from "@/components/custom/CustomPagination"

import  { CustomJumbotron } from "@/shop/components/CustomJumbotron"
import  { ProductsGrid } from "@/shop/components/ProductsGrid"
import { useProduct } from "@/shop/hooks/useProduct"
import { useParams } from "react-router"


export const Gender = () => {

  const {data} = useProduct();
  const {gender} = useParams();
  const genderLabel = gender === "men" ? ("Hombres") : (gender === "women"? ("Mujeres") : ("Niños") );
  return (
    <>
      <CustomJumbotron title={`Prodcutos para ${genderLabel}`}></CustomJumbotron>
            <ProductsGrid products={data?.products || []}></ProductsGrid>
            <CustomPagination totalPages={data?.pages || 1}></CustomPagination>
    </>
  )
}
