import { RouterProvider } from "react-router"
import { appRouter } from "./app.router"
import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {Toaster} from "sonner";
import type { PropsWithChildren } from "react";
import { CustomFullScreenLoader } from "./components/custom/CustomFullScreenLoader";
import { useAuthStore } from "./auth/store/auth-store";

const queryClient = new QueryClient();

const CheckAuthProvider = ({children}:PropsWithChildren)=>{

    const {checkAuthStatus} = useAuthStore();

  const {isLoading} = useQuery({
    queryKey:["auth"],
    queryFn:checkAuthStatus,
    retry:false,
    refetchInterval:1000*60*1.5,
    refetchOnWindowFocus:true,
  });

  if(isLoading) return <CustomFullScreenLoader></CustomFullScreenLoader>;

  return children;
} 

export const TesloShopApp = () => {



  return (

    <QueryClientProvider client={queryClient}>
      <Toaster></Toaster>
      <CheckAuthProvider>
        <RouterProvider router={appRouter}></RouterProvider>
      </CheckAuthProvider>
      
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
    </QueryClientProvider>
  )
}
