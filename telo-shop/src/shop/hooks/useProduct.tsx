import { useQuery } from "@tanstack/react-query"
import { getProductAction } from "../actions/get-products-action"
import { useParams, useSearchParams } from "react-router"


export const useProduct = () => {

    const {gender} = useParams();
    const [searchParams] = useSearchParams();

    const query = searchParams.get("q")|| undefined;
    const limit = searchParams.get("limit") || 9;
    const page = searchParams.get("page") ||1;
    const sizes = searchParams.get("sizes") || undefined;

    const offset = (Number(page)-1) * Number(limit);


    const price = searchParams.get("price") || "any";
    let minPirce = undefined;
    let maxPrice = undefined;

    switch(price){
        case "any": break;

        case "0-50":
            minPirce =0;
            maxPrice=50;
            break;
        case "50-100":
            minPirce=50;
            maxPrice=100;
            break;
        case "100-200":
            minPirce=100;
            maxPrice=200;   
            break;

        case "200+":
            minPirce=200;
            break;
    }

  return useQuery({
    queryKey:["products",{offset,limit,gender,sizes,minPirce,maxPrice,query}],
    queryFn: ()=> getProductAction({
        limit:Number.isNaN(+limit)? 9:limit,
        offset:Number.isNaN(offset) ? 0 :offset,
        gender:gender,
        sizes:sizes,
        minPrice:minPirce,
        maxPrice:maxPrice,
        query:query
    }),
    staleTime: 1000 * 60 *5
  })
}
