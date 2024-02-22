import { useState } from "react";
import { useParams } from "react-router-dom";

import api from "../api/api";
import { Product } from "../types/types";

export const useGetProductById = () => {

  const {id: idProduct} = useParams();
  
  const [product, setProduct] = useState<Product>({} as Product);
  
  const getProduct = async (id:string) => {
    try {
      const { data } = await api.get<Product>(`objects/${id}`)
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    idProduct,
    product,
    getProduct
  }
}