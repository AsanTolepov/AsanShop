import axios from "axios";
import { setIsLoading, setProducts } from "../slice/ProductSlice";

export default async function getProducts(dispatch){
    dispatch(setIsLoading())
    await axios.get('http://localhost:3000/products')
    .then((data) => {
        dispatch(setProducts(data.data))
        // console.log(data.data)
    })
    .catch((err) => console.log(err))
}