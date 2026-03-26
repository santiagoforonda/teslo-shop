import { createBrowserRouter, Navigate } from "react-router";
import { ShopLayout } from "./shop/layouts/ShopLayout";
import { Home } from "./shop/pages/home/Home";
import { ProductPage } from "./shop/pages/product/ProductPage";
import { Gender } from "./shop/pages/gender/Gender";
import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";
import { DashboardPage } from "./admin/pages/dashboard/DashboardPage";
import { AdminProductsPage } from "./admin/pages/admin-product/AdminProductsPage";
import { AdminProductPage } from "./admin/pages/admin-product/AdminProductPage";
import { lazy } from "react";
import { AdminRoute, NotAuthenticatedRoute } from "./components/routes/ProtectedRoutes";


const AuthLayout = lazy(()=>import("./auth/layout/AuthLayout"));
const AdminLayout = lazy(()=>import("./admin/layouts/AdminLayout"));

export const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<ShopLayout></ShopLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"product/:idslug",
                element:<ProductPage></ProductPage>
            },
            {
                path:"gender/:gender",
                element:<Gender></Gender>
            },
        ],
        
    },
    {
            path:"/auth",
            element: <NotAuthenticatedRoute><AuthLayout></AuthLayout></NotAuthenticatedRoute>,
            children:[
                {
                    index:true,
                    element:<Navigate to="/auth/login"></Navigate>
                },
                {
                    path:"login",
                    element:<LoginPage></LoginPage>
                },
                {
                    path:"register",
                    element:<RegisterPage></RegisterPage>
                }
            ]
    },
    {
        path:"/admin",
        element:<AdminRoute>
            <AdminLayout></AdminLayout>
        </AdminRoute>,
        children:[
            {
                index:true,
                element:<DashboardPage></DashboardPage>
            },
            {
                path:"products",
                element:<AdminProductsPage></AdminProductsPage>
            },
            {
                path:"products/:id",
                element:<AdminProductPage></AdminProductPage>
            }
        ]
    },
    {
        path:"*",
        element: <Navigate to="/"></Navigate>
    }
])