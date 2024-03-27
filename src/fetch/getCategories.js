import axios from "axios";
import { setCategories, setIsLoadingCategories } from "../slice/CategoriesSlice";

export default async function getCategories(dispatch){
    dispatch(setIsLoadingCategories())
    await axios.get("http://localhost:3000/categories")
    .then((data) => {
        dispatch(setCategories(data.data))
        // console.log(data.data)
    })
    .catch((err) => console.log(err))
}