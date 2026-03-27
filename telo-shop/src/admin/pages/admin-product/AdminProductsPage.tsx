import { AdminTitle } from "@/admin/components/AdminTitle";
import { CustomFullScreenLoader } from "@/components/custom/CustomFullScreenLoader";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { currencyFormatter } from "@/lib/currencyFormatter";
import { useProduct } from "@/shop/hooks/useProduct";
import { PencilIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router";

export const AdminProductsPage = () => {

  const {data,isLoading} = useProduct();

  if(isLoading){
    return <CustomFullScreenLoader></CustomFullScreenLoader>
  }

  return (
    <>

    <div className="flex justify-between items-center">
    <AdminTitle
        title="Productos"
        subTitle="Aqui puedes ver y administrar tus productos"
      ></AdminTitle>
      <Link to="/admin/products/new">
        <Button>
          <PlusIcon></PlusIcon>
          Nuevo producto
        </Button>
      </Link>

    </div>
      

      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-1">
        
        <TableHeader>
          <TableRow>
            
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>

          {
            data?.products.map((product)=>(
              <TableRow key={product.id}>
          
            <TableCell className="font-medium">
              <img src={product.images[0]} alt={product.title}></img>
            </TableCell>
            <TableCell>{product.title}</TableCell>
            <TableCell>{currencyFormatter(product.price)}</TableCell>
            <TableCell>{product.gender}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell>{product.sizes.join(", ")}</TableCell>
            <TableCell className="text-right">
              <Link to= {`/admin/products/${product.id}`} >
                <PencilIcon className="w-4 h-4 text-blue-500"></PencilIcon>
              </Link>
            </TableCell>
          
          </TableRow>
            ))
          }
          
          
        
        </TableBody>
      
      </Table>
      <CustomPagination totalPages={data?.pages || 0}></CustomPagination>
    </>
  );
};
