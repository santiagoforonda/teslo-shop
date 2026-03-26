import { tesloApi } from "@/api/TesloApi"
import type { ProductResponse } from "@/interfaces/producst-response";


interface Options{
    limit?:number | string;
    offset?: number | string;
    sizes?:string;
    gender?:string;
    minPrice?:number;
    maxPrice?:number;
    query?:string;
}

const mapImageProducts =(data:ProductResponse):ProductResponse=>{
    const productstWithImageUrl = data.products.map(product =>({
        ...product,
        images: product.images.map(
            image => `${import.meta.env.VITE_API_URL}/files/product/${image}`
        )
    }));
    return {
        ...data,
        products: productstWithImageUrl
    };
}

export const getProductAction = async(options:Options):Promise<ProductResponse>=>{
    
    const {limit,offset,gender,sizes,minPrice,maxPrice,query} = options;
    
    const {data} = await tesloApi.get<ProductResponse>("/products",{
        params:{
            limit,
            offset,
            gender,sizes,
            minPrice,maxPrice,
            q:query
        }
    });

    return mapImageProducts(data);
}