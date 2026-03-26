import { tesloApi } from "@/api/TesloApi";
import type { AuthResponse } from "../interfaces/auth-response";

export const checkAuthAction =async():Promise<AuthResponse>=>{

    const token = localStorage.getItem("token");
    if(!token) throw new Error("No se encuentra el token");

    try{
        const {data} = await tesloApi.get<AuthResponse>("/auth/check-status");
        localStorage.setItem("token",data.token);
        return data;
    }catch(error){
        localStorage.removeItem("token");
        console.log(error);
        throw new Error("Token expired or no valid");
        
    }
}