import { AdminTitle } from "@/admin/components/AdminTitle";
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
import { PlusIcon } from "lucide-react";
import { Link } from "react-router";

export const AdminProductsPage = () => {
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
            <TableHead className="w-[100px]">ID</TableHead>
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
          
          <TableRow>
          
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">
              <Link to= {`/admin/products`} >
                Editar
              </Link>
            </TableCell>
          
          </TableRow>
        
        </TableBody>
      
      </Table>
      <CustomPagination totalPages={10}></CustomPagination>
    </>
  );
};
