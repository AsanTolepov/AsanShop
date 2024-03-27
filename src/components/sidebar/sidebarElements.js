import { BiCategoryAlt, BiTable } from "react-icons/bi"; 
import { SlBasket } from "react-icons/sl"; 
import { RxDashboard } from "react-icons/rx";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
const sidebarElementsData = [
    {
        id: 2,
        name: "Products",
        icon: SlBasket,
        title: "-ADMIN INTERFACE",
        path: "/"
    },
    {
        id: 3,
        name: "Categories",
        icon: BiCategoryAlt,
        path : "/categories"
    },
    {
        id: 4,
        name: "Creat products",
        icon: BiTable,
        path: '/creat-products'
    },
    {
        id: 5,
        name: "Creat categories",
        icon: BsReverseLayoutTextWindowReverse,
        path: '/creat-categories'
    },
];

export default sidebarElementsData;
