
import { useParams, Navigate, useNavigate } from 'react-router';

import { CustomFullScreenLoader } from '@/components/custom/CustomFullScreenLoader';
import { useProduct } from '@/admin/hooks/usePorduct';
import { ProductForm } from './ui/ProductForm';
import type { Product } from '@/interfaces/product-interface';
import { toast } from 'sonner';


export const AdminProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {isLoading,data:product,isError,mutation} =useProduct(id||"");



  const title = id==="new" ? "Nuevo producto":"Editar producto";

  const subTitle = id==="new"? "Aqui puedes crear un nuevo producto": "Aqui puedes editar el producto";


  const handleSubmit =async(data:Partial<Product> &{files?:File[]}) =>{
    await mutation.mutateAsync(data,{
      onSuccess:(data)=>{
        toast.success("Producto actualizado correctamente",{
          position:"top-right"
        });
        navigate(`/admin/products/${data.id}`);
      },
      onError:(error)=>{
        toast.error("Error al actualizar el producto");
        console.log(error);
      }
    });

  }

  if(isError){
    return <Navigate to="/admin/products"></Navigate>
  }

  if(isLoading){
    return <CustomFullScreenLoader></CustomFullScreenLoader>
  }

  if(!product){
    return <Navigate to="/admin/products"></Navigate>
  }

  return(
    <ProductForm title={title} subTitle={subTitle} product={product} onSubmit={handleSubmit} isPending={mutation.isPending}>

    </ProductForm>
  )
};